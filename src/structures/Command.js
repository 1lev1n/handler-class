module.exports = class { // Criando uma nova classe
    constructor(client) { // Com o parâmetro 'client' que seria a variável Command do Client.js: new (require(...))(this = client), puxando as propriedades do cliente do discord.js
        this.admOnly = false; // declarando a child-class admOnly
        this.client = client; // declarando o child-class do cliente
    }

    process(message, args) { // Criando o processo
        if (this.admOnly && message.author.id !== 'seu id') { // Verificando se a classe filha está verdadeira e o id do autor da mensagem não é 'id'
            return message.channel.send('Você não tem permissão!'); // Mandando a mensagem
        }

        return this.run(message, args);
    }

    run() {}
}
