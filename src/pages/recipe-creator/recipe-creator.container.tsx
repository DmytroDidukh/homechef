import React, { useCallback, useMemo, useState } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';
import { RecipeImagePlaceholder } from 'components/recipe-image-placeholder/recipe-image-placeholder.component';
import { Button } from 'components/button/button.component';
import { Image } from 'components/image/image.component';
import { Typography } from 'components/typography/typography.component';

import { useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/app';
import { Recipe, RecipeServiceInterface } from 'services/recipe-service';
import { RecipeFileService } from 'services/file-service';
import { validationService } from 'services/validation-service';
import { INITIAL_RECIPE_ERRORS_STATE } from 'constants/errors';
import { TRANSLATIONS } from 'constants/translations';
import { api } from 'api';

import {
    FilesSaveOptionsInterface,
    RecipeDataInterface,
    RecipeInterface,
} from 'typescript/interfaces';
import {
    BUTTON_STYLE_ENUM,
    RECIPE_DATA_PROPERTY_ENUM,
    TYPOGRAPHY_FONT_WEIGH_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';
import type { RecipeDataErrorsType } from 'typescript/types';

import styles from './recipe-creator.module.scss';

interface RecipeStateInterface {
    recipe: RecipeInterface & RecipeServiceInterface;
}

export const RecipeCreator: React.FC = (): JSX.Element => {
    const language = useAppSelector(selectLanguage);

    const [recipeState, setRecipeState] = useState<RecipeStateInterface>({
        recipe: new Recipe(),
    });
    const [errorsData, setErrorsData] = useState<RecipeDataErrorsType>(INITIAL_RECIPE_ERRORS_STATE);
    const [mainImage, setMainImage] = useState<string>('');

    const files = useMemo(() => new RecipeFileService(), []);

    const dataChangeHandler = useCallback((property: keyof RecipeDataInterface, value: any) => {
        setErrorsData(INITIAL_RECIPE_ERRORS_STATE);

        if (value) {
            recipeState.recipe.addDataProperty(property, value);

            setRecipeState({ recipe: recipeState.recipe });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fileSaveHandler = useCallback((file: File, options: FilesSaveOptionsInterface = {}) => {
        if (options.main) {
            console.log('ADDING MAIN...');
            files.addMain(file);
        }

        if (typeof options.step === 'number') {
            files.addToSteps({ step: options.step, file });
        }
        console.log(files);

        setMainImage(URL.createObjectURL(file));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitSavingHandler = useCallback(
        () => {
            const _errors = validationService.validateRecipeData(recipeState.recipe.data, [
                RECIPE_DATA_PROPERTY_ENUM.NAME_UK,
            ]);

            console.log('SAVING', _errors);

            if (_errors.errorsFound) {
                setErrorsData(_errors);
                console.log('ERRORS DETECTED');
            } else {
                console.log('ALL FIELDS ARE VALID');

                // @ts-ignore
                api.media.uploadFile(files.main);
            }
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    console.log('RECIPE: ', recipeState.recipe);
    console.log('RECIPE: ', styles);

    return (
        <PageContainer className={styles.root}>
            <Typography
                className={styles.title}
                value={TRANSLATIONS[language].RECIPE_CREATOR.NEW}
                variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_5}
                style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                weight={TYPOGRAPHY_FONT_WEIGH_ENUM.SEMI_BOLD}
            />
            <RecipeNameChangeable
                error={errorsData.errors[RECIPE_DATA_PROPERTY_ENUM.NAME_UK]}
                valueSaveHandler={dataChangeHandler}
                language={language}
            />

            <div className={styles['main-image-container']}>
                {!mainImage ? (
                    <RecipeImagePlaceholder fileSaveHandler={fileSaveHandler} language={language} />
                ) : (
                    <div className={styles['main-image']}>
                        <Image
                            skeletonProps={{ width: 600, height: 400 }}
                            src={mainImage}
                            alt="Food"
                        />
                    </div>
                )}
            </div>

            <div>
                <Button
                    label={TRANSLATIONS[language].COMMON.SAVE}
                    onClick={submitSavingHandler}
                    style={BUTTON_STYLE_ENUM.LIGHT}
                />
                <br />
                <Button
                    label={TRANSLATIONS[language].RECIPE_CREATOR.SUGGEST}
                    style={BUTTON_STYLE_ENUM.PRIMARY}
                />
            </div>
        </PageContainer>
    );
};
