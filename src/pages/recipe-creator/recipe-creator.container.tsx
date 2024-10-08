import React, { useCallback, useMemo, useState } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';
import { RecipeImage } from 'components/recipe-image/recipe-image.component';
import { Button } from 'components/button/button.component';
import { Typography } from 'components/typography/typography.component';

import { useTranslation } from 'hooks/useTranslation';
import { Recipe, RecipeServiceInterface } from 'services/recipe-service';
import { RecipeFileService } from 'services/file-service';
import { validationService } from 'services/validation-service';
import { INITIAL_RECIPE_ERRORS_STATE } from 'constants/errors';
import { TRANSLATION_KEYS } from 'translations/keys';
// import { api } from 'api';

import {
    FilesSaveOptionsInterface,
    RecipeDataChangePropsInterface,
    RecipeInterface,
    RecipeDataErrorsInterface,
} from 'typescript/interfaces';
import {
    BUTTON_STYLE_ENUM,
    RECIPE_DATA_PROPERTY_ENUM,
    RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM,
    TYPOGRAPHY_FONT_WEIGH_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './recipe-creator.module.scss';

interface RecipeStateInterface {
    recipe: RecipeInterface & RecipeServiceInterface;
}

export const RecipeCreator: React.FC = (): JSX.Element => {
    const { getMessage, locale } = useTranslation();

    const [recipeState, setRecipeState] = useState<RecipeStateInterface>({
        recipe: new Recipe(),
    });
    const [errorsData, setErrorsData] = useState<RecipeDataErrorsInterface>(
        INITIAL_RECIPE_ERRORS_STATE,
    );

    const files = useMemo(() => new RecipeFileService(), []);

    const onAddData = useCallback(
        ({ property, translatedProperty }: RecipeDataChangePropsInterface, value: any) => {
            setErrorsData(INITIAL_RECIPE_ERRORS_STATE);

            if (translatedProperty) {
                recipeState.recipe.addTranslatedDataProperty(translatedProperty, value, locale);
            } else if (property) {
                recipeState.recipe.addDataProperty(property, value);
            }

            setRecipeState({ recipe: recipeState.recipe });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const onDeleteData = useCallback(
        ({ property, translatedProperty }: RecipeDataChangePropsInterface) => {
            setErrorsData(INITIAL_RECIPE_ERRORS_STATE);

            if (translatedProperty) {
                recipeState.recipe.deleteTranslatedDataProperty(translatedProperty, locale);
            } else if (property) {
                recipeState.recipe.deleteDataProperty(property);
            }

            setRecipeState({ recipe: recipeState.recipe });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const fileSaveHandler = useCallback((file: File, options: FilesSaveOptionsInterface = {}) => {
        if (options.main) {
            console.log('ADDING MAIN...');
            files.addMain(file);

            onAddData({ property: RECIPE_DATA_PROPERTY_ENUM.IMAGE_URL }, URL.createObjectURL(file));
        }

        if (typeof options.step === 'number') {
            files.addToSteps({ step: options.step, file });
        }
        console.log(files);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitSavingHandler = useCallback(
        async () => {
            validationService.validateRecipeData(recipeState.recipe.data, locale, {
                saving: true,
                suggesting: false,
            });

            const _errors = validationService.errors;

            console.log('SAVING ERRORS: ', _errors);
            console.log('SAVING DATA: ', recipeState.recipe.data);

            if (_errors.errorsFound) {
                setErrorsData({ ..._errors });
                console.log('ERRORS DETECTED');
            } else {
                console.log('ALL FIELDS ARE VALID');

                // @ts-ignore
                // const imageURL = await api.media.uploadFile(files.main);
                const imageURL = 'test';
                console.log('IMAGE URL: ', imageURL);
            }
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [recipeState.recipe, locale],
    );

    console.log('RECIPE: ', recipeState.recipe);
    console.log('ERRORS: ', errorsData.errors);

    return (
        <PageContainer className={styles.root}>
            <Typography
                translate
                className={styles.title}
                value={TRANSLATION_KEYS.RECIPE_CREATOR.NEW}
                variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_5}
                style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                weight={TYPOGRAPHY_FONT_WEIGH_ENUM.SEMI_BOLD}
            />
            <RecipeNameChangeable
                error={errorsData.errors[RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME]}
                onSave={onAddData}
                onDelete={onDeleteData}
                placeholderValue={getMessage({
                    messageKey: TRANSLATION_KEYS.RECIPE_CREATOR.RECIPE_NAME,
                })}
            />

            <RecipeImage
                fileSaveHandler={fileSaveHandler}
                onDelete={onDeleteData}
                imageURL={recipeState.recipe.data.imageURL}
                error={errorsData.errors[RECIPE_DATA_PROPERTY_ENUM.IMAGE_URL]}
            />

            <div>
                <Button
                    label={TRANSLATION_KEYS.COMMON.SAVE}
                    onClick={submitSavingHandler}
                    style={BUTTON_STYLE_ENUM.LIGHT}
                />
                <br />
                <Button
                    label={TRANSLATION_KEYS.RECIPE_CREATOR.SUGGEST}
                    style={BUTTON_STYLE_ENUM.PRIMARY}
                />
            </div>
        </PageContainer>
    );
};
