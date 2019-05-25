const { Client, Collection } = require("discord.js"),
      { readdirSync } = require("fs"),
      { basename } = require("path");

// Pegar as propriedades Client, Collection, readdirSync, basename das livrarias acima

module.exports = class extends Client { // Exportando uma classe extendendo o Cliente do discord.js
    constructor() {
        super(); // Sempre quando extender uma classe colocar o super
        // Nunca deve ser depois de definir as child-classes

        this.cmds = new Collection();
        this.prefix = ['!', '?'];

        /*
        * Definindo child-classes
        */

        this.addCommands();
        this.addEvents();

        // Executando os métodos
    }

    addCommands(dir = './src/commands/') { // Definir o método addCommands() com o parâmetro 'dir'
        readdirSync(dir).forEach((file) => { // Percorrer a tree até a 'dir'

            // let declara uma variável de escopo no bloco atual

            let Command = new (require(dir+file))(this),
                commandName = basename(file, '.js');

            // Declarando variáveis

            return this.cmds.set(commandName, Command) // Puxar os dados para a coleção 'cmds'
        })
    }

    addEvents(dir = './src/listeners/') { // Definir o método addEvents() com o parâmetro 'dir'
        readdirSync(dir).forEach((file) => { // Percorrer a tree até a 'dir'
    
            let event = require(dir+file),
                eventName = basename(file, '.js');

            // Declarando variáveis

            return this.on(eventName, event); // Quando ocorrer o evento 'eventName' executar 'event'
        })
    }

    getCommand(id) { return this.cmds.find((cmd) => cmd.name == id || cmd.aliases == id); } // Associando uma propriedade da classe filha(child-class)(cmds) á getCommand('id')

}
