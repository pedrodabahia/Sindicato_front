document.getElementById('btn-form').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('input-name').value;
    const matriz = document.getElementById('input-namber').value;
    const cpf = document.getElementById('input-cpf').value;

    const resultado = await cadastrar(nome, matriz, cpf);
    console.log("Resultado da requisição:", resultado);
});

async function cadastrar(nome, matriz, cpf) {
  const apiUrl = "https://sindicato-back.onrender.com/usuarios";
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
      return "Deu certo";
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
