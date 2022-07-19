import React from 'react';

import { FOOD_DB } from 'api/food-db';
import { useActions } from 'store/hooks';

import styles from './home.module.scss';

export const Home: React.FC = (): JSX.Element => {
    const { addIngredient } = useActions();

    const addOne = () => {
        const aa = FOOD_DB.reduce((acc, x) => {
            acc[x.food_group] = { name: x.food_group, name_uk: x.food_group_uk };
            return acc;
        }, {});

        console.log(Object.values(aa));
        // addIngredient(FOOD_DB[0]);
    };

    return (
        <div className={styles.root}>
            <button onClick={addOne}>add</button>
            {/* {FOOD_DB.map((item) => ( */}
            {/*     <div key={item.id} className={styles.item}> */}
            {/*         <div className={styles.main}> */}
            {/*             <div> */}
            {/*                 <i>{item.id}. </i> */}
            {/*                 <h2>{item.name_uk}</h2> */}
            {/*                 <div style={{ color: '#666' }}> */}
            {/*                     <b> */}
            {/*                         <i>{item.food_group_uk}</i> */}
            {/*                     </b> */}
            {/*                     <br /> */}
            {/*                     <i>{item.food_subgroup_uk}</i> */}
            {/*                 </div> */}
            {/*             </div> */}
            {/*             <div */}
            {/*                 className={styles.image} */}
            {/*                 style={ */}
            {/*                     item.image_url */}
            {/*                         ? { backgroundImage: `url(${item.image_url})` } */}
            {/*                         : { backgroundColor: '#ccc' } */}
            {/*                 } */}
            {/*             /> */}
            {/*         </div> */}
            {/*         <p>{item.description_uk}</p> */}
            {/*     </div> */}
            {/* ))} */}
        </div>
    );
};
