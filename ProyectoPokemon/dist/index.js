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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
let rayo = new Move_1.Move("Rayo", 90);
let chispazo = new Move_1.Move("Chispazo", 65);
let trueno = new Move_1.Move("Trueno", 110);
let movimientosPikachu = [impactrueno, rayo, chispazo, trueno];
let placaje = new Move_1.Move("Placaje", 40);
let golpeCuerpo = new Move_1.Move("GolpeCuerpo", 85);
let cabezazo = new Move_1.Move("Cabezazo", 70);
let movimientosMeowth = [placaje, golpeCuerpo, cabezazo];
let charmander = new Pokemon_1.Pokemon("Charmander", 100, 100, 52, 43, movimientosCharmander, false, Type_1.Type.Fuego);
let squirtle = new Pokemon_1.Pokemon("Squirtle", 90, 90, 48, 65, movimientosSquirtle, false, Type_1.Type.Agua);
let bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", 100, 100, 49, 49, movimientosBulbasaur, false, Type_1.Type.Planta);
let pikachu = new Pokemon_1.Pokemon("Pikachu", 70, 70, 55, 40, movimientosPikachu, false, Type_1.Type.Eléctrico);
let meowth = new Pokemon_1.Pokemon("Meowth", 80, 80, 45, 35, movimientosMeowth, false, Type_1.Type.Normal);
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let listaPokemons = [charmander, squirtle, bulbasaur, pikachu, meowth];
let jugador = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];
let ia = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];
batallaPokemon(jugador, ia);
function batallaPokemon(jugador, ia) {
    return __awaiter(this, void 0, void 0, function* () {
        let turno = 1;
        let curacionUsada = false;
        let muerto = false;
        let accionJugador;
        while (jugador.hpActual > 0 && !muerto) {
            console.log(`\n--- Turno ${turno} ---`);
            console.log(`${jugador.nombre}(jugador): ${jugador.hpActual}/${jugador.hpMax} HP`);
            console.log(`${ia.nombre}(IA): ${ia.hpActual}/${ia.hpMax} HP`);
            yield delay(2000);
            do {
                accionJugador = readlineSync.question("Elige una opcion (1) Atacar (2) Curarse: ");
                if (accionJugador !== "1" && accionJugador !== "2") {
                    console.log("Opcion no valida. Elige (1) Atacar o (2) Curarse.");
                }
                else if (accionJugador === "2" && (turno === 1 || curacionUsada)) {
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
            }
            else if (accionJugador === "2") {
                jugador.heal();
                curacionUsada = true;
            }
            if (ia.hpActual <= 0) {
                console.log(`${ia.nombre} ha sido derrotado. ${jugador.nombre} gana.`);
                muerto = true;
            }
            else {
                yield delay(2000);
                let accionIA;
                if (turno === 1 || curacionUsada || Math.random() < 0.5) {
                    accionIA = "atacar";
                }
                else {
                    accionIA = "curarse";
                }
                if (accionIA === "atacar") {
                    let movimientoIA = ia.movimientos[Math.floor(Math.random() * ia.movimientos.length)];
                    console.log(`${ia.nombre} elige atacar con ${movimientoIA.nombreMovimiento}`);
                    ia.attack(jugador, movimientoIA);
                }
                else if (accionIA === "curarse") {
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
    });
}
