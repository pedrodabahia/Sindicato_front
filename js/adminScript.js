document.getElementById('btn-form').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('input-name').value;
    const matriz = document.getElementById('input-namber').value;
    const cpf = document.getElementById('input-cpf').value;
    const msg = document.getElementById('mensagemStatus');

    const resultado = await cadastrar(nome, matriz, cpf);

    console.log(resultado)

    if (resultado == true){
        msg.innerText = "servidor verificado com sucesso!";
        msg.style.opacity = 1;
        setTimeout(() => {
          console.log("rodando delay");
          msg.style.opacity = 0;
      },3000);
    }else{

        msg.style.backgroundColor = "red"; 
        msg.innerText = "numero de matricula não encontrado!";
        msg.style.opacity = 1;
        setTimeout(() => {
          console.log("rodando delay");
          msg.style.opacity = 0;  
        },3000);
    }
    console.log("Resultado da requisição:", resultado);
});

async function cadastrar(nome, matriz, cpf) {
  const apiUrl = "https://sindicato-back-7z84.onrender.com/usuarios";
  const username = 'pedro';
  const password = "1234"; // precisa ser string

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
  headers.set('Content-Type', 'application/json');

  const corpo = { nome, matriz, cpf };

  try {
    const response = await fetch(apiUrl, { 
      method: 'POST', 
      headers: headers, 
      body: JSON.stringify(corpo)
    });

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // tenta ler o corpo como texto
    const text = await response.text();

    // se o corpo for vazio -> retorna null
    if (!text) {
      console.log(text)
      return true;
    }

    // tenta converter pra JSON
    try {
      return JSON.parse(text);
    } catch {
      // se não for JSON válido, retorna como texto puro
      return text;
    }

  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
  }
}
