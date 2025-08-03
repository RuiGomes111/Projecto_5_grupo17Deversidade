//Feito por: Manu Melo Nascimento
const readline = require("readline");


//Feito por: Gustavo Valladares
async function cotacao(valor) {
  const chave = "551a612128-2b15026332-t0cab5";
  const url = `https://api.fastforex.io/convert?from=USD&to=BRL&amount=${valor}&api_key=${chave}`;
//Feito por: Rui Miguel Neves Gomes
  try {
    const dados = await fetch(url);
    const reponse = await dados.json();
    
    console.log( reponse.amount ,"Reais", " = ", reponse.result.BRL, "USD");
//Feito por: Maria Vitória Florêncio da Costa
  } catch (error) {
    console.log("erro", error);
  }
}

//Feito por: Lorena Scheppa Gurgel
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//feito por: Maíra Kaminski
rl.question("Digite o valor em USD para converter em BRL: ", (input) => {
  const valor= parseFloat(input)
  
    cotacao(valor).finally(() => rl.close());
  
  
});




