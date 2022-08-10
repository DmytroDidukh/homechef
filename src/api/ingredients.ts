import { collection, addDoc, getDocs } from 'firebase/firestore';

import { db } from './index';

import { IngredientGroupInterface, IngredientInterface } from 'typescript/interfaces';

export interface IngredientsApiInterface {
    add(data: IngredientInterface): Promise<string>;
    getGroups(): Promise<IngredientGroupInterface[]>;
    getIngredients(): Promise<IngredientInterface[]>;
}

export class IngredientsApi implements IngredientsApiInterface {
    private ingredientsCollection: string = 'ingredients';
    private ingredientsGroupsCollection: string = 'ingredients_groups';

    async add(data: IngredientInterface) {
        const docRef = await addDoc(collection(db, this.ingredientsCollection), data);

        return docRef.id;
    }

    async getGroups() {
        const querySnapshot = await getDocs(collection(db, this.ingredientsGroupsCollection));

        const data: IngredientGroupInterface[] = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();

            data.push({ id: doc.id, name: docData.name, name_uk: docData.name_uk });
        });

        return data;
    }

    async getIngredients() {
        const querySnapshot = await getDocs(collection(db, this.ingredientsCollection));

        const data: IngredientInterface[] = [];
        querySnapshot.forEach((doc) => {
            // @ts-ignore
            const docData: IngredientInterface = doc.data();

            data.push({ ...docData, id: doc.id });
        });

        return data;
    }
}
