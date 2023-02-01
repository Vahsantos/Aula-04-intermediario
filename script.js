/*notacao matematica 

media = (nota1 + nota2 + nota3)

1 criar variavel nomeAluno e receber com prompt o nome.

2 criar variaveis nota  e converter em nmr recebendo prompt com a priemira dps seg e dps terc.

 seg fase 
 5 calcular a mediaa do aluno e atribuir uma variavel 

 6  se a media dor maior ou igial a 7 ele esta aprovado

 7 exibo no comsole que o aluno esta aprovado se a media for igual ou maior a 7

 8
*/
{
//recebendo dados
let nomeAluno = prompt('digite o nome do aluno')
let nota1 = Number(prompt('digite a primeira nota'))
let nota2 = Number(prompt('digite a segunda nota'))
let nota3 = Number(prompt('digite a terceira nota'))

//calculando a média
let Media = (nota1 + nota2 + nota3)/3

//verificando se a media do aluno é >= 7
if(Media >= 7){
    console.log(nomeAluno + 'aprovado' + 'Media:' + Media)
    //media <=6 ou Media == 5
}else if (Media <=5){
    console.log(nomeAluno + 'recuperaçao' + 'Media:' + Media)
}else{
    console.log(nomeAluno + 'reprovado' + 'Media:' + Media)
}
}







