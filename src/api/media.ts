import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { storage } from './index';

export interface MediaApiInterface {
    uploadFile(file: File): Promise<string | void>;
}

export class MediaApi implements MediaApiInterface {
    async uploadFile(file: File) {
        try {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);

            const downloadURL = await getDownloadURL(storageRef);

            return downloadURL;
        } catch (e) {
            console.error(e);
        }
    }
}
