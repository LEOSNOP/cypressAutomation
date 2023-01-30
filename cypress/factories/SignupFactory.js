var faker = require ('faker')
var cpf = require('gerador-validador-cpf')
 export default {

    deliver: function() {
        
        var firstName = faker.nome.firstName()
        var lastName = faker.nome.lastName()

        var data = {
            nome: '${firstName} ${lastName}',
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
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
                cnh: 'cnh_gratuita.jpg'
        }

        return data
    }


 }