import { addDoc, getDocs, collection } from 'firebase/firestore';

import { categoriesCollection, subcategoriesCollection } from './index';

import { CategoryInterface, SubcategoryInterface } from 'typescript/interfaces';

export interface CategoriesApiInterface {
    addCategory(data: CategoryInterface): Promise<string>;
    addSubcategory(data: SubcategoryInterface): Promise<string>;
    getCategories(): Promise<CategoryInterface[]>;
    getSubcategories(): Promise<SubcategoryInterface[]>;
}

export class CategoriesApi implements CategoriesApiInterface {
    async addCategory(data: CategoryInterface) {
        const docRef = await addDoc(categoriesCollection, data);

        return docRef.id;
    }

    async addSubcategory(data: SubcategoryInterface) {
        const docRef = await addDoc(
            collection(categoriesCollection, data.categoryId, 'subcategories'),
            data,
        );

        return docRef.id;
    }

    async getCategories() {
        const querySnapshot = await getDocs(categoriesCollection);

        const data: CategoryInterface[] = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();

            data.push({
                ...docData,
                id: doc.id,
            });
        });

        return data;
    }

    async getSubcategories() {
        const querySnapshot = await getDocs(subcategoriesCollection);

        const data: SubcategoryInterface[] = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();

            data.push({ ...docData, id: doc.id });
        });

        return data;
    }
}
