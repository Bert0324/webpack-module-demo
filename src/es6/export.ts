let sideEffectValue = 1;
const sideEffectObject = {
    v: 1
};
export const logger = () => console.log(sideEffectValue, sideEffectObject.v);
export const changeSideEffect = () => {
    sideEffectValue += 1;
    sideEffectObject.v += 1;
};
export { sideEffectValue, sideEffectObject };


export const aaaaa = '1111';

