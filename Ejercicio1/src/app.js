/**
 * @file app.js - Root file
 * @author Miguel Angel Chorat Delgado
 */

/**
 * Clase Jugador
 */
class Jugador{

    /**
     * Constante que almacena la puntuación maxima antes de subir de nivel
     * 
     * @type {number}
     */
    PUNTUACION_MAX = 10;

    /**
     * Constructor de la clase Jugador
     * 
     * @param {string} nombre - Nombre del jugador que recibe
     * @param {string} apellidos - Apellidos del jugador que recibe
     */
    constructor(nombre,apellidos){
        /**
         * @property {string} nombre - Nombre del jugador
         */
        this._nombre = nombre;
        /**
         * @property {string} apellidos - Apellidos del jugador
         */
        this._apellidos = apellidos;
        /**
         * @property {number} nivel - Nivel del jugador
         */
        this._nivel = 1;

        /**
         * @property {number} puntuacion - Puntuación del jugador
         */
        this._puntuacion = 1;
    }

    /**
     * Incrementa la puntuación del jugador, cada 10 puntos sube de nivel el jugador
     * 
     * @return {void}
     */
    incrementarPuntuacion(){
        this._puntuacion++;

        if(this._puntuacion==this.PUNTUACION_MAX){
            this._puntuacion = 0;
            this._nivel++;
        }
    }

    /**
     * Decrementa la puntuación del jugador, cada 10 puntos baja de nivel el jugador si alcanza 0 puntos perdera.
     * 
     * @return {void}
     */
    decrementarJugador(){
        this._puntuacion--;

        if(this._puntuacion==0 && this._nivel==0){
            this.resetearJugador();
        }

        if(this._puntuacion==0){
            this._nivel--;
            console.log(this._nivel + this._nombre)
            if(this._nivel==0){
                console.log(this._nivel + this._nombre)
                this.resetearJugador();
            }
            else {
                this._puntuacion = 10;
            }
        }
    }

    mostrarPuntos(){
        return `El jugador ${this._nombre} ${this._apellidos} tiene una puntuacion de ${this._puntuacion} y el nivel ${this._nivel}`
    }

    /**
     * Resetea el nivel y la puntuacion del jugador a 1 y avisará al jugador 
     * 
     * @return {void}
     */
    resetearJugador(){
        this._nivel = 1;
        this._puntuacion = 1;
        alert(`El jugador ${this._nombre} ${this._apellidos} ha sido reiniciado.`)
    }

}

// Constante usada para los bucles de la simulación
const INTERACCIONES_PRUEBA = 14;

// Creamos dos jugadores
let jugadores = [new Jugador("Miguel","Chorat"),new Jugador("Daniel","Mera")]

//Bucle donde incrementaremos el nivel del jugador
for(let i=0; i< INTERACCIONES_PRUEBA; i++){
    jugadores[0].incrementarPuntuacion()
}

//Mostraremos por consola la puntuacion y nombres del jugador
console.log(jugadores[0].mostrarPuntos())

//Decrementaremos la puntuacion del jugador
for(let i=INTERACCIONES_PRUEBA; i> 0; i--){
    jugadores[0].decrementarJugador()
}

//Mostraremos la puntuacion decrementada del jugador
console.log(jugadores[0].mostrarPuntos())

//Decrementamos la puntuacion del otro jugador
jugadores[1].decrementarJugador()

//Mostramos por consola la puntuación del jugador al que solo se decremento
console.log(jugadores[1].mostrarPuntos())

