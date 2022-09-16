import { StepFileInterface } from 'typescript/interfaces';
import { TYPOGRAPHY_STYLE_ENUM, TYPOGRAPHY_VARIANT_ENUM } from '../typescript/enums';

interface TypographyServiceInterface {
    toUpperCaseFirst(value: string): string;
    toLowerCaseFirst(value: string): string;
    toUpperCaseAll(value: string): string;
    toLowerCaseAll(value: string): string;
    getElement(variant: TYPOGRAPHY_VARIANT_ENUM): string;
    style(variant: TYPOGRAPHY_VARIANT_ENUM, style: TYPOGRAPHY_STYLE_ENUM, value: string): string;
}

class TypographyService implements TypographyServiceInterface {
    main?: File = undefined;
    steps: StepFileInterface[] = [];

    toUpperCaseFirst(value: string) {
        if (!this.validate(value)) return value;

        const _value = this.toLowerCaseAll(value);

        return `${_value[0].toUpperCase()}${_value.slice(1)}`;
    }

    toLowerCaseFirst(value: string) {
        if (!this.validate(value)) return value;

        return `${value[0].toLowerCase()}${value.slice(1)}`;
    }

    toUpperCaseAll(value: string) {
        if (!this.validate(value)) return value;

        return value.toUpperCase();
    }

    toLowerCaseAll(value: string) {
        if (!this.validate(value)) return value;

        return value.toLowerCase();
    }

    getElement(variant: TYPOGRAPHY_VARIANT_ENUM) {
        switch (variant) {
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_1:
                return 'h1';
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_2:
                return 'h2';
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_3:
                return 'h3';
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_4:
                return 'h4';
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_5:
                return 'h5';
            case TYPOGRAPHY_VARIANT_ENUM.HEADING_6:
                return 'h6';
            case TYPOGRAPHY_VARIANT_ENUM.PARAGRAPH_1:
                return 'p';
            case TYPOGRAPHY_VARIANT_ENUM.PARAGRAPH_2:
                return 'p';
            default:
                return 'span';
        }
    }

    style(variant: TYPOGRAPHY_VARIANT_ENUM, style: TYPOGRAPHY_STYLE_ENUM, value: string) {
        switch (style) {
            case TYPOGRAPHY_STYLE_ENUM.LOWER_CASE_ALL:
                return this.toLowerCaseAll(value);
            case TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL:
                return this.toUpperCaseAll(value);
            case TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_FIRST:
                return this.toUpperCaseFirst(value);
            case TYPOGRAPHY_STYLE_ENUM.LOWER_CASE_FIRST:
                return this.toLowerCaseFirst(value);
            default:
                return value;
        }
    }

    private validate(value: any): boolean {
        return typeof value === 'string' && !!value.length;
    }
}

export const typographyService = new TypographyService();
