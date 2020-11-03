import { logger, changeSideEffect, sideEffectValue, sideEffectObject } from './export';
import { staticExport } from './static';

console.log(this);
logger();
console.log(sideEffectValue, sideEffectObject.v);
changeSideEffect();
logger();
console.log(sideEffectValue, sideEffectObject.v);
