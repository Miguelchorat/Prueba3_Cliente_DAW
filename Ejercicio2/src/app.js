/**
 * Constante que tendra el minimo de años aceptado
 * @type {number}
 */
const NUM_MIN = 2001

/**
 * Constante que tendra el máximo de años aceptado
 * @type {number}
 */
const NUM_MAX = 2500

/**
     * @property {function} isLeapYear - Función que calculara de dos numeros entre 2001 y 2500 sus años bisiestos
     * 
     * @param {number} num1 - Primer número introducido
     * @param {number} num2 - Segundo número introducido
     * 
     * @return {Array<number> | null} - Devuelve el array de años bisiestos si los números son adecuados. De no serlo devolvera null
     */
function isLeapYear(num1,num2){
    //Array que almacenara los años bisiestos
    let anyosBisiestos = []

    //Comprueba que los dos parametros son números
    if(typeof num1 == "number" && typeof num2 == "number"){

        //Si el número tiene decimales los convierte en entero
        num1 = num1.toFixed(0);
        num2 = num2.toFixed(0);

        //Comprueba que el primer número no sea mayor que el segundo
        if(num1>=num2){
            console.log("El primer número no puede ser mayor o igual que el segundo número")
        }
        //Comprueba que el primer numero sea menor al número minimo y que el mayor sea mas grande que el número maximo
        else if(num1<NUM_MIN || num2>NUM_MAX){
            console.log("Uno de los numeros introducidos sobrepasa el mínimo de " + NUM_MIN + " o el máximo de " + NUM_MAX)
        }
        else {
            //Itera en un bucle entre los dos numeros dados por parametros y comprueba entre ellos los numeros bisiestos 
            //guardandola en la variables de años bisiestos
            for(let i=num1 ;i<=num2; i++){
                if(i%4==0 || (i%100==0 && i%400==0)){
                    //Guarda el año válido en la array de años
                    anyosBisiestos.push(i);
                }
            }
            //Devuelve los años bisiestos
            return anyosBisiestos;
        }
    }
    else {
        console.log("Has introducido valores incorrectos.")
    }
    //Devuelve nulo al no haber cumplido los requisitos los parametros
    return null;
}

//Array que recibira del metodo isLeapYear sus años bisiestos entre los dos números dado por parametros
let anyos = isLeapYear(2200,2405)

//Comprobara que los años no sea nulo y luego procedera a mostrar por consola los numeros bisiestos entre los números dados.
if(anyos!=null){
    for(let a of anyos){
        console.log(a)
    }
}

//Array que recibira del metodo isLeapYear sus años bisiestos entre los dos números dado por parametros donde el primero fallara
anyos = isLeapYear(1900,2405)

//Comprobara que los años no sea nulo y luego procedera a mostrar por consola los numeros bisiestos entre los números dados.
if(anyos!=null){
    for(let a of anyos){
        console.log(a)
    }
}

//Array que recibira del metodo isLeapYear sus años bisiestos entre los dos números dado por parametros donde el segundo fallara
anyos = isLeapYear(2001,2505)

//Comprobara que los años no sea nulo y luego procedera a mostrar por consola los numeros bisiestos entre los números dados.
if(anyos!=null){
    for(let a of anyos){
        console.log(a)
    }
}

//Array que recibira del metodo isLeapYear sus años bisiestos entre los dos números dado por parametros donde el primero fallara por ser mayor
//al segundo
anyos = isLeapYear(2500,2001)

//Comprobara que los años no sea nulo y luego procedera a mostrar por consola los numeros bisiestos entre los números dados.
if(anyos!=null){
    for(let a of anyos){
        console.log(a)
    }
}