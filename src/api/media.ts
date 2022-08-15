import { ref, StorageReference, uploadBytes } from 'firebase/storage';

import { storage } from './index';

export interface MediaApiInterface {
    uploadFile(file: File): Promise<string>;
}

export class MediaApi implements MediaApiInterface {
    private storageRef: StorageReference = ref(storage, 'images');

    async uploadFile(file: File) {
        const snapshot = await uploadBytes(this.storageRef, file);

        console.log('SNAPSHOT: ', snapshot);

        return 'ggg';
    }
}
