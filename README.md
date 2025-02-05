<h1 align="center">
    <img src="https://dev.radar.farmarcas.com.br/authentication/adaa9473ff7a59a99465.svg" alt="PGE" height="100" width="200">
    <br>
</h1>

<div style="display: flex; justify-content: center;">
<a href="https://github.com/farmarcas/testing-automated-cypress"><img src="https://img.shields.io/badge/-COMMITS-007bff?style=for-the-badge&logo=github&logoColor=white" width="100" height="22" style="margin-right: 5px;"/></a>
<a href="https://dev.radar.farmarcas.com.br/authentication/"><img src="https://img.shields.io/badge/-Website-20c997?style=for-the-badge&logo=internet-explorer&logoColor=White" width="100" height="22" style="margin-right: 5px;"/></a>
</div>

---

<h4 align="center" style="color: white; font-size: 20px;">
    🚧 AUTOMAÇÃO DE TESTES | FRONT-END 🚧
</h4>

---

## <font color="white">💻 SOBRE O PROJETO</font>

<p style="color: white;">O projeto é um conjunto abrangente de testes automatizados para <strong>garantir a funcionalidade e a integridade do site FARMARCAS.</strong><br>

Ele aborda uma variedade de cenários, desde a navegação básica até interações específicas do usuário.<br>

<strong>A estrutura dos testes reflete uma abordagem meticulosa</strong> para cobrir todos os aspectos do site, visando garantir uma funcionalidade consistente e livre de erros.<br>

A FARMARCAS tem como meta, sempre garantir uma experiência <strong>ÚNICA</strong> em sua navegação, buscando incansavelmente a excelência.</p>

---

## <font color="white">🛠️ TECNOLOGIAS UTILIZADAS</font>

<font color="white">O projeto foi desenvolvido utilizando as seguintes tecnologias:</font>

- [<span style="color: #007bff;">Cypress</span>](https://www.cypress.io/)
- [<span style="color: #007bff;">VS Code</span>](https://code.visualstudio.com/)

<font color="white">Além disso, temos as seguintes dependências:</font>

- [<span style="color: #007bff;">Allure Report</span>](https://www.allurereport.org/docs/cypress/)

---

## <font color="white">📂 COMO BAIXAR O PROJETO</font>

<pre>
<code class="language-bash">
<span style="color: #20c997;"># Clonar o repositório</span>
$ https://github.com/farmarcas/testing-automated-cypress

<span style="color: #20c997;"># Instalar o Cypress</span>
$ npm install cypress --save-dev

<span style="color: #20c997;"># Instalar o Allure Report</span>
$ npm install --save-dev allure-cypress

</code>
</pre>

---

## <font color="white">🚀 COMO EXECUTAR O PROJETO</font>

<pre>
<code class="language-bash">
<span style="color: #20c997;"># Execução Via Front</span>
$ npx cypress open

<span style="color: #20c997;"># Execução Via Linha de Comando</span>
$ npm run test

</code>
</pre>

## <font color="white">📝 RESUMO DA ESTRUTURA</font>

<p style="color: #FFFFFF;">
    🔧 CYPRESS:<br>
    <font color="#007bff">&#10004;</font> pagina_acao: Armazena os metódos do projeto.</br>
    <font color="#007bff">&#10004;</font> pagina_elementos: Armazena os locators do projeto.</br>
    <font color="#007bff">&#10004;</font> pagina_execucao: Armazena as execuções dos cenários de testes.</br>
    <font color="#007bff">&#10004;</font> commands: Armazena o código em formato de comando.</br>
</p>

<p style="color: #FFFFFF;">
    🎬 PÁGINA AÇÃO:<br>
    <font color="#007bff">&#10004;</font> Consolida todos os metódos usados no projeto, como por exemplo: Clicar, escrever, validar, etc.<br>
</p>

<p style="color: #FFFFFF;">
    ⚙️ PÁGINA ELEMENTOS:<br>
    <font color="#007bff">&#10004;</font> Consolida os locators, ajduando a manter o código mais limpo e evitando duplicidades.<br>
</p>

<p style="color: #FFFFFF;">
    ⏯️ PÁGINA EXECUÇÃO:<br>
    <font color="#007bff">&#10004;</font> Orquestra e sintetiza a execução da automação, separados por cenários.<br>
</p>

## <font color="white">🔍 OVERVIEW DOS TESTES</font>

<p style="color: #FFFFFF;">
    <strong style="color: #20c997;">LOGIN:</strong><br>
    <p style="text-align: justify; margin-left: 50px;">
    <strong>1.1</strong> Login efetuado com Sucesso: O teste valida um login bem-sucedido ao inserir um CPF e senha corretos, confirmar a presença do título do ambiente de homologação e verificar que a página inicial carrega com os títulos esperados.
    </p>
        <p style="text-align: justify; margin-left: 50px;">
    <strong>1.2</strong> Login com usuário não cadastrado: O teste simula um login com um usuário não cadastrado, verificando que, após a tentativa de login, o sistema exibe a mensagem de falha na autenticação.
    </p>
            <p style="text-align: justify; margin-left: 50px;">
    <strong>1.3</strong> Login com senha inválida: Esse teste verifica que ao inserir um CPF correto, mas uma senha inválida, o sistema rejeita o login e exibe a mensagem de erro correspondente.
    </p>
            <p style="text-align: justify; margin-left: 50px;">
    <strong>1.4</strong> Login sem preencher usuário: O teste confirma que, ao tentar fazer login sem preencher o campo de CPF, o botão de login permanece desabilitado, impedindo o avanço no processo.
    </p>
            <p style="text-align: justify; margin-left: 50px;">
    <strong>1.5</strong> Login sem preencher a senha: Esse teste valida que, ao tentar fazer login sem preencher a senha, o botão de login fica desabilitado, garantindo que o sistema exige a entrada desse dado.
    </p>
            <p style="text-align: justify; margin-left: 50px;">
    <strong>1.6</strong> Login sem preencher o usuário e a senha: O teste verifica que ao deixar os campos de CPF e senha em branco, o botão de login fica desabilitado, impedindo o envio da solicitação.
    </p>
            <p style="text-align: justify; margin-left: 50px;">
    <strong>1.7</strong> Login com o usuário bloqueado/inativo: Esse teste garante que um usuário bloqueado ou inativo não consegue acessar o sistema, exibindo a mensagem de falha na autenticação ao tentar efetuar login.
    </p>

<h2 style="color: white;">✍ AUTOR</h2>

  <table>
  <tr>
    <td align="center">
      <a href="https://www.farmarcas.com.br/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/132934043?s=400&u=d70e99353630191829cdfbc95f9f48c0a66299e8&v=4" width="100px;" alt=""/>
        <br />
         <sub style="color: white;"><b>Gustavo Ávila</b></sub>
      </a>
      <br />
      <a title="FARMARCAS"><sub style="color: white;"><b>Analista de Qualidade<b></a>
      <br/>
      <br/>
      <a href="mailto:gustavo.avila@terceirizados.farmarcas.com.br">
        <img src="https://img.shields.io/badge/-gustavo.avila@terceirizados.farmarcas.com.br-20c997?style=flat-square&logo=Gmail&logoColor=white" alt=""/>
      </a>
      <td align="center">
    </td>
  </tr>
</table>