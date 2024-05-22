/* console.log('Hello World')

let x = 5 // X'in değeri 5

// Merhaba TS

const y = 'Hello'
const z = (a,b,c)=> a+b */


//! Type Annotation

/* let a : number = 5

a = 'Hello'

a = false

let b : string = 'Selam'

b = 2

let c = false

c = true

c = 5

c = 'str'

console.log(c) */

//! Arrays

/* let num : number[] = [1,2,3]
let num2 : Array<string> = ['a', 'b', 'c'] // Generic Array tanımlama

num.push(4)
num.push('4')

let bosArray: string[] = [] // Boş array tanımlama */


//! Tuples

/* let myTuple : [number, boolean, string]

myTuple = [1,true,'admin']

myTuple = [3.14, false, 'circle']

myTuple.push(2) //No error


let myTuple2 : [number, string]

myTuple2 = [0 , 'user']


myTuple2.push(1)
myTuple2.push('admin')
myTuple2.push(false) //Hata alırız boolean tanımlı değil
 */
//? Tuples Arrays

/* let myTuple3: [number,string][]

myTuple3 = [[1, 'john'],[2, 'Smith']]

myTuple3.push(['jane',4]) // hata
myTuple3.push([4,'jane']) // ok
myTuple3.push(false) //hata */