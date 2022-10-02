export const deepCloneObject = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));
