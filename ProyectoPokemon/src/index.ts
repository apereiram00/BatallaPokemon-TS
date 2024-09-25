import { Pokemon } from './Pokemon';
import { Move } from './Move';
import { Type } from './Type';
import * as readlineSync from 'readline-sync';

let lanzallamas = new Move("Lanzallamas", 90);
let ascuas = new Move("Ascuas", 40);
let giroFuego = new Move("Giro Fuego", 35);
let pirotecnia = new Move("Pirotecnia", 50);

let movimientosCharmander = [lanzallamas, ascuas, giroFuego, pirotecnia]

let hidrobomba = new Move("Hidrobomba", 110);
let pistolaAgua = new Move("PistolaAgua", 40);
let surf = new Move("Surf", 90);
let burbuja = new Move("Burbuja", 20);

let movimientosSquirtle = [hidrobomba, pistolaAgua, surf, burbuja]

let hojaAfilada = new Move("HojaAfilada", 55);
let latigazo = new Move("Latigazo", 45);
let rayoSolar = new Move("RayoSolar", 120);
let drenadoras = new Move("Drenadoras", 30);

let movimientosBulbasaur = [hojaAfilada, latigazo, rayoSolar, drenadoras]

let impactrueno = new Move("Impactrueno", 40);
let rayo = new Move("rayo", 90);
let chispazo = new Move("Chispazo",65);
let trueno = new Move("Trueno", 110);

let movimientosPikachu = [impactrueno, rayo, chispazo, trueno]

let placaje = new Move("Placaje", 40);
let golpeCuerpo = new Move("GolpeCuerpo", 85);
let cabezazo = new Move("Cabezazo", 70);

let movimientosMeowth = [placaje, golpeCuerpo, cabezazo]

let charmander = new Pokemon(
    "Charmander",   
    100,            // HPactual
    100,            // HPmax
    52,             // Ataque
    43,             // Defensa
    movimientosCharmander,
    false,          // Curacion off
    Type.Fuego      
  );

  let squirtle = new Pokemon(
    "Squirtle",   
    90,            // HPactual
    90,            // HPmax
    48,             // Ataque
    65,             // Defensa
    movimientosSquirtle,
    false,          // Curacion off
    Type.Fuego      
  );

let bulbasaur = new Pokemon(
    "Bulbasaur",
    100,    // HPActual
    100,    // HPmax
    49, // Ataque
    49, // Defensa
    movimientosBulbasaur,
    false,  // Curacion off 
    Type.Planta
);

let pikachu = new Pokemon(
    "Pikachu",
    70,    // HPActual
    70,    // HPmax
    55, // Ataque
    40, // Defensa
    movimientosPikachu,
    false,  // Curacion off 
    Type.Eléctrico
);

let meowth = new Pokemon(
    "Meowth",
    80,    // HPActual
    80,    // HPmax
    45, // Ataque
    35, // Defensa
    movimientosMeowth,
    false,  // Curacion off 
    Type.Normal
);

let listaPokemons: Pokemon[] = [];
listaPokemons.push(charmander, squirtle, bulbasaur, pikachu, meowth);
let eleccionPokemon = listaPokemons[Math.floor(Math.random() * listaPokemons.length)];

batallaPokemon(eleccionPokemon, eleccionPokemon);

function batallaPokemon(jugador: Pokemon, ia: Pokemon): void{
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
        } else if (accionJugador === "2") {
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
        } else if (accionIA === "curarse") {
            ia.heal();
            console.log(`${ia.nombre} se cura.`);
        }
        if (jugador.hpActual === 0) {
            console.log(`${jugador.nombre} muere. ${ia.nombre} gana`);
        }
        turno++;
    }
}