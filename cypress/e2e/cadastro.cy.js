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

        const texto_erro = 'Oops! Email com formato inválido.'

        signup.go()
        signup.filform(deliver)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)
    });

    context('Campo fazio', function () {

        beforeEach(function () {
            signup.go()
            signup.submit()
        })

        const mensagens = [
            { campo: 'name', output: 'É necessário informar o nome' },
            { campo: 'cpf', output: 'É necessário informar o CPF' },
            { campo: 'email', output: 'É necessário informar o email' },
            { campo: 'postalcode', output: 'É necessário informar o CEP' },
            { campo: 'number', output: 'É necessário informar o número do endereço' },
            { campo: 'delivery_method', output: 'Selecione o método de entrega' },
            { campo: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]



        mensagens.forEach(function (msg) {
            it(`${msg.campo} is required`, function () {
                signup.alertExpectedMessage(msg.output)
            })
        })

    })


});