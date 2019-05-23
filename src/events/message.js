module.exports = function onMessage(message) {
    let prefix = Array.isArray(this.prefix) /*Caso for Array*/ ? this.prefix.find((p) => message.content.startsWith(p)) /*Encontrar o prefixo que corresponde ao inicio da mensagem*/ : /*Caso não for Array*/ this.prefix,
        prox = !message.author.bot /*Caso não for bot*/ && /*,*/ message.guild /*Ter guild*/ && /*e*/ prefix;

    // Declarando variáveis

    if (prox) { // Caso prox for verdadeiro
        let args = message.content.slice(prefix.length).split(/ +/g), // declarando a variável 'args' ignorando o inicio da mensagem(prefixo)
            cmd = this.getCommand(args[0]); // Chamando o método 'getCommand('id')' com o parâmetro args[0] que é correspondente á parte do comando

        if (cmd) {
            return cmd.process(message, args.slice(1)); // Processando o comando com os parâmetros 'message' e 'args.slice(1)'
            // args.slice(1) vai ignorar o comando
        }        
    }

}
