const dependency = require('./export');
const notUsed = require('./static');

console.log(this);
dependency.logger();
console.log(dependency.sideEffectValue, dependency.sideEffectObject.v);
dependency.changeSideEffect();
dependency.logger();
console.log(dependency.sideEffectValue, dependency.sideEffectObject.v);
