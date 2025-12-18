const Teste = require('./Teste');

class Relatorio {
    constructor() {
        this.testes = []; // armazena todos os testes
    }

    adicionarTeste(teste) {
        this.testes.push(teste); // adiciona novo teste ao array
    }

    listarTestes() {
        return this.testes; // retorna todos os testes
    }

    filtrarPorStatus(status) {
        // filtra apenas testes com status igual ao informado
        return this.testes.filter(t => t.status.toLowerCase() === status.toLowerCase());
    }

    gerarResumo() {
        const total = this.testes.length;
        const aprovados = this.filtrarPorStatus('aprovado').length;
        const reprovados = this.filtrarPorStatus('reprovado').length;
        return `Total: ${total}, Aprovados: ${aprovados}, Reprovados: ${reprovados}`;
    }
}

module.exports = Relatorio;


/*O que é:
Uma classe que guarda vários testes e permite manipulá-los.
Para que serve:
Centralizar todas as operações com testes: adicionar, filtrar, listar e gerar resumos.

Explicação detalhada:
this.testes → array que guarda todos os objetos Teste.
adicionarTeste(teste) → adiciona um teste ao relatório.
listarTestes() → retorna todos os testes.
filtrarPorStatus(status) → retorna somente os testes com o status informado.
gerarResumo() → calcula e retorna um resumo com total, aprovados e reprovados.*/