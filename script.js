const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]
