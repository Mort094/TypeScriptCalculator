new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        number: 0,
        number2: 0,
        result: 0,
        operation: "+"

    },
    methods: {
        calculate() {
            console.log("Resultat = " + this.number + " " + this.number2);
            if (this.operation == "+") {
                this.add()
            } else if (this.operation == "-"){
                this.sub()
            } else if ( this.operation == "/"){
                this.divide()
            } else if(this.operation == "*"){
                this.multi()
            }
        },
        add() {
            this.result = parseInt(this.number) + parseInt(this.number2);
        },
        sub() {
            this.result = parseInt(this.number) - parseInt(this.number2);
        },
        divide() {
            this.result = parseInt(this.number) / parseInt(this.number2);
        },
        multi() {
            this.result = parseInt(this.number) * parseInt(this.number2);
        }

    }
})