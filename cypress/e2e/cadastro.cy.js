import signup from "../pages/SignupPage"

describe('Cadastro', ()=>{

    it('Usuario deve se tornar um entregador', ()=> {
        

        var entregador = {
            nome: 'Leon',
            cpf: '12333355505',
            email: "kuuhaku99.sora@gmail.com",
            whatsapp: '11984637897',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'apt 141',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Bicicleta',
            cnh : 'cnh_gratuita.jpg'
        }

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
       

        signup.go()
        signup.filform(entregador)
        signup.submit()
        signup.modalContaintShouldBe(expectedMessage)

    });

    it('Cpf incorreto', ()=> {
        
        var entregador = {
            nome: 'Leon',
            cpf: '1233335r5a8',
            email: "kuuhaku99.sora@gmail.com",
            whatsapp: '11984637897',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'apt 141',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Bicicleta',
            cnh : 'cnh_gratuita.jpg'
        }

        const texto_erro = 'Oops! CPF inválido'

        

        signup.go()
        signup.filform(entregador)
        signup.submit()
        signup.alertExpectedMessage(texto_erro)

    });
});