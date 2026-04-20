const users = [
    {name: `Rodolefo`, age: 17, contact: `(19) 9341-3919`},
    {name: `Timoteo`, age: 19, contact: `(19) 93346-5499`},
    {name: `Sama`, age: 27, contact: `(19) 95431-3935`},
    {name: `Geraldo`, age: 61, contact: `(19) 91345-3919`},
]

//IDADE MINIMA = 18
const MINIMUM_AGE = 18

users.forEach(function(item, index){

    if(item.age < MINIMUM_AGE){
        console.log(`Olá ${item.name}, você não está permitido entrar nesta site por ser menor de idade!`)
    } 
    
    else {
        console.log (`Olá ${item.name}, você está permitido entrar nesta site por ser maior de idade! Esperamos que tenha uma ótima experiencia com nosso sistema, qualquer reclacamacao entre em contato com nossos desenvolvedores`)
    }
});