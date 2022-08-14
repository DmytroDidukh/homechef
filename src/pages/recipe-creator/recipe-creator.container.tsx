import React, { useCallback, useState } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeNameChangeable } from 'components/recipe-name-changeable/recipe-name-changeable.component';
import { Button } from 'components/button/button.component';

import { Recipe, RecipeServiceInterface } from 'services/recipe-service';

import { RecipeDataInterface, RecipeInterface } from 'typescript/interfaces';
import { BUTTON_STYLE_ENUM } from 'typescript/enums';

import styles from './recipe-creator.module.scss';

interface RecipeStateInterface {
    recipe: RecipeInterface & RecipeServiceInterface;
}

export const RecipeCreator: React.FC = (): JSX.Element => {
    const [recipeState, setRecipeState] = useState<RecipeStateInterface>({
        recipe: new Recipe(),
    });

    const dataChangeHandler = useCallback((property: keyof RecipeDataInterface, value: any) => {
        if (value) {
            recipeState.recipe.addDataProperty(property, value);

            setRecipeState({ recipe: recipeState.recipe });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitSavingHandler = (): void => {};

    console.log('RECIPE: ', recipeState.recipe);

    return (
        <PageContainer className={styles.root}>
            <h1 className={styles.title}>ВАШ НОВИЙ РЕЦЕПТ</h1>
            <RecipeNameChangeable error={{ status: false }} valueSaveHandler={dataChangeHandler} />
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
