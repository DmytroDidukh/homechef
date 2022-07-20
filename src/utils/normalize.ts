export const normalize = (data: any[], key: string = 'id') => {
    return {
        entries: data.reduce((accum, entry) => {
            accum[entry[key]] = entry;
            return accum;
        }, {}),
        ids: data.map((entry) => entry[key]),
    };
};
