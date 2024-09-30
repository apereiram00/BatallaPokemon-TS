// Date: 24-09-2024
// Name: Álvaro Pereira

import { Pokemon } from './Pokemon';
import { Move } from './Move';
import { Type } from './Type';
import * as readlineSync from 'readline-sync';

let lanzallamas = new Move("Lanzallamas", 90);
let ascuas = new Move("Ascuas", 40);
let giroFuego = new Move("Giro Fuego", 35);
let pirotecnia = new Move("Pirotecnia", 50);

let movimientosCharmander = [lanzallamas, ascuas, giroFuego, pirotecnia];

let hidrobomba = new Move("Hidrobomba", 110);
let pistolaAgua = new Move("PistolaAgua", 40);
let surf = new Move("Surf", 90);
let burbuja = new Move("Burbuja", 20);

let movimientosSquirtle = [hidrobomba, pistolaAgua, surf, burbuja];

let hojaAfilada = new Move("HojaAfilada", 55);
let latigazo = new Move("Latigazo", 45);
let rayoSolar = new Move("RayoSolar", 120);
let drenadoras = new Move("Drenadoras", 30);

let movimientosBulbasaur = [hojaAfilada, latigazo, rayoSolar, drenadoras];

let impactrueno = new Move("Impactrueno", 40);
let rayo = new Move("Rayo", 90);
let chispazo = new Move("Chispazo", 65);
let trueno = new Move("Trueno", 110);

let movimientosPikachu = [impactrueno, rayo, chispazo, trueno];

let placaje = new Move("Placaje", 40);
let golpeCuerpo = new Move("GolpeCuerpo", 85);
let cabezazo = new Move("Cabezazo", 70);

let movimientosMeowth = [placaje, golpeCuerpo, cabezazo];

let charmander = new Pokemon(
    "Charmander",
    100, 100, 52, 43, movimientosCharmander, false, Type.Fuego
);

let squirtle = new Pokemon(
    "Squirtle",
    90, 90, 48, 65, movimientosSquirtle, false, Type.Agua
);

let bulbasaur = new Pokemon(
    "Bulbasaur",
    100, 100, 49, 49, movimientosBulbasaur, false, Type.Planta
);

let pikachu = new Pokemon(
    "Pikachu",
    70, 70, 55, 40, movimientosPikachu, false, Type.Eléctrico
);

let meowth = new Pokemon(
    "Meowth",
    80, 80, 45, 35, movimientosMeowth, false, Type.Normal
);

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let listaPokemons: Pokemon[] = [charmander, squirtle, bulbasaur, pikachu, meowth];
let jugador = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];
let ia = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];

batallaPokemon(jugador, ia);

async function batallaPokemon(jugador: Pokemon, ia: Pokemon): Promise<void> {
    let turno = 1;
    let curacionUsada = false;  
    let muerto = false;  
    let accionJugador: string;

    while (jugador.hpActual > 0 && !muerto) {  
        console.log(`\n--- Turno ${turno} ---`);
        console.log(`${jugador.nombre}(jugador): ${jugador.hpActual}/${jugador.hpMax} HP`);
        console.log(`${ia.nombre}(IA): ${ia.hpActual}/${ia.hpMax} HP`);

        await delay(2000);

        do {
            accionJugador = readlineSync.question("Elige una opcion (1) Atacar (2) Curarse: ");
            if (accionJugador !== "1" && accionJugador !== "2") {
                console.log("Opcion no valida. Elige (1) Atacar o (2) Curarse.");
            } else if (accionJugador === "2" && (turno === 1 || curacionUsada)) {
                console.log("No puedes curarte en el primer turno o ya te has curado.");
                accionJugador = "";
            }
        } while (accionJugador !== "1" && accionJugador !== "2");

        if (accionJugador === "1") {
            console.log("Lista de movimientos:");
            jugador.movimientos.forEach((move, i) => console.log(`${i + 1}: ${move.nombreMovimiento}`));
            let listaMovimiento = readlineSync.questionInt("Elige un movimiento: ") - 1;
            let movimientoElegido = jugador.movimientos[listaMovimiento];
            jugador.attack(ia, movimientoElegido);
        } else if (accionJugador === "2") {
            jugador.heal();
            curacionUsada = true;
        }

        if (ia.hpActual <= 0) {
            console.log(`${ia.nombre} ha sido derrotado. ${jugador.nombre} gana.`);
            muerto = true; 
        } else {
            await delay(2000); 

            let accionIA: string;
            if (turno === 1 || curacionUsada || Math.random() < 0.5) {
                accionIA = "atacar";
            } else {
                accionIA = "curarse";
            }

            if (accionIA === "atacar") {
                let movimientoIA = ia.movimientos[Math.floor(Math.random() * ia.movimientos.length)];
                console.log(`${ia.nombre} elige atacar con ${movimientoIA.nombreMovimiento}`);
                ia.attack(jugador, movimientoIA);
            } else if (accionIA === "curarse") {
                ia.heal();
                curacionUsada = true;
            }

            if (jugador.hpActual <= 0) {
                console.log(`${jugador.nombre} ha sido derrotado. ${ia.nombre} gana.`);
                muerto = true;
            }
        }
        turno++;
    }
}




