async function cotacao(valor) {
  const chave = "551a612128-2b15026332-t0cab5";
  const url = `https://api.fastforex.io/convert?from=USD&to=BRL&amount=${valor}&api_key=${chave}`;

  try {
    const dados = await fetch(url);
    const reponse = await dados.json();
    
    console.log("a conversão de ", reponse.amount ,"Reais", "em USD, equivale a: ", reponse.result.BRL);
  } catch (error) {
    console.log("erro", error);
  }
}

cotacao(100);
