import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf'

 export default {

    deliver: function() {
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: firstName+" "+lastName,
                cpf: generate(),
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
                metodo_entrega: 'Bike Elétrica',
                cnh: 'cnh_gratuita.jpg'
        }

        return data
    }


 }