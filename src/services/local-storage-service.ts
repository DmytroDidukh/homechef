export const LocalStorageService = {
    set(key: string, value: string) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e: any) {
            console.error(e.message);
            return false;
        }
    },
    get(key: string) {
        if (!key) {
            return null;
        }
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;

            return JSON.parse(item);
        } catch (e: any) {
            console.error(e.message);
            return null;
        }
    },
    has(key: string) {
        return this.get(key) !== null;
    },
    remove(key: string) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e: any) {
            console.error(e.message);
            return false;
        }
    },
};
