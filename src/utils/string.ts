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
