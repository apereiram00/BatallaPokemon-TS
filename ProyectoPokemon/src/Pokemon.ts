// Date: 24-09-2024
// Name: Álvaro Pereira

import {Move} from './Move';
import {Type} from './Type';

export class Pokemon{
    public nombre: string;
    public hpActual: number;
    public hpMax: number;
    public ataque: number;
    public defensa: number;
    public movimientos: Move[];
    public tipo: Type;
    public puedeCurarse: boolean = true;

    constructor(nombre: string, hpActual: number, hpMax: number, ataque: number, defensa: number, movimientos: Move[], puedeCurarse: boolean, tipo: Type){
        this.nombre = nombre;
        this.hpActual = hpActual;
        this.hpMax = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.puedeCurarse = puedeCurarse;
        this.tipo = tipo;
    }

    public attack(pokemon: Pokemon, movimientos: Move): void {
        let ataqueTotal = this.ataque + movimientos.dañoBaseMovimiento;
        let daño = Math.max(ataqueTotal - pokemon.defensa, 0);
        console.log(`${this.nombre} usa ${movimientos.nombreMovimiento} y causa ${daño} puntos de daño a ${pokemon.nombre}`);
        pokemon.hpActual = Math.max(pokemon.hpActual - daño, 0); 
    }
    

    public heal(): void {
        if(!this.puedeCurarse){
            let curacion = Math.floor(this.hpMax * 0.5);
            this.hpActual = Math.min(this.hpActual + curacion, this.hpMax);
            console.log(`${this.nombre} se cura ${curacion} HP. Tiene ${this.hpActual} HP`);
            this.puedeCurarse = false;
        }else{
            console.log(`${this.nombre} ya se ha curado. No puede curarse de nuevo.`);
        }
    }
}
