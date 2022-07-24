import React, { useEffect } from 'react';

import { useActions, useAppSelector } from 'store/hooks';
import { selectIngredients, selectIngredientsGroups } from 'store/slices/ingredients';

import styles from './home.module.scss';

export const Home: React.FC = (): JSX.Element | null => {
    const { getIngredients, getIngredientsGroups } = useActions();
    const ingredientsGroups = useAppSelector(selectIngredientsGroups);
    const ingredients = useAppSelector(selectIngredients);

    useEffect(() => {
        console.log('ggg ', getIngredients, getIngredientsGroups);
        // getIngredientsGroups();
        // getIngredients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!ingredients || !ingredientsGroups) return null;

    return (
        <div className={styles.root}>
            {Object.values(ingredients).map((item) => (
                <div key={item.id} className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <i>{item.id}. </i>
                            <h2>{item.name_uk}</h2>
                            <div style={{ color: '#666' }}>
                                <b>
                                    <i>
                                        {
                                            Object.values(ingredientsGroups).find(
                                                (gr) => gr.id === item.group_id,
                                            )?.name_uk
                                        }
                                    </i>
                                </b>
                                <br />
                            </div>
                        </div>
                        <div
                            className={styles.image}
                            style={
                                item.image_url
                                    ? { backgroundImage: `url(${item.image_url})` }
                                    : { backgroundColor: '#ccc' }
                            }
                        />
                    </div>
                    <p>{item.description_uk}</p>
                </div>
            ))}
        </div>
    );
};
