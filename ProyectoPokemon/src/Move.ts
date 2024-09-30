// Date: 24-09-2024
// Name: Álvaro Pereira

export class Move{
    public nombreMovimiento: string;
    public dañoBaseMovimiento: number;

    constructor(nombreMovimiento: string, dañoBaseMovimiento: number){
        this.nombreMovimiento = nombreMovimiento;
        this.dañoBaseMovimiento = dañoBaseMovimiento;
    }
}