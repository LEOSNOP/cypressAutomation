

 export default {

    deliver: function() {
        
        var data = {
            nome: 'Leon',
                cpf: '12333355505',
                email: 'leon.sora@gmail.com',
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