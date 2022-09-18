import { CategoryInterface, SubcategoryInterface } from 'typescript/interfaces';

export const categoriesFactory = (
    categories: CategoryInterface[],
    subcategories: SubcategoryInterface[],
): CategoryInterface[] => {
    if (!categories.length || !subcategories.length) {
        return [];
    }

    const data: CategoryInterface[] = [];
    categories.forEach((category) => {
        const _subcategories = subcategories.filter(
            (subcategory) => subcategory.categoryId === category.id,
        );

        data.push({
            ...category,
            subcategories: _subcategories,
        });
    });

    return data.sort((a, b) => a.priority - b.priority);
};
