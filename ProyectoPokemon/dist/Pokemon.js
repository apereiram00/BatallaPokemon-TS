"use strict";
// Date: 24-09-2024
// Name: Álvaro Pereira
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(nombre, hpActual, hpMax, ataque, defensa, movimientos, puedeCurarse, tipo) {
        this.puedeCurarse = false;
        this.nombre = nombre;
        this.hpActual = hpActual;
        this.hpMax = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.puedeCurarse = puedeCurarse;
        this.tipo = tipo;
    }
    attack(ia, movimientos) {
        let ataqueTotal = this.ataque + movimientos.dañoBaseMovimiento;
        let daño = Math.floor((ataqueTotal - ia.defensa) > 0 ? ataqueTotal - ia.defensa : 1);
        console.log(`${this.nombre} usó ${movimientos.nombreMovimiento} y causó ${daño} puntos de daño a ${ia.nombre}`);
        ia.hpActual = Math.max(ia.hpActual - daño, 0);
        if (ia.hpActual === 0) {
            console.log(`${this.nombre} muere.`);
        }
    }
    heal() {
        if (!this.puedeCurarse) {
            let curacion = Math.floor(this.hpMax * 0.5);
            this.hpActual = Math.min(this.hpActual + curacion, this.hpMax);
            console.log(`${this.nombre} se cura ${curacion} HP. Tiene ${this.hpActual} HP`);
            this.puedeCurarse = true;
        }
        else {
            console.log(`${this.nombre} ya se ha curado. No puede curarse de nuevo.`);
        }
    }
}
exports.Pokemon = Pokemon;
