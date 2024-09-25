export class Move{
    public nombreMovimiento: string;
    public dañoBaseMovimiento: number;

    constructor(nombreMovimiento: string, dañoBaseMovimiento: number){
        this.nombreMovimiento = nombreMovimiento;
        this.dañoBaseMovimiento = dañoBaseMovimiento;
    }
}