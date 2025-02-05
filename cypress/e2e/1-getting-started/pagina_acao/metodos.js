export class Metodos {

    //#region METODO ABERTURA DE SITE
    static aberturaDeSite() {
        cy.fixture('example.json').then((site) => {
            cy.visit(site.urlRadarStage, { failOnStatusCode: false });
        })
    }
    //#endregion

    //#region METODOS PARA ESCREVER
    static escrever(elemento, texto) {
        cy.get(elemento).type(texto, { force: true }).should('have.value', texto)
    }

    static escreverSemValidar(elemento, texto) {
        cy.get(elemento).type(texto, { force: true })
    }
    //#endregion

    //#region METODOS PARA CLICAR
    static clicar(elemento) {
        cy.get(elemento, { timeout: 20000 }).wait(500).click({ force: true })
    }
    //#endregion

    //#region METODOS DE VALIDAÇÃO
    static validarTexto(elemento, titulo) {
        cy.get(elemento, { timeout: 10000 })
            .invoke('text').then((texto) => {
                cy.log(`**Texto encontrado:** "${texto.trim()}"`);
                cy.log(`**Texto esperado:** "${titulo}"`);
                expect(texto.includes(titulo),
                    `Esperado que o texto "${texto.trim()}" inclua "${titulo}"`
                ).to.be.true;
            });
    }

    static validarTextoPorValor(elemento, titulo) {
        cy.get(elemento, { timeout: 10000 })
            .invoke('val').then((texto) => {
                cy.log(`**Texto encontrado:** "${texto.trim()}"`);
                cy.log(`**Texto esperado:** "${titulo}"`);
                expect(texto.includes(titulo),
                    `Esperado que o texto "${texto.trim()}" inclua "${titulo}"`
                ).to.be.true;
            });
    }

    static validarBotaoDesabilitado(seletor) {
        cy.get(`${seletor} button`)
            .should('be.disabled');
    }

    static validarBotaoEnviarDesabilitado(elemento) {
        cy.get(elemento)
            .should('be.disabled');
    }

    static validarTextoNaoPresente(elemento) {
        cy.get(elemento)
            .should('not.exist');
    }
    //#endregion

    //#region METODOS PARA SELECIONAR
    static selecionarOpcaoPorTitulo(titulo, opcaoTexto) {
        cy.contains('.title', titulo)
            .closest('.col-6')
            .find('.dropdown-container')
            .click({ force: true });

        cy.contains('.select-item-text', opcaoTexto, { timeout: 10000 }).click({ force: true });

        cy.log(`A opção "${opcaoTexto}" foi selecionada no campo "${titulo}".`);
    }

    static selecionarOpcaoPorLoja(titulo, opcaoTexto) {
        cy.contains('.title', titulo)
            .closest('.col-12')
            .find('.dropdown-container')
            .click({ force: true });

        cy.contains('.select-item-text', opcaoTexto, { timeout: 10000 }).click({ force: true });

        cy.log(`A opção "${opcaoTexto}" foi selecionada no campo "${titulo}".`);
    }

    static selecionarDataAmanha() {
        const hoje = new Date();
        const amanha = new Date(hoje);
        amanha.setDate(hoje.getDate() + 1);

        const diaAmanha = amanha.getDate();
        const mesAmanha = amanha.getMonth() + 1;
        const anoAmanha = amanha.getFullYear();

        cy.get('.input-text > lucide-icon').click({ force: true });

        cy.get('.datepicker')
            .should('exist')
            .and('be.visible');

        cy.get('.datepicker-body button').should('be.visible');

        cy.contains('.datepicker-body button', diaAmanha.toString())
            .should('be.visible')
            .click({ force: true });

        cy.get('.datepicker-header')
            .should('contain', mesAmanha.toString())
            .and('contain', anoAmanha.toString());

        cy.get('.datepicker-footer .btn-primary')
            .should('not.be.disabled')
            .click({ force: true });
    }

    static selecionarOpcaoPorDepartamento(titulo, opcaoTexto) {
        cy.contains('.title', titulo, { timeout: 10000 })
            .should('be.visible');

        cy.get('#ngb-panel-1 > .accordion-body > .accordion-content > .pl-8 > :nth-child(1) > .ng-tns-c1427940433-14 > :nth-child(1) > app-filter-dropdown > .position-relative > .dropdown-container > .dropdown-content > .dropdown-content-value', { timeout: 15000 })
            .should('be.visible')
            .click({ force: true });

        cy.contains('.select-item-text', opcaoTexto, { timeout: 10000 })
            .should('be.visible')
            .click({ force: true });

        cy.log(`A opção "${opcaoTexto}" foi selecionada no campo "${titulo}".`);
    }
    //#endregion

    //#region METODOS PARA ANEXAR
    static anexarImagemDeCapa(imagem) {
        cy.get('input[type="file"]', { timeout: 20000 })
            .eq(0)
            .selectFile(`cypress/fixtures/${imagem}`, { force: true });
    }

    static adicionarAnexo(imagem) {
        cy.get('button.add-attachment-button')
            .click();

        cy.get('input[type="file"]', { timeout: 20000 })
            .eq(1)
            .selectFile(`cypress/fixtures/${imagem}`, { force: true })
    }
    //#endregion




}
export default Metodos;