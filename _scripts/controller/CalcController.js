class CalcController {

    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#date");
        let horaEl = document.querySelector("#hour");

        displayCalcEl.innerHTML = "1234556";
        dateEl.innerHTML = new Date().toLocaleDateString();
        horaEl.innerHTML = new Date().toLocaleTimeString();

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}