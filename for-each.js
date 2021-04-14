// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const arrayOfNames = [];
    arr.forEach((item) => {
        arrayOfNames.push(item.name)
    })

    return arrayOfNames;
}


/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {

    const arrayOfTypes = [];
    arr.forEach((item) => {
    arrayOfTypes.push(item.type)
    arrayOfTypes.reverse()  

    })
    return arrayOfTypes;
}

/*
Output:

[
    {   nombre: 'spot', 
        tipo: 'dog' 
    },
    { nombre: 'rover', 
      tipo: 'dog' 
    },
    { nombre: 'jumpy', 
      tipo: 'frog' },
    { nombre: 'einstein', 
      tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {

    const spanishArray = [];
    arr.forEach((object) => {
        spanishArray.push({
        nombre: object.name, 
        tipo: object.type
    })
    })
    return spanishArray;

};










  


