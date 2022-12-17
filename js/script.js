
const {
    createApp
} = Vue;

//import image from "./img/carlino.jpg"

createApp({
    data(){
        return{
            name: null,
            surname: null,
            name_surname: null,
            class_style: 'text-danger',
            btn_class: "btn-primary btn",
            carlino: false
        }
    },
    methods: {
        welcome: function(){
            this.name_surname = this.name + ' ' + this.surname
        },
        carlinoNatale: function(){
            this.carlino = true
    
            this.welcome
        },
    },



}).mount('#app')