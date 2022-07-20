import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Firestore } from '@firebase/firestore';
import { IngredientGroupType, IngredientType } from 'typescript/types/ingredients';

export interface IngredientsApiInterface {
    add(data: IngredientType): Promise<string>;
    getGroups(): Promise<IngredientGroupType[]>;
    getIngredients(): Promise<IngredientType[]>;
}

export class IngredientsApi implements IngredientsApiInterface {
    private db: Firestore;
    private ingredientsCollection: string = 'ingredients';
    private ingredientsGroupsCollection: string = 'ingredients_groups';

    constructor(db: Firestore) {
        this.db = db;
    }

    async add(data: IngredientType) {
        const docRef = await addDoc(collection(this.db, this.ingredientsCollection), data);

        return docRef.id;
    }

    async getGroups() {
        const querySnapshot = await getDocs(collection(this.db, this.ingredientsGroupsCollection));

        const data: IngredientGroupType[] = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();

            data.push({ id: doc.id, name: docData.name, name_uk: docData.name_uk });
        });

        return data;
    }

    async getIngredients() {
        const querySnapshot = await getDocs(collection(this.db, this.ingredientsCollection));

        const data: IngredientType[] = [];
        querySnapshot.forEach((doc) => {
            // @ts-ignore
            const docData: IngredientType = doc.data();

            data.push({ ...docData, id: doc.id });
        });

        return data;
    }
}
