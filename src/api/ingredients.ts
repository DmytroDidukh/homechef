import { collection, addDoc } from 'firebase/firestore';
import { Firestore } from '@firebase/firestore';
import { IngredientType } from '../typescript/types/ingredients';

export interface IngredientsApiInterface {
    add(data: IngredientType): Promise<string>;
}

export class IngredientsApi implements IngredientsApiInterface {
    private db: Firestore;
    private collection: string = 'ingredients';

    constructor(db: Firestore) {
        this.db = db;
    }

    async add(data: IngredientType) {
        const docRef = await addDoc(collection(this.db, this.collection), data);

        return docRef.id;
    }
}
