
const {
    createApp
} = Vue;

//import image from "./img/carlino.jpg"

createApp({
    data(){
        return{
            name: '',
            surname: '',
            class_style: 'text-danger',
            btn_class: "btn-primary btn",
            carlino: false
        }
    },
    methods: {
        carlinoNatale: function(){
            this.carlino = true
        }
    },


}).mount('#app')