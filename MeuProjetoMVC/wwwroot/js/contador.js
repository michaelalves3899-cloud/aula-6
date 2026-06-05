let contador = 0;

const elementoNumero = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnZerar = document.getElementById("btnZerar");

function atualizarTela() {
    elementoNumero.textContent = contador;

    if (contador > 0) {
        elementoNumero.style.color = "green";
    } else if (contador < 0) {
        elementoNumero.style.color = "red";
    } else {
        elementoNumero.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarTela();
});

btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarTela();
});

btnZerar.addEventListener("click", function() {
    contador = 0;
    atualizarTela();
});