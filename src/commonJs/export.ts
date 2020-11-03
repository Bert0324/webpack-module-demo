let sideEffectValue = 1;
const sideEffectObject = {
    v: 1
};
module.exports = {
    logger: () => console.log(sideEffectValue, sideEffectObject.v),
    changeSideEffect: () => {
        sideEffectValue += 1;
        sideEffectObject.v += 1;
    },
    sideEffectValue,
    sideEffectObject
}