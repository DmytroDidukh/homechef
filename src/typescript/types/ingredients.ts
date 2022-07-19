export type IngredientType = {
    id: string;
    name: string;
    name_uk: string;
    name_scientific: string | null;
    description: string | null;
    description_uk: string | null;
    wikipedia_id: string | null;
    food_group: string;
    food_group_uk: string;
    food_subgroup: string;
    food_subgroup_uk: string;
    image_url: string | null;
};
