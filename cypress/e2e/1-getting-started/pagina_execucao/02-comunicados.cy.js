import Metodos from "../pagina_acao/metodos.js"
import elementosLogin from "../pagina_elementos/elementos_Login.js"
import Usuario from "../../../fixtures/usuario.js"
import elementosHome from "../pagina_elementos/elementos_Home.js"
import elementosMenu from "../pagina_elementos/elementos_Menu.js"
import elementosComunicados from "../pagina_elementos/elementos_Comunicados.js"

//#region VARIÁVEIS
const tituloCampoEstado = 'Estado *';
const tituloCampoBandeira = 'Bandeira *';
const tituloCampoLoja = 'Loja *';
const tituloCampoOcupacao = 'Ocupação *';
const tituloCampoColaborador = 'Colaborador *';
const tituloCampoDepartamento = 'Departamento *';
const tituloCampoPreenchaTodosOsCampos = 'Preencha todos os campos obrigatórios (*) abaixo.';
const tituloComunicado = 'Teste Automatizado QA';
const tituloComunicado150Caracteres = 'A tecnologia é a chave para o futuro, conectando o mundo de maneiras inimagináveis, otimizando processos, melhorando a comunicação e criando soluções inovadoras que transformam a vida cotidiana, seja no trabalho, na educação ou no lazer, tornando o impossível, possível.';
const tituloComunicado100Caracteres = 'A tecnologia é a chave para o futuro, conectando o mundo de maneiras inimagináveis, otimizando proce';
const tituloDescricao2500Caracteres = 'A tecnologia tem se consolidado como uma das forças mais transformadoras da sociedade contemporânea, impactando profundamente todas as áreas da vida humana, desde as relações interpessoais até os métodos de produção e organização social. Com a introdução de novas ferramentas digitais, os avanços da inteligência artificial, IA, da automação e das redes de comunicação têm permitido uma velocidade de desenvolvimento nunca antes vista. Hoje, vivemos em um mundo onde a conectividade e a troca de informações são instantâneas, e dispositivos como smartphones, computadores e assistentes virtuais tornaram-se indispensáveis para a realização de tarefas cotidianas, seja no ambiente de trabalho, na educação ou na interação social. As redes sociais, por exemplo, revolucionaram a comunicação global, permitindo que qualquer pessoa, de qualquer lugar do mundo, compartilhe informações e se conecte com outros em tempo real. Em um nível mais técnico, a automação de processos empresariais e a utilização de big data têm otimizado a produtividade e a tomada de decisões, resultando em ganhos de eficiência em uma variedade de setores, como a indústria, a saúde e o comércio. Na medicina, a tecnologia tem proporcionado grandes avanços, com o uso de sistemas de IA para diagnóstico precoce de doenças e a realização de cirurgias assistidas por robôs, aumentando a precisão e reduzindo os riscos. Além disso, o acesso à informação proporcionado pela internet tem democratizado o aprendizado e a educação, permitindo que pessoas de diferentes partes do mundo se conectem a cursos online e materiais de estudo. Contudo, apesar de seus muitos benefícios, a tecnologia também traz desafios significativos, como as questões de privacidade e segurança de dados, a crescente dependência dos dispositivos digitais e a automação de empregos, que pode levar à substituição de trabalhadores humanos por máquinas. Além disso, o impacto ambiental da tecnologia, com a produção massiva de dispositivos eletrônicos e o consumo crescente de energia, exige que soluções mais sustentáveis sejam adotadas para mitigar os efeitos negativos ao meio ambiente. Dessa forma, é fundamental que, ao continuarmos a integrar a tecnologia em nossas vidas, também consideremos os aspectos éticos, sociais e ecológicos envolvidos. O equilíbrio entre inovação e responsabilidade será essencial para garantir que os avanços tecnológicos beneficiem toda a humanidade de forma justa e sustentável, minimizando os danos e maximizando os benefícios a longo prazo.';
const tituloCemCaracteres = '100 caracteres restantes.';
const tituloDescricao2000Caracteres = 'A tecnologia tem se consolidado como uma das forças mais transformadoras da sociedade contemporânea, impactando profundamente todas as áreas da vida humana, desde as relações interpessoais até os métodos de produção e organização social. Com a introdução de novas ferramentas digitais, os avanços da inteligência artificial, IA, da automação e das redes de comunicação têm permitido uma velocidade de desenvolvimento nunca antes vista. Hoje, vivemos em um mundo onde a conectividade e a troca de informações são instantâneas, e dispositivos como smartphones, computadores e assistentes virtuais tornaram-se indispensáveis para a realização de tarefas cotidianas, seja no ambiente de trabalho, na educação ou na interação social. As redes sociais, por exemplo, revolucionaram a comunicação global, permitindo que qualquer pessoa, de qualquer lugar do mundo, compartilhe informações e se conecte com outros em tempo real. Em um nível mais técnico, a automação de processos empresariais e a utilização de big data têm otimizado a produtividade e a tomada de decisões, resultando em ganhos de eficiência em uma variedade de setores, como a indústria, a saúde e o comércio. Na medicina, a tecnologia tem proporcionado grandes avanços, com o uso de sistemas de IA para diagnóstico precoce de doenças e a realização de cirurgias assistidas por robôs, aumentando a precisão e reduzindo os riscos. Além disso, o acesso à informação proporcionado pela internet tem democratizado o aprendizado e a educação, permitindo que pessoas de diferentes partes do mundo se conectem a cursos online e materiais de estudo. Contudo, apesar de seus muitos benefícios, a tecnologia também traz desafios significativos, como as questões de privacidade e segurança de dados, a crescente dependência dos dispositivos digitais e a automação de empregos, que pode levar à substituição de trabalhadores humanos por máquinas. Além disso, o impacto ambiental da tecnologia, com a produção massiva de dispositivos eletrônicos e o cons';
const tituloDoisMilCaracteres = '2000 caracteres restantes.';
const tituloZeroCaracteres = '0 caracteres restantes.';

const estadoSaoPaulo = 'São Paulo';
const bandeiraMaestra = 'Maestra';
const lojaMaestra = 'MAESTRA 00001';
const ocupacaoAnalista = 'Analista';
const colaboradorSelecionar = 'Rafaela Batista (?)';
const departamentoAdmDigital = 'Adm Digital';
const departamentoSelecionarTudo = '19 itens';

const anexarImagemDeCapa = 'Imagem de capa.jpeg';
const anexarImagemDeCapaPDF = 'Teste PDF.pdf';
const anexarImagemDeCapaErro = 'Imagem de capa - erro.jpg';
const anexarImagemDeCapaErro2MB = 'Imagem de capa - erro - 2MB.png';
const adicionarAnexo1 = 'Anexo 1.jpg';
const adicionarAnexo2 = 'Anexo 2.jpg';
const adicionarAnexo3 = 'Anexo 3.jpeg';
const adicionarAnexo4 = 'Anexo 4.jpg';
const adicionarAnexo5 = 'Anexo 5.jpg';

const mensagemSucessoImagem = 'Sucesso ao salvar imagem de capa';
const mensagemErroImagem = 'Erro ao selecionar imagemAs dimensões da imagem devem ter 700px x 280px.';
const mensagemErroImagem2MB = 'Erro ao realizar uploadO arquivo enviado excede o limite de 2MB';
const mensagemErroImagemPDF = 'Erro ao selecionar imagemFormato de arquivo não suportado.';
const mensagemSucessoEnvioComunicado = 'Sucesso ao enviarO comunicado foi enviado.';
//#endregion

describe ('COMUNICADOS', () => {

    beforeEach(() => {
        cy.aberturaDeSite()
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_correto)
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_correta)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        cy.wait(3000)
        Metodos.clicar(elementosMenu.botaoMenuGestao)
        cy.wait(100)
        Metodos.clicar(elementosMenu.botaoSubMenuComunicados)
        cy.wait(100)
        Metodos.clicar(elementosMenu.botaoOpcaoCriarComunicados)
        cy.wait(1000)
    })

    afterEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it('2.1 - PREENCHE TODOS OS CAMPOS OBRIGATÓRIOS E ENVIA O COMUNICADO COM SUCESSO', () => {
        Metodos.selecionarOpcaoPorTitulo(tituloCampoEstado, estadoSaoPaulo)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoBandeira, bandeiraMaestra)
        Metodos.selecionarOpcaoPorLoja(tituloCampoLoja, lojaMaestra)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoOcupacao, ocupacaoAnalista)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoColaborador, colaboradorSelecionar)
        Metodos.selecionarDataAmanha()
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.selecionarOpcaoPorDepartamento(tituloCampoDepartamento, departamentoAdmDigital)
        Metodos.escrever(elementosComunicados.escreverTituloComunicado, tituloComunicado)
        Metodos.anexarImagemDeCapa(anexarImagemDeCapa)
        cy.wait(3500)
        Metodos.validarTexto(elementosComunicados.toast, mensagemSucessoImagem)
        Metodos.clicar(elementosComunicados.botaoFecharToast)
        Metodos.escrever(elementosComunicados.escreverDescricao, tituloComunicado)
        Metodos.adicionarAnexo(adicionarAnexo1)
        //Metodos.clicar(elementosComunicados.botaoFecharToast)
        cy.wait(1000)
        Metodos.clicar(elementosComunicados.botaoEnviar)
        cy.wait(1000)
        Metodos.validarTexto(elementosComunicados.toast, mensagemSucessoEnvioComunicado)
    })

    it('2.2 - TENTAR ENVIAR COMUNICADO SEM SELECIONAR UM DEPARTAMENTO OU REALIZAR O UPLOAD DE UMA IMAGEM DE CAPA COM FORMATOS VÁLIDOS (PNG, JPEG, JPG)', () => {
        Metodos.selecionarOpcaoPorTitulo(tituloCampoEstado, estadoSaoPaulo)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoBandeira, bandeiraMaestra)
        Metodos.selecionarOpcaoPorLoja(tituloCampoLoja, lojaMaestra)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoOcupacao, ocupacaoAnalista)
        Metodos.selecionarOpcaoPorTitulo(tituloCampoColaborador, colaboradorSelecionar)
        Metodos.selecionarDataAmanha()
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.escrever(elementosComunicados.escreverTituloComunicado, tituloComunicado)
        Metodos.anexarImagemDeCapa(anexarImagemDeCapa)
        cy.wait(2800)
        Metodos.validarTexto(elementosComunicados.toast, mensagemSucessoImagem)
        Metodos.clicar(elementosComunicados.botaoFecharToast)
        Metodos.validarBotaoEnviarDesabilitado(elementosComunicados.botaoEnviar)
    })

    it('2.3 - VERIFICAR A FUNCIONALIDADE DO BOTÃO DE FECHAR E EXPANDIR A CAIXA DE CONTEÚDO E VALIDAR SE A CAIXA SE ADAPTA CORRETAMENTE AO SER FECHADA OU EXPANDIDA', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.validarTexto(elementosComunicados.preenchaTodosOsCampos, tituloCampoPreenchaTodosOsCampos)
        Metodos.clicar(elementosComunicados.botaoExpandir)
        cy.wait(100)
        Metodos.validarTextoNaoPresente(elementosComunicados.preenchaTodosOsCampos)
    })

    it('2.4 - SELECIONAR UM DEPARTAMENTO E VALIDAR SE A SELEÇÃO É REGISTRADA CORRETAMENTE', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.selecionarOpcaoPorDepartamento(tituloCampoDepartamento, departamentoAdmDigital)
        Metodos.validarTexto(elementosComunicados.conteudoSelecionadoNoDepartamento, departamentoAdmDigital)
    })

    it('2.5 - SELECIONAR TODOS OS DEPARTAMENTOS E VALIDAR SE AS SELEÇÕES ESTÃO REGISTRADAS CORRETAMENTE', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.clicar(elementosComunicados.botaoDepartamento)
        Metodos.clicar(elementosComunicados.botaoDepartamentoSelecionarTudo)
        Metodos.validarTexto(elementosComunicados.conteudoSelecionadoNoDepartamento, departamentoSelecionarTudo)
    })

    /*it('2.6 - REALIZAR UPLOAD DE IMAGEM DE CAPA COM TAMANHO SUPERIOR A 2MB E VERIFICAR AS DIMENSÕES MÍNIMAS RECOMENDADAS PARA A IMAGEM DE CAPA', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.anexarImagemDeCapa(anexarImagemDeCapaErro)
        cy.wait(2500)
        Metodos.validarTexto(elementosComunicados.toast, mensagemErroImagem)
        Metodos.clicar(elementosComunicados.botaoFecharToast)
        Metodos.anexarImagemDeCapa(anexarImagemDeCapaErro2MB)
        cy.wait(2500)
        Metodos.validarTexto(elementosComunicados.toast, mensagemErroImagem2MB)
    })

    it('2.7 - INSERIR UM TÍTULO DO COMUNICADO COM MAIS DE 100 CARACTERES E VERIFICAR MENSAGEM DE ERRO, ALÉM DE VALIDAR A CONTAGEM DE CARACTERES VISÍVEL NO CAMPO DE CONTEÚDO DO COMUNICADO', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.validarTexto(elementosComunicados.tituloCemCaracteres, tituloCemCaracteres)
        Metodos.escreverSemValidar(elementosComunicados.escreverTituloComunicado, tituloComunicado150Caracteres)
        Metodos.validarTexto(elementosComunicados.tituloCemCaracteres, tituloZeroCaracteres)
        Metodos.validarTextoPorValor(elementosComunicados.escreverTituloComunicado, tituloComunicado100Caracteres)
    })

    it('2.8 -  INSERIR CONTEÚDO DO COMUNICADO COM MAIS DE 2000 CARACTERES E VERIFICAR MENSAGEM DE ERRO', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.validarTexto(elementosComunicados.tituloDoisMilCaracteres, tituloDoisMilCaracteres)
        Metodos.escreverSemValidar(elementosComunicados.escreverDescricao, tituloDescricao2500Caracteres)
        Metodos.validarTexto(elementosComunicados.tituloDoisMilCaracteres, tituloZeroCaracteres)
        Metodos.validarTextoPorValor(elementosComunicados.escreverDescricao, tituloDescricao2000Caracteres)
    })

    it('2.9 - REALIZAR MÚLTIPLOS UPLOADS DE ANEXOS E VERIFICAR SE TODOS SÃO REGISTRADOS CORRETAMENTE', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.adicionarAnexo(adicionarAnexo1)
        Metodos.adicionarAnexo(adicionarAnexo2)
        Metodos.adicionarAnexo(adicionarAnexo3)
        Metodos.adicionarAnexo(adicionarAnexo4)
        Metodos.adicionarAnexo(adicionarAnexo5)
        Metodos.validarTexto(elementosComunicados.tituloAnexo1, adicionarAnexo1)
        Metodos.validarTexto(elementosComunicados.tituloAnexo2, adicionarAnexo2)
        Metodos.validarTexto(elementosComunicados.tituloAnexo3, adicionarAnexo3)
        Metodos.validarTexto(elementosComunicados.tituloAnexo4, adicionarAnexo4)
        Metodos.validarTexto(elementosComunicados.tituloAnexo5, adicionarAnexo5)
    })

    it('2.10 - TENTAR ANEXAR ARQUIVOS COM FORMATOS INVÁLIDOS E VERIFICAR MENSAGENS DE ERRO', () => {
        Metodos.clicar(elementosComunicados.botaoExpandir)
        Metodos.anexarImagemDeCapa(anexarImagemDeCapaPDF)
        cy.wait(2500)
        Metodos.validarTexto(elementosComunicados.toast, mensagemErroImagemPDF)
    })*/



})