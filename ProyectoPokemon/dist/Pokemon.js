"use strict";
// Date: 24-09-2024
// Name: Álvaro Pereira
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(nombre, hpActual, hpMax, ataque, defensa, movimientos, puedeCurarse, tipo) {
        this.puedeCurarse = true;
        this.nombre = nombre;
        this.hpActual = hpActual;
        this.hpMax = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.puedeCurarse = puedeCurarse;
        this.tipo = tipo;
    }
    attack(pokemon, movimientos) {
        let ataqueTotal = this.ataque + movimientos.dañoBaseMovimiento;
        let daño = Math.max(ataqueTotal - pokemon.defensa, 0);
        console.log(`${this.nombre} usa ${movimientos.nombreMovimiento} y causa ${daño} puntos de daño a ${pokemon.nombre}`);
        pokemon.hpActual = Math.max(pokemon.hpActual - daño, 0);
    }
    heal() {
        if (!this.puedeCurarse) {
            let curacion = Math.floor(this.hpMax * 0.5);
            this.hpActual = Math.min(this.hpActual + curacion, this.hpMax);
            console.log(`${this.nombre} se cura ${curacion} HP. Tiene ${this.hpActual} HP`);
            this.puedeCurarse = false;
        }
        else {
            console.log(`${this.nombre} ya se ha curado. No puede curarse de nuevo.`);
        }
    }
}
exports.Pokemon = Pokemon;
