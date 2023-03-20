programa
{
	
	funcao inicio()
	{
		inteiro opcao, numero1, numero2
		
		escreva("escolha uma opcao (1-para Adição, 2-para Subtração, 3-para Multiplicação, 4-para Divisão): ")
		leia(opcao)
		escreva("Digite um numero: ")
		leia(numero1)
		escreva("Digite um numero: ")
		leia(numero2)
		escolha(opcao){
			caso 1:
			escreva(numero1, "+", numero2, "=", numero1+numero2, "\n")
			pare
			caso 2:
			escreva(numero1, "-", numero2, "=", numero1-numero2)
			pare
			caso 3:
			escreva(numero1, "*", numero2, "=", numero1*numero2)
			pare
			caso 4:
			escreva(numero1, "/", numero2, "=", numero1/numero2)
			pare
			caso contrario:
			escreva("erroooor")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 271; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */