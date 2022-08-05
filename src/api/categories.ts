import { addDoc, getDocs, collection } from 'firebase/firestore';

import { categoriesCollection, subcategoriesCollection } from './index';

import type { CategoryType, SubcategoryType } from 'typescript/types';

export interface CategoriesApiInterface {
    addCategory(data: CategoryType): Promise<string>;
    addSubcategory(data: SubcategoryType): Promise<string>;
    getCategories(): Promise<CategoryType[]>;
    getSubcategories(): Promise<SubcategoryType[]>;
}

export class CategoriesApi implements CategoriesApiInterface {
    async addCategory(data: CategoryType) {
        const docRef = await addDoc(categoriesCollection, data);

        return docRef.id;
    }

    async addSubcategory(data: SubcategoryType) {
        const docRef = await addDoc(
            collection(categoriesCollection, data.categoryId, 'subcategories'),
            data,
        );

        return docRef.id;
    }

    async getCategories() {
        const querySnapshot = await getDocs(categoriesCollection);

        const data: CategoryType[] = [];
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

        const data: SubcategoryType[] = [];
        querySnapshot.forEach((doc) => {
            const docData = doc.data();

            data.push({ ...docData, id: doc.id });
        });

        return data;
    }
}
