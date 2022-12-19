
const {
    createApp
} = Vue;

//import image from "./img/carlino.jpg"

createApp({
    data(){
        return{
            albero: 'https://i.pinimg.com/originals/b7/07/37/b7073755b5c3ce71834f038de618bed2.png',
            name: null,
            surname: null,
            name_surname: null,
            buonNatale: 'Buon Natale',
            class_style: 'text-danger',
            btn_class: "btn-primary btn",
            carlino: false,
        }
    },
    methods: {
        welcome: function(){
            this.name_surname = this.name + ' ' + this.surname
        },
        carlinoNatale: function(){
            if(this.carlino == true){
                this.carlino = false
            }
            else{
                this.carlino = true
            }
    

        },
    },



}).mount('#app')