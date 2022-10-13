# DomPixel Challenge BackEnd

> Um desafio solicitado pela empresa DomPixel aonde um CRUD fullstack deve ser desenvolvido, este é o repositório para a parte BackEnd.

### Ajustes e melhorias

O projeto foi desenvolvido com prazo de 24 horas, separado em tarefas que, no BackEnd, foram:

- [x] Criação do Servidor
- [x] Instalação das dependências e ORMs, utilizando de migration para o Model
- [x] Requisição GET com controller
- [x] Requisição POST com controller
- [ ] Requisição PUT com controller
- [ ] Requisição GET por id com controller
- [ ] Requisição DELETE com controller
- [ ] Autenticação do usuário para editar e deletar produtos
- [ ] Validação dos dados utilizando de bibliotecas do NODE

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente do javascript, node e possui o Visual Studio Code ou outro editor de texto instalado em sua máquina, com algum gerenciador de pacotes, yarn é recomendado, já que foi o utilizado para este projeto, na parte do back, (no frontEnd foi-se utilizado o NPM).

## 🚀 Instalando DomPixel CRUD backend

Para instalar o DomPixel CRUD backend, siga estas etapas:

1 - faça o download do repositório para sua máquina, extraia-o para uma pasta adequadamente e utilize o terminal para instalar os pacotes e dependências do projeto utilizando o comando `yarn install`

2 - utilizando o mysql workbench ou outra tecnologia, crie um schema em um servidor mysql e adicione a conexão em um arquivo .env na pasta raíz do projeto, com o seguinte modelo: " DATABASE_URL="mysql://root:root@localhost:3306/dompixel_crud" ",
substituindo os dados conforme necessário.

3 - Rode o comando: yarn prisma generate. Para reestabelecer a conexão do prisma com o seu arquivo .env de variáveis ambientes. 

4 - Rode a migration do prisma usando o comando: yarn prisma migrate dev.

5 - Dê build no servidor com o comando: `yarn build`

6 - Rode-o com o comando: node ./dist/server.js

## ☕ Usando DomPixel Crud backend

Para usar DomPixel Crud, siga estas etapas:

1 - Digite em sua barra de pesquisa o link e porta que seu projeto está hospedado localmente, após claro, rodar o servidor backEnd para conexão com o banco de dados mysql, fazendo com que as requisições funcionem, etc.

2 - Por enquanto, apenas foi-se desenvolvido apenas uma funcionalidade do site, que é a de adicionar produtos, utilize dos campos de input para adicionar um produto no banco de dados e volte para a página home, através da barra de pesquisa ou botão para verificar se seu produto foi adicionado.
