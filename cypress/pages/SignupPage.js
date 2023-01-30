

class SignupPage {
    
    go(){
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')

        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text',  'Cadastre-se para  fazer entregas')   
    }

    filform(deliver){
        cy.get('input[name="fullName"]').type(deliver.nome,{parseSpecialCharSequences: false})
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.endereco.numero)
        cy.get('input[name="address-details"]').type(deliver.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', deliver.endereco.rua)
        cy.get('input[name="district"]').should('have.value', deliver.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', deliver.endereco.cidade_uf)

        cy.contains('.delivery-method li', deliver.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContaintShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container')
                .should('have.text', expectedMessage)
    }

    alertExpectedMessage(texto_erro){
        cy.get('.alert-error').should('have.text', texto_erro)
    }

}

export default new SignupPage;

