const Relatorio = require('./Relatorio');
const GerenciadorArquivos = require('./GerenciadorArquivos');
const Teste = require('./Teste');

const arquivo = new GerenciadorArquivos('./dados/relatorio.txt');
const relatorio = new Relatorio();

// Ler testes existentes
arquivo.lerArquivo().forEach(t => relatorio.adicionarTeste(t));

// Adicionar novo teste (exemplo)
const novoTeste = new Teste('Teste de login', 'aprovado', new Date().toLocaleDateString(), 'Executado com sucesso');
relatorio.adicionarTeste(novoTeste);

// Salvar todos os testes no arquivo
arquivo.salvarArquivo(relatorio.listarTestes());

// Mostrar relatórios
console.log('Todos os testes:');
console.log(relatorio.listarTestes());

console.log('\nTestes aprovados:');
console.log(relatorio.filtrarPorStatus('aprovado'));

console.log('\nResumo:');
console.log(relatorio.gerarResumo());


/*Arquivo que coordena todo o sistema. Aqui você cria objetos, chama métodos e exibe resultados.

Explicação detalhada:
Cria objeto GerenciadorArquivos → para lidar com arquivos.
Cria objeto Relatorio → para armazenar todos os testes.
Lê o arquivo e adiciona os testes existentes ao relatório.
Cria um novo teste e adiciona ao relatório.
Salva todos os testes no arquivo.
Exibe no terminal: todos os testes, apenas aprovados e um resumo estatístico.*/