export const measureText = (text: string, fontSize: number) => {
    let block = document.createElement('div');

    document.body.appendChild(block);

    block.style.fontSize = `${fontSize}px`;
    block.style.position = 'absolute';
    block.style.left = '-1000px';
    block.style.top = '-1000px';

    block.textContent = text;

    const result = {
        width: block.clientWidth,
        height: block.clientHeight,
    };

    document.body.removeChild(block);

    return result;
};

export const generateId = (): string => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let autoId = '';

    for (let i = 0; i < 20; i++) {
        autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return autoId;
};

export const isNotEmptyString = (value?: string) => typeof value === 'string' && value.length;
export const testStringByRegExp = (value: string, regExp: RegExp, flags?: string) =>
    isNotEmptyString(value) && new RegExp(regExp, flags || '').test(value || '');
