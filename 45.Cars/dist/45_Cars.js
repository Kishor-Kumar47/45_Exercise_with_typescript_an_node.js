"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarinfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answare = storeCarinfo('Toyota', 'Revo', { color: 'Black' }, { features: ['Navigation', 'Power Window'] });
console.log(answare);
