for (let number = 1; number <= 50; number ++){
    if (number % 4 === 0 && number % 7 === 0) {
        console.log ("QuadSept")
    }
    else if (number % 4 === 0) {
        console.log ("Quad")
    }
    else if (number % 7 === 0) {
        console.log ("Sept")
    } 
    else {
        console.log (number)
    }
}