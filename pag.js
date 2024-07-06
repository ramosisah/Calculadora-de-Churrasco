$(document).ready(function() {
    $('#calcularBtn').click(function(event) {
        
        event.preventDefault();

        
        let homens = parseInt($('#Homens').val()) || 0;
        let mulheres = parseInt($('#Mulheres').val()) || 0;
        let criancas = parseInt($('#Crianças').val()) || 0;

        
        const consumo = {
            carne: { homem: 500, mulher: 300, crianca: 200 },
            frango: { homem: 200, mulher: 200, crianca: 100 },
            linguica: { homem: 200, mulher: 200, crianca: 200 },
            refrigerante: { homem: 300, mulher: 400, crianca: 200 },
            cerveja: { homem: 800, mulher: 500, crianca: 0 }
        };
        
        let totalCarne = (homens * consumo.carne.homem) + (mulheres * consumo.carne.mulher) + (criancas * consumo.carne.crianca);
        let totalFrango = (homens * consumo.frango.homem) + (mulheres * consumo.frango.mulher) + (criancas * consumo.frango.crianca);
        let totalLinguica = (homens * consumo.linguica.homem) + (mulheres * consumo.linguica.mulher) + (criancas * consumo.linguica.crianca);
        let totalRefrigerante = (homens * consumo.refrigerante.homem) + (mulheres * consumo.refrigerante.mulher) + (criancas * consumo.refrigerante.crianca);
        let totalCerveja = (homens * consumo.cerveja.homem) + (mulheres * consumo.cerveja.mulher) + (criancas * consumo.cerveja.crianca);

        
        let resultado = `Total de Carne: ${(totalCarne / 1000).toFixed(2)} kg\n` +
                        `Total de Frango: ${(totalFrango / 1000).toFixed(2)} kg\n` +
                        `Total de Linguiça: ${(totalLinguica / 1000).toFixed(2)} kg\n` +
                        `Total de Refrigerante: ${(totalRefrigerante / 1000).toFixed(2)} L\n` +
                        `Total de Cerveja: ${(totalCerveja / 1000).toFixed(2)} L`;

    
        $('#resultado').val(resultado);
    });
});