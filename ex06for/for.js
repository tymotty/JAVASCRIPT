/*  For  */
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

const users = [`Maria`, `Alice`, `Joao`]

for (let a = 0; a < users.length; a++) {
    console.log(users[a])
}

/*For of*/
const usuarios = [0, `Timoteo`, `Sama`, `Gui`,]

for (let nameUsuarios of usuarios) {
    console.log(nameUsuarios)
}
/*For in*/
const information = {
    name: `Timoteo`,
    age: 19,
    street: `Rua General`
}
for (let activeUsers in information) {
    console.log(`${activeUsers} : ${information [activeUsers]}`)
}
