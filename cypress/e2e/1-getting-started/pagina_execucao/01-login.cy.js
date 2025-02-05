import Metodos from "../pagina_acao/metodos.js"
import elementosLogin from "../pagina_elementos/elementos_Login.js"
import Usuario from "../../../fixtures/usuario.js"
import elementosHome from "../pagina_elementos/elementos_Home.js"

//#region VARIÁVEIS
const TituloHome = 'Olá, Inovação';
const TituloAmbienteLogin = 'ATENÇÃO É O AMBIENTE DE HOMOLOGAÇÃO';
const TituloAmbiente = 'ATENÇÃO! AMBIENTE DE EXECUÇÃO DE DESENVOLVIMENTO';

const MensagemFalhaNaAutenticacao = 'Falha na autenticação. CPF ou senha incorretos';
//#endregion

describe ('LOGIN', () => {

    beforeEach(() => {
        cy.aberturaDeSite()
    })

    it('1.1 - Login efetuado com Sucesso', () => {
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_correto)
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_correta)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarTexto(elementosHome.tituloHome, TituloHome)
        Metodos.validarTexto(elementosHome.tituloAmbiente, TituloAmbiente)
    })

    it('1.2 - Login com usuário não cadastrado', () => {
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_errado)
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_errada)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarTexto(elementosHome.mensagemFalhaNaAutenticacao, MensagemFalhaNaAutenticacao)
    })

    it('1.3 - Login com senha inválida', () => {
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_correto)
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_errada)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarTexto(elementosHome.mensagemFalhaNaAutenticacao, MensagemFalhaNaAutenticacao)
    })

    it('1.4 - Login sem preencher usuário', () => {
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_correta)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarBotaoDesabilitado(elementosLogin.botaoFazerLoginDesabilitado)
    })

    it('1.5 - Login sem preencher a senha', () => {
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_correto)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarBotaoDesabilitado(elementosLogin.botaoFazerLoginDesabilitado)
    })

    it('1.6 - Login sem preencher o usuário e a senha', () => {
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.validarBotaoDesabilitado(elementosLogin.botaoFazerLoginDesabilitadoSemPreenchimento)
    })

    it('1.7 - Login com o usuário bloqueado/inativo', () => {
        Metodos.escrever(elementosLogin.insiraSeuCPF, Usuario.usuario_bloqueado_inativo)
        Metodos.escrever(elementosLogin.insiraSuaSenha, Usuario.senha_correta)
        Metodos.validarTexto(elementosLogin.tituloAmbienteLogin, TituloAmbienteLogin)
        Metodos.clicar(elementosLogin.botaoFazerLogin)
        Metodos.validarTexto(elementosHome.mensagemFalhaNaAutenticacao, MensagemFalhaNaAutenticacao)
    })


})