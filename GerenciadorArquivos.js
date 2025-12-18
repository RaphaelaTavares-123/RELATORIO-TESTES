const fs = require('fs');
const Teste = require('./Teste');

class GerenciadorArquivos {
    constructor(caminhoArquivo) {
        this.caminhoArquivo = caminhoArquivo; // caminho do arquivo .txt
    }

    lerArquivo() {
        if (!fs.existsSync(this.caminhoArquivo)) return []; // se não existir, retorna vazio
        const dados = fs.readFileSync(this.caminhoArquivo, 'utf-8');
        return dados.split('\n').filter(Boolean).map(Teste.fromString);
    }

    salvarArquivo(testes) {
        const conteudo = testes.map(t => t.formatarParaArquivo()).join('\n');
        fs.writeFileSync(this.caminhoArquivo, conteudo, 'utf-8');
    }
}

module.exports = GerenciadorArquivos;

/*O que é:
Classe que cuida de ler e escrever arquivos.
Para que serve:
Separa a responsabilidade de manipular arquivos do restante do código. Mantém o projeto organizado.
Explicação detalhada:
fs → módulo do Node.js que permite ler e escrever arquivos.
lerArquivo() → lê o arquivo, separa por linhas (\n), transforma cada linha em objeto Teste.
salvarArquivo(testes) → transforma os objetos Teste em linhas de texto e salva no arquivo.*/