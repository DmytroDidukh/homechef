import React, { useCallback, useState, useMemo } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';
import { RecipeImagePlaceholder } from 'components/recipe-image-placeholder/recipe-image-placeholder.component';
import { Button } from 'components/button/button.component';

import { Recipe, RecipeServiceInterface } from 'services/recipe-service';
import { RecipeFileService } from 'services/file-service';
import { validationService } from 'services/validation-service';
import { INITIAL_RECIPE_ERRORS_STATE } from 'constants/errors';

import {
    FilesSaveOptionsInterface,
    RecipeDataInterface,
    RecipeInterface,
} from 'typescript/interfaces';
import { BUTTON_STYLE_ENUM, RECIPE_DATA_PROPERTY_ENUM } from 'typescript/enums';
import type { RecipeDataErrorsType } from 'typescript/types';

import { api } from 'api';

import styles from './recipe-creator.module.scss';

interface RecipeStateInterface {
    recipe: RecipeInterface & RecipeServiceInterface;
}

export const RecipeCreator: React.FC = (): JSX.Element => {
    const [recipeState, setRecipeState] = useState<RecipeStateInterface>({
        recipe: new Recipe(),
    });
    const [errorsData, setErrorsData] = useState<RecipeDataErrorsType>(INITIAL_RECIPE_ERRORS_STATE);

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

    return (
        <PageContainer className={styles.root}>
            <h1 className={styles.title}>ВАШ НОВИЙ РЕЦЕПТ</h1>
            <RecipeNameChangeable
                error={errorsData.errors[RECIPE_DATA_PROPERTY_ENUM.NAME_UK]}
                valueSaveHandler={dataChangeHandler}
            />
            <RecipeImagePlaceholder fileSaveHandler={fileSaveHandler} />

            <div>
                <Button
                    label="ЗБЕРЕГТИ"
                    onClick={submitSavingHandler}
                    style={BUTTON_STYLE_ENUM.LIGHT}
                />
                <br />
                <Button label="ЗАПРОПОНУВАТИ РЕЦЕПТ" style={BUTTON_STYLE_ENUM.PRIMARY} />
            </div>
        </PageContainer>
    );
};
