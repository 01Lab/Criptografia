// usando nodejs para criptografar 

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                              // mensagem aqui em baixo
                   .update('Tente descobrir se for capaz seu')
                   .digest('hex');
console.log(hash);

// imprimindo 
// carregando...
//aqui está sua mensagem
// cd3046921599d7e5aa6f61bbe6560bb748cc3c4a67d8d11816a66d6e45e0663e


const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('md5', secret)
                   .update('Tente descobrir se for capaz seu')
                   .digest('hex');
console.log(hash);

// imprimindo 
// carregando...
//aqui está sua mensagem
// 4334d64e25c0934e6f36de1b3c638e03
