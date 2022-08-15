import { StepFileInterface } from 'typescript/interfaces';

interface RecipeFileServiceInterface {
    addMain(file: File): void;
    deleteMain(): void;
    addToSteps(data: StepFileInterface): void;
    deleteFromSteps(step: number): void;
}

export class RecipeFileService implements RecipeFileServiceInterface {
    main?: File = undefined;
    steps: StepFileInterface[] = [];

    addMain(file: File) {
        this.main = file;
    }

    deleteMain() {
        this.main = undefined;
    }

    addToSteps(data: StepFileInterface) {
        this.steps.push(data);
    }

    deleteFromSteps(step: number) {
        this.steps.filter((data) => data.step !== step);
    }
}
