export const filterFalsy = (data: any[]): any[] => {
    if (Array.isArray(data)) {
        return data.filter(Boolean);
    }

    return data;
};
