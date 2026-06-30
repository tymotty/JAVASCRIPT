const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {
    const final = Number(contador.dataset.final);

    let numero = 0;

    const velocidade = final / 100;
    const intervalo = setInterval(() => {
        numero += velocidade;
        if(numero >= final){
            numero = final;
            clearInterval(intervalo);
        }
        
        contador.textContent = Math.floor(numero);
    },20);
});