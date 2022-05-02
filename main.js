// 1
let saludar = () => 'Hola';
// 2
let div = (a, b) => a/b;
// 3
let name = (nombre) => `Me llamo ${nombre}`;
// 4
let test2 = () => console.log ('Función test2 ejecutada.');
let test1 = (callback) => callback();
// ForEach
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];
// Gente > 25
let mas25 = [];
gente.forEach((persona) => {
    if (persona.edad > 25){
        mas25.push(persona)
    }
});
console.log(mas25);
//Array empiezan por J
let jota = [];
gente.forEach ((persona) => {
    if (persona.nombre[0] == 'J'){
        jota.push(persona)
    }
});
console.log(jota);
//Map
//Elevar numero al mismo
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
let potencia = numbers.map((a) => {
    return a ** a
});
console.log(potencia);
//Generar el resultado esperado
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let texto = []
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/


foodList.map((comida, i) => {
    if (i == [0]){
        texto.push(`Como soy de Italia, amo comer ${comida}`)
    };

    if (i == [1]){
        texto.push(`Como soy de Japón, amo comer ${comida}`)
    };

    if (i == [2]){
        texto.push(`Como soy de Valencia, amo comer ${comida}`)
    };

    if (i == [3]){
        texto.push(`Aunque no como carne, el ${comida} es sabroso`)
    }
})
console.log(texto)
//Filter
//Devolver los impares
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = numeros2.filter( num => num % 2 != 0)
console.log(impares);
//Filtrar platos veganos y sacar sentencia
const comidita = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];
  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */

let frase = []
comidita.filter(comida => {
    if (comida.isVeggie == true){
        frase.push(`Qué ric@ ${comida.name} me voy a comer.`)
    }
})
console.log(frase);
//multiplicacion Reduce
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
let mult = numeros.reduce((a,b) => a * b)
console.log(mult);