"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Move_1 = require("./Move");
const Type_1 = require("./Type");
const readlineSync = __importStar(require("readline-sync"));
let lanzallamas = new Move_1.Move("Lanzallamas", 90);
let ascuas = new Move_1.Move("Ascuas", 40);
let giroFuego = new Move_1.Move("Giro Fuego", 35);
let pirotecnia = new Move_1.Move("Pirotecnia", 50);
let movimientosCharmander = [lanzallamas, ascuas, giroFuego, pirotecnia];
let hidrobomba = new Move_1.Move("Hidrobomba", 110);
let pistolaAgua = new Move_1.Move("PistolaAgua", 40);
let surf = new Move_1.Move("Surf", 90);
let burbuja = new Move_1.Move("Burbuja", 20);
let movimientosSquirtle = [hidrobomba, pistolaAgua, surf, burbuja];
let hojaAfilada = new Move_1.Move("HojaAfilada", 55);
let latigazo = new Move_1.Move("Latigazo", 45);
let rayoSolar = new Move_1.Move("RayoSolar", 120);
let drenadoras = new Move_1.Move("Drenadoras", 30);
let movimientosBulbasaur = [hojaAfilada, latigazo, rayoSolar, drenadoras];
let impactrueno = new Move_1.Move("Impactrueno", 40);
let rayo = new Move_1.Move("rayo", 90);
let chispazo = new Move_1.Move("Chispazo", 65);
let trueno = new Move_1.Move("Trueno", 110);
let movimientosPikachu = [impactrueno, rayo, chispazo, trueno];
let placaje = new Move_1.Move("Placaje", 40);
let golpeCuerpo = new Move_1.Move("GolpeCuerpo", 85);
let cabezazo = new Move_1.Move("Cabezazo", 70);
let movimientosMeowth = [placaje, golpeCuerpo, cabezazo];
let charmander = new Pokemon_1.Pokemon("Charmander", 100, // HPactual
100, // HPmax
52, // Ataque
43, // Defensa
movimientosCharmander, false, // Curacion off
Type_1.Type.Fuego);
let squirtle = new Pokemon_1.Pokemon("Squirtle", 90, // HPactual
90, // HPmax
48, // Ataque
65, // Defensa
movimientosSquirtle, false, // Curacion off
Type_1.Type.Fuego);
let bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 100, // HPActual
100, // HPmax
49, // Ataque
49, // Defensa
movimientosBulbasaur, false, // Curacion off 
Type_1.Type.Planta);
let pikachu = new Pokemon_1.Pokemon("Pikachu", 70, // HPActual
70, // HPmax
55, // Ataque
40, // Defensa
movimientosPikachu, false, // Curacion off 
Type_1.Type.Eléctrico);
let meowth = new Pokemon_1.Pokemon("Meowth", 80, // HPActual
80, // HPmax
45, // Ataque
35, // Defensa
movimientosMeowth, false, // Curacion off 
Type_1.Type.Normal);
let listaPokemons = [];
listaPokemons.push(charmander, squirtle, bulbasaur, pikachu, meowth);
let eleccionPokemon = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];
batallaPokemon(eleccionPokemon, eleccionPokemon);
function batallaPokemon(jugador, ia) {
    let turno = 1;
    while (jugador.hpActual > 0 && ia.hpActual > 0) {
        console.log(`\n--- Turno ${turno} ---`);
        console.log(`${jugador.nombre}: ${jugador.hpActual}/${jugador.hpMax} HP`);
        console.log(`${ia.nombre}: ${ia.hpActual}/${ia.hpMax} HP`);
        let accionJugador = readlineSync.question("Que accion desea realizar? (1) Atacar (2) Curarse: ");
        if (accionJugador === "1") {
            console.log("Movimientos disponibles:");
            jugador.movimientos.forEach((move, i) => console.log(`${i + 1}: ${move.nombreMovimiento}`));
            let listaMovimiento = readlineSync.questionInt("Elige un movimiento: ") - 1;
            let movimientoElegido = jugador.movimientos[listaMovimiento];
            jugador.attack(ia, movimientoElegido);
        }
        else if (accionJugador === "2") {
            jugador.heal();
        }
        if (ia.hpActual === 0) {
            console.log(`${ia.nombre} muere. ${jugador.nombre} gana`);
        }
        let accionesIA = ["atacar", "curarse"];
        let accionIA = accionesIA[Math.floor(Math.random() * accionesIA.length)];
        if (accionIA === "atacar") {
            let movimientoIA = ia.movimientos[Math.floor(Math.random() * ia.movimientos.length)];
            console.log(`${ia.nombre} elige atacar con ${movimientoIA.nombreMovimiento}`);
            ia.attack(jugador, movimientoIA);
        }
        else if (accionIA === "curarse") {
            ia.heal();
            console.log(`${ia.nombre} se cura.`);
        }
        if (jugador.hpActual === 0) {
            console.log(`${jugador.nombre} muere. ${ia.nombre} gana`);
        }
        turno++;
    }
}
