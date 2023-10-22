const entrada = require('prompt-sync')({ sigint: true});

var nWins   = parseInt(entrada("Informe a quantidade de vitórias: "));
var nLosts  = parseInt(entrada("Informe a quantidade de derrotas: "));
var aDados  = Ranking(nWins, nLosts);

console.log("O Herói tem saldo " + aDados[0][0] + " e está no nível " + aDados[0][1]);

/*---------------------------------------------------------*/
/*Funciont:     Ranking
/*Description:  Retornando a classficação no ranking
/*Author:       Lidio Oliveira
/*Params:       nWins (int) - Número de Vitórias
/*              nLosts (int) - Número de Derrotas
/*Return:       aResult[0][0] - Saldo (vitórias - Derrotas)
                aResult[0][1] - Classificação no ranking
/*---------------------------------------------------------*/
function Ranking(nWins, nLosts){

    let aResult = [[],[]];
    let nX      = 1;

    //Declaração de array multidimensional com a lista de classificação do ranking
    var lsRanking = [
        [0, 10,"Ferro"],  
        [11, 20, "Bronze"], 
        [21, 50, "Prata"], 
        [51, 80, "Ouro"], 
        [81, 90, "Diamante"], 
        [91, 100, "Lendário"], 
        [101, , "Imortal"]
    ]

    //Faz o cálculo do saldo (vitórios - derrotas)
    aResult[0][0] = nWins - nLosts

    //Se o saldo for maior que zero pesquisa no array o ranking
    if(aResult[0][0] >= 0){
        while( nX <= lsRanking.length ){
            
            if(aResult[0][0] > lsRanking[nX-1][0]){
                aResult[0][1] = lsRanking[nX-1][2];
            }
            else{
                break;
            }
            nX++
        }
    }
    //se não assume o nível inicial
    else{
        aResult[0][1] = lsRanking[0][2];
    }

    return aResult
}