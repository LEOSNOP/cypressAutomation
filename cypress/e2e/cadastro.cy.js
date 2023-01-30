import signup from "../pages/SignupPage"
import signupFactory from "../factories/SignupFactory"

describe('Cadastro', () => {

    /*beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    });*/

    it('Usuario deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go()
        signup.filform(deliver)
        signup.submit()
        signup.modalContaintShouldBe(expectedMessage)

    });

    it('Cpf incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '00000141aa'

        const texto_erro = 'Oops! CPF inválido'

        signup.go()
        signup.filform(deliver)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)

    });

    it('Email incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        const texto_erro = 'Oops! Email com formato invalido.'

        signup.go()
        signup.filform(deliver)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)
    });

    context('Campo fazio', function () {

        const mensagens = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o numero do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it('${msg.field} is required', function(){
                signupPage.alertExpectedMessage(msg.output)
            })
        })

    })


});