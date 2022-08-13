import React from 'react';

import styles from './recipe-creator.module.scss';
import { PageContainer } from '../../components/page-container/page-container.component';
import { RecipeTitleChangeable } from '../../components/recipe-title-changeable/recipe-title-changeable.component';
import { RECIPE_CREATOR_ERROR_MESSAGE } from 'constants/errors';

export const RecipeCreator: React.FC = (): JSX.Element => {
    return (
        <PageContainer className={styles.root}>
            <h1 className={styles.title}>ВАШ НОВИЙ РЕЦЕПТ</h1>
            <RecipeTitleChangeable
                error={{ status: true, message: RECIPE_CREATOR_ERROR_MESSAGE.TITLE }}
                saveHandler={() => console.log('SAVED')}
            />
        </PageContainer>
    );
};
