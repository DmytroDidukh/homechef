import React from 'react';

import { FOOD_DB } from 'api/food-db';

import styles from './home.module.scss';

export const Home: React.FC = (): JSX.Element => {
    return (
        <div className={styles.root}>
            {FOOD_DB.map((item) => (
                <div key={item.id} className={styles.item}>
                    <div className={styles.main}>
                        <div>
                            <i>{item.id}. </i>
                            <h2>{item.name_uk}</h2>
                            <div style={{ color: '#666' }}>
                                <b>
                                    <i>{item.food_group_uk}</i>
                                </b>
                                <br />
                                <i>{item.food_subgroup_uk}</i>
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
