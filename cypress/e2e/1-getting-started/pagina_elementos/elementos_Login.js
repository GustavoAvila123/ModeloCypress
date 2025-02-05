export const elementosLogin = {

    //#region ESCREVER
    insiraSeuCPF: ('[formcontrolname="cpf"] .form-input-text'),
    insiraSuaSenha: ('[formcontrolname="password"] .form-input-text'),
    //#endregion

    //#region BOTÕES
    botaoFazerLogin: ('.ng-tns-c44-0 > .btn'),
    botaoFazerLoginDesabilitado: ('.ng-star-inserted.ng-touched > :nth-child(3) > .ng-tns-c44-0'),
    botaoFazerLoginDesabilitadoSemPreenchimento: ('.ng-untouched.ng-star-inserted > :nth-child(3) > .ng-tns-c44-0'),
    //#endregion

    //#region TÍTULOS
    tituloAmbienteLogin: ('h6'),
    //#endregion


}
export default elementosLogin;