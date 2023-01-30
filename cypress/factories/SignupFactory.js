var faker = require ('faker')

 export default {

    deliver: function() {
        
        var firstName = faker.nome.firstName()
        var lastName = faker.nome.lastName()

        var data = {
            nome: '${firstName} ${lastName}',
                cpf: '12333355505',
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