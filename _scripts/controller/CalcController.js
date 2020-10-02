class CalcController {

    constructor() {
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._hourEl = document.querySelector("#hour");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {

        setInterval(() => {
            this._hourEl.innerHTML = new Date().toLocaleTimeString(this._locale);
            this._dateEl.innerHTML = new Date().toLocaleDateString(this._locale, {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
        }, 0);

        // setTimeout(() => {
        //     alert(`ACESSE: \nhttp://curriculo.emerson.lourenzi.net`);
        // }, 2000);
        //
        // setTimeout(() => {
        //     if (window.confirm('Acesse a page')) {
        //         window.open('http://curriculo.emerson.lourenzi.net', '_blank');
        //     }
        // }, 10000);

    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn,index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._hourEl;
    }

    set displayTime(value) {
        this._hourEl = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date().toLocaleTimeString("pt-BR");
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}