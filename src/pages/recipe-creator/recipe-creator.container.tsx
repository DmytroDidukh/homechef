import React, { useCallback, useState } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';
import { Button } from 'components/button/button.component';

import { Recipe, RecipeServiceInterface } from 'services/recipe-service';
import { validationService } from 'services/validation-service';

import { RecipeDataInterface, RecipeInterface } from 'typescript/interfaces';
import { BUTTON_STYLE_ENUM, RECIPE_PROPERTY_ENUM } from 'typescript/enums';
import type { RecipeDataErrorsType } from 'typescript/types';

import styles from './recipe-creator.module.scss';

interface RecipeStateInterface {
    recipe: RecipeInterface & RecipeServiceInterface;
}

export const RecipeCreator: React.FC = (): JSX.Element => {
    const [recipeState, setRecipeState] = useState<RecipeStateInterface>({
        recipe: new Recipe(),
    });
    const [errors, setErrors] = useState<RecipeDataErrorsType>({});

    const dataChangeHandler = useCallback((property: keyof RecipeDataInterface, value: any) => {
        setErrors({});

        if (value) {
            recipeState.recipe.addDataProperty(property, value);

            setRecipeState({ recipe: recipeState.recipe });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitSavingHandler = (): void => {
        const _errors = validationService.validateRecipeData(recipeState.recipe.data, [
            RECIPE_PROPERTY_ENUM.NAME_UK,
        ]);

        if (Object.keys(_errors).length) {
            setErrors(_errors);
        } else {
            console.log('ALL FIELDS ARE VALID');
        }
    };

    console.log('RECIPE: ', recipeState.recipe);

    return (
        <PageContainer className={styles.root}>
            <h1 className={styles.title}>ВАШ НОВИЙ РЕЦЕПТ</h1>
            <RecipeNameChangeable
                error={errors[RECIPE_PROPERTY_ENUM.NAME_UK]}
                valueSaveHandler={dataChangeHandler}
            />
            <div>{JSON.stringify(recipeState.recipe.data)}</div>
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
