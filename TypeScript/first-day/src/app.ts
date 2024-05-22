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

//! Enum

/*  enum Color {
    Red,
    Green,
    Blue
} */

/* Const koymadan js
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Blue;
console.log(selectedColor);
*/

/* let selectedColor : Color = Color.Blue

console.log(selectedColor) */


/* enum Tshirt {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
}

let userSize : Tshirt = Tshirt.Small

console.log(userSize) */


/* enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = Success + 2,
    BadRequest = NotFound - 4,
    ServerErros
}

console.log(StatusCodes.ServerErros) */


//! Any Type

/* let d : any = 4
d = 'Merhaba'
d = false

let anyArray: any [] = [1 , 'Selam']

anyArray.push(true)

let e : boolean = d */

//! Unknown

/* let notSure: unknown = 4
notSure = 'Selam'

console.log((notSure as string).length) //alias yöntemi
console.log((<string>notSure).length) // generic yöntem */


//! Void return içermeyen fonksiyonların dönüş tipi

/* let f : number = 100

function increase () : void{

    console.log(f)
     f++
}


increase() */

//! Never hiç bir zaman geri dönüşü olmayacak durumlar için

/* function endlessLoop (): never {

    while(true){
        console.log('Hello')
    }
} */



//! Union Type

let g : string | number = 100

g = 'Merhaba'

g = true //Compiler