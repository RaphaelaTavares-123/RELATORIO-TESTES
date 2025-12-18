class Teste {
    constructor(nome, status, data, observacao) {
        this.nome = nome;        // nome do teste, ex: "Login"
        this.status = status;    // 'aprovado' ou 'reprovado'
        this.data = data;        // data do teste
        this.observacao = observacao || ''; // observações adicionais
    }

    // Transforma o objeto Teste em uma linha de texto para salvar em arquivo
    formatarParaArquivo() {
        return `${this.nome};${this.status};${this.data};${this.observacao}`;
    }

    // Cria um objeto Teste a partir de uma linha de texto do arquivo
    static fromString(str) {
        const [nome, status, data, observacao] = str.split(';');
        return new Teste(nome, status, data, observacao);
    }
}

module.exports = Teste;


/*O que é:
Uma classe representa um objeto do mundo real. No caso, cada Teste é um objeto com informações sobre um teste realizado.
Para que serve:
Organizar os dados de cada teste de forma estruturada, permitindo criar, salvar e ler testes facilmente.


Explicação detalhada:

constructor(...) → cria o objeto com propriedades (nome, status, data, observação).

formatarParaArquivo() → pega o objeto e transforma em string, separando campos por ;, para salvar no arquivo.

static fromString(str) → faz o caminho inverso: pega uma linha do arquivo e transforma em objeto Teste.

module.exports = Teste → permite que outras partes do código usem essa classe. */
