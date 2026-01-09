Sistema de Relatório de Testes
Este projeto consiste em um sistema em Node.js para processar strings de dados, convertê-las em objetos de teste e gerenciar o armazenamento desses resultados em arquivos físicos.

Funcionalidades
Processamento de Dados: Converte strings brutas em objetos estruturados utilizando o método fromString(str).

Gerenciamento de Arquivos: Módulo especializado para leitura e escrita de logs e relatórios (GerenciadorArquivos.js).

Estrutura de Objetos: Classe Teste que organiza informações de nome, status, data e observacao.

Estrutura de Arquivos
Teste.js: Contém a lógica de construção do objeto e parsing de strings.

Relatorio.js: Responsável por formatar os dados para exibição final.

GerenciadorArquivos.js: Lida com a entrada e saída (I/O) do sistema de arquivos.

dados/relatorio.txt: Arquivo onde os resultados processados são armazenados.

Como Executar
Instale as dependências:
Bash
npm install
Execute o index:

Bash
node index.js 

Pipeline de Integração (CI)
Para garantir que o processamento de arquivos e a criação dos objetos não quebrem, a pipeline executa os seguintes passos:
Linting: Verifica se o código segue as boas práticas.
Unit Tests: Valida se a função fromString separa corretamente os campos por ;.
File System Check: Garante que a pasta dados/ pode ser criada e escrita.
