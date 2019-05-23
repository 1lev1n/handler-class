const Command = require("../structures/Command");

module.exports = class extends Command { // Criando uma classe extendida
    constructor(client) { // Sempre colocar o client de parâmetro, para pegar a propriedade do cliente
        super(client); // Por causa do extends

        this.name = "ping"; // Declarar o nome do comando
        this.aliases = "latency" // Declarar os atalhos do comando
    }

    run(message, args) { // Criando o método 'run(message, args)'
        return message.channel.send(`${this.client.ping}ms`) // Enviar uma mensagem pegando o ping da api
    }
}
