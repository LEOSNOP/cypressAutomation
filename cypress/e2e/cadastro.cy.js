import signup from "../pages/SignupPage"

describe('Cadastro', ()=>{

    beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    });

    it('Usuario deve se tornar um entregador', function() {
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.filform(this.deliver.signup)
        signup.submit()
        signup.modalContaintShouldBe(expectedMessage)

    });

    it('Cpf incorreto', function() {
        
        const texto_erro = 'Oops! CPF inválido'

        signup.go()
        signup.filform(this.deliver.cpf_inv)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)

    });

    it('Email incorreto', function() {
        const texto_erro = 'Oops! Email com formato invalido.'

        signup.go()
        signup.filform(this.deliver.email_inv)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)
    });
    
});