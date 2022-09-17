import { STORAGE_KEYS } from 'constants/app';
import { LocalStorageService } from './local-storage-service';

const items = {
    GOOGLE_TOKEN: STORAGE_KEYS.AUTH_GOOGLE,
    FACEBOOK_TOKEN: STORAGE_KEYS.AUTH_FACEBOOK,
    AUTHENTICATED_WITH: STORAGE_KEYS.AUTHENTICATED_WITH,
    LANGUAGE: STORAGE_KEYS.LANGUAGE,
};

/**
 * Local Storage
 */
export const clearLocalStorage = (): void => {
    Object.values(items).forEach((item) => LocalStorageService.remove(item));
};

export const setItemToLocalStorage = (key: string, value: string): void => {
    LocalStorageService.set(key, value);
};
export const getItemFromLocalStorage = (key: string): string => LocalStorageService.get(key);
export const removeItemFromLocalStorage = (key: string): boolean => LocalStorageService.remove(key);

/**
 * Session Storage
 */
export const setItemToSessionStorage = (key: string, value: string): void => {
    window.sessionStorage.setItem(key, value);
};
export const getItemFromSessionStorage = (key: string): string | null =>
    window.sessionStorage.getItem(key);
export const removeItemFromSessionStorage = (key: string): void =>
    window.sessionStorage.removeItem(key);
