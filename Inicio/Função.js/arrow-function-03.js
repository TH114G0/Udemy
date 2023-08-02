let CompareComThis = function(param) {
    console.log(this === param);
}
CompareComThis(global);
///////////////////////////////////////
const obj = {}
CompareComThis = CompareComThis.bind(obj);
CompareComThis(global)
CompareComThis(obj)
///////////////////////////////////////
let CompareComThisArrow = param => console.log(this === param);
CompareComThisArrow(global)
CompareComThisArrow(module.exports)
