
import { features } from "process";

function storeCarinfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any }[] ):object {


const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
}
return carInfo;
};

let answare =storeCarinfo('Toyota','Revo',{color:'Black'}, {features: ['Navigation','Power Window']})

console.log(answare);