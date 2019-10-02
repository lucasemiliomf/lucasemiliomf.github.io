// Introduction to JavaScript
// Lucas Ferreira

var introducao = "Hello World";
console.log(introducao);

function soma(a,b){
    console.log(a+b);
}

soma(432,3489);

function email(){
    alert("lucasemilio.mf@gmail.com");
}

function valida(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    if(nome.value == "" ){
        alert("Empty name");
    }
    else{
        alert(nome.value+" subscribted");
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        alert("Hello "+this.name);
    }
}

let admin = new User("Lucas");
admin.sayHi();