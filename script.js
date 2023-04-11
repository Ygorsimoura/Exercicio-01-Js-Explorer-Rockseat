/*
Bora praticar e rever tudo o que foi ensinado na aula? 
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/

let numberOne = Number(prompt("Insira o Primeiro Número:"))
let numberTwo = Number(prompt("Insira o Segundo Número:"))


alert(`A Soma dos dois números é : ${numberOne + numberTwo}`)
alert(`A Diferença dos dois números é: ${numberTwo - numberTwo}`)
alert(`A Multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A Disvisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O Resto da Divisão dos dois números é ${numberOne % numberTwo}`)

if ((numberOne + numberTwo) % 2 == 0) {
    alert(`A soma dos números é par!`)
}

else (
    alert(`A soma dos números é impar!`)
)


if (numberOne == numberTwo) {
    alert(`Os dois números São iguais!`)
}

else {
    alert(`Os números são diferentes!`)
}