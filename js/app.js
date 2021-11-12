var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Contador realizado con Vue',
        errorResta: "",
        valorContador: 1,
        sumaExitosa: 0,
        restaExitosa: 0,
        restaError: 0
    },
    methods: {

        sumar() {
            this.valorContador = this.valorContador + 1;
            this.errorResta = "";
            this.sumaExitosa = this.sumaExitosa + 1;
        },

        restar() {
            if (this.valorContador > 1) {
                this.valorContador = this.valorContador - 1;
                this.restaExitosa = this.restaExitosa + 1;
                this.errorResta = "";
            } else {
                this.errorResta = `<h3 style="color: red;">La cantidad no puede ser inferior a 1</h3>`;
                this.restaError = this.restaError + 1;
            }
        }

    },
    computed: {

    }
})