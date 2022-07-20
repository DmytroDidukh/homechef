export type IngredientType = {
    id: string;
    name: string;
    name_uk: string;
    name_scientific: string | null;
    description: string | null;
    description_uk: string | null;
    wikipedia_id: string | null;
    group_id: string;
    image_url: string | null;
};

export type IngredientGroupType = {
    id: string;
    name: string;
    name_uk: string;
};

export type IngredientsType = {
    [ket: string]: IngredientType;
};

export type IngredientsGroupsType = {
    [ket: string]: IngredientGroupType;
};
