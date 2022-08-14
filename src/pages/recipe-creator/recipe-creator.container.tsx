import React, { useCallback, useState } from 'react';

import { PageContainer } from 'components/page-container/page-container.component';
import { RecipeTitleChangeable } from 'components/recipe-title-changeable/recipe-title-changeable.component';

import { Recipe, RecipeServiceInterface } from 'services/recipe-service';

import { RecipeDataInterface, RecipeInterface } from 'typescript/interfaces';

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

    console.log('RECIPE: ', recipeState.recipe);

    return (
        <PageContainer className={styles.root}>
            <h1 className={styles.title}>ВАШ НОВИЙ РЕЦЕПТ</h1>
            <RecipeTitleChangeable error={{ status: false }} savingHandler={dataChangeHandler} />
            <div>{JSON.stringify(recipeState.recipe.data)}</div>
        </PageContainer>
    );
};
