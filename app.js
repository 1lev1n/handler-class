const { login } = new (require("./src/Client"))({fetchAllMembers: true}); // Puxando a classe Client com a propriedade 'login' do cliente do discordjs

login('token'); // Logando na conta
// Já vai executar os métodos 'addCommands()' e 'addEvents()'
