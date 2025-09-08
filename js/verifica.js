		async function verificador(matricula) {

  const msg = document.getElementById("mensagemStatus");
  const apiUrl = "https://sindicato-back.onrender.com/usuarios/listar";
  const username = 'pedro';
  const password = 1234;
  const matrix = parseInt(matricula?.toString().trim(), 10);
  const headers = new Headers();


  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

  try {
    const response = await fetch(apiUrl, { method: 'GET', headers: headers });
  
    if (!response.ok) throw new Error("Erro na requisição");

    const data = await response.json();
    const verificarMatriz = data.some(dados => {
    
    msg.innerText = "servidor verificado com sucesso!";
    msg.style.display = "block";

    setTimeout(() => {console.log("rodando delay");},"3000");
    
    msg.style.display = "none";
    return parseInt(dados.matriz) === matrix;
    
    });

    return verificarMatriz;
  } catch (error) {
    
    msg.style.backgroundColor = "red";
    msg.innerText = "numero de matricula não encontrado!";  
    console.log("erro ao buscar usuarios: " + error);
  }
}
