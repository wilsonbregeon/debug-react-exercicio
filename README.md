# Renderização condicional
​
Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)
​
​
## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar um novo projeto que precisa de um bom debug para voltar a funcionar!
​
​
Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: 
​
Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.
​
Hoje vimos um pouco sobre o debugging, processo de encontrar e corrigir erros em aplicações. Neste exercício temos uma página similar a um perfil do linkedin, mas com vários erros.
​
Durante a aula de hoje vocês conseguiram debugar uma página simples de post e comentário. No exercício de hoje à tarde vamos debugar um novo projeto.
​
# Exercício 1
​
## Colocando a mão na massa para o exercício 1: 
​
Nossa aplicação vai ser para o cadastro do usuário em um aplicativo de delivery, já existe uma tela de Cadastro para as informações de login do usuário na aplicação como vocês viram pela manhã, agora vamos criar mais um componente de cadastro chamado TelaCadastroEndereco, onde vocês vão pegar as informações de contato e endereço do usuário:
​
- Crie uma pasta dentro da pasta Components chamada TelaCadastroEndereco
- Crie um arquivo chamado TelaCadastroEndereco
- Crie a estrutura de um componente dentro do arquivo (lembre de exportar o componente)
- Á página vai precisar ter:
    - Um input para endereço
    - Um input para número da residência
    - um input para telefone
    - um input para complemento
    - um botão para ser usado para passar a próxima página
​
# Exercício 2
## Colocando a mão na massa para o Exercício 2.
​
- Continue o exercício feito na aula e adicione o componente criado **TelaCadastroEndereco** para seguir o fluxo da renderização condicional, ela deve aparecer depois de cadastrar as informações de login do usuário, o fluxo de páginas deve ocorrer da seguinte ordem: 
    - TelaLogin >>> TelaCadastro >>> TelaCadastroEndereco >>> TelaUsuarioCadastrado
​
​[**Link codesandbox:**](https://codesandbox.io/s/debug-exercicio-dgh9wi)
 
