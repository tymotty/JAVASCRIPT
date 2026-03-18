const users = [
  { name: "Sujeito", age: 23, salary: 4000, active: true, team: "Frontend", bonus: 0 },
  { name: "Jose", age: 36, salary: 3000, active: true, team: "Backend", bonus: 0 },
  { name: "Ana Caroline", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0 },
  { name: "Bauer", age: 28, salary: 3500, active: true, team: "Frontend", bonus: 0 },
  { name: "Matheus", age: 22, salary: 2500, active: false, team: "Mobile", bonus: 0 },
]
const usuario = users.find((users) => {
    return users.age >= 25
})

console.log (usuario)