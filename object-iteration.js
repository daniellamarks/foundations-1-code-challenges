// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
  const keys = Object.keys(someObject)
  const values = Object.values(someObject);
    const upper = keys.map((key) => {
       return key.toUpperCase()
    })
    //now we have an array of uppercase keys [NAME, AGE, TYPE]
    const withValues = upper.map((key) => {
        return {
            upper: key.name
        }
    });
    //i need to loop through each name and add a value

    return withValues


};


/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

    const expected = {
        NAME: 'scooter',
        AGE: 1,
        TYPE: 'puppy'
    };

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    
  const weird = Object.keys(someObject)
        return weird.join('')
        
    };
    

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const asArray = Object.entries(someObject)
    return asArray;
}
