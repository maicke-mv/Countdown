export default class Countdown {

    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    
    get actualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.futureDate);
    }

    get time() {
        return this._futureDate.getTime() - this.actualDate.getTime();
    }

    get dias() {
        return Math.floor(this.time / (24 * 60 * 60 * 1000));
    }

    get horas() {
        return Math.floor(this.time / (60 * 60 * 1000));
    }

    get minutos() {
        return Math.floor(this.time / (60 * 1000));
    }

    get segundos() {
        return Math.floor(this.time / 1000);
    }

    get total() {
        const dias = this.dias < 10 ? '0' + this.dias : this.dias;
        const horas = this.horas % 24 < 10 ? '0' + (this.horas % 24 + ":") : this.horas % 24 + ":";
        const minutos = this.minutos % 60 < 10 ? '0' + (this.minutos % 60 + ":") : this.minutos % 60 + ":";
        const segundos = this.segundos % 60 < 10 ? '0' + (this.segundos % 60) : this.segundos % 60;
        return [dias, horas, minutos, segundos];
    }
}