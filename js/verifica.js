		async function verificador(matriculaCliente,cpfCliente) {

  const msg = document.getElementById("mensagemStatus");
  const apiUrl = "https://sindicato-back.onrender.com/usuarios/listar";
  const username = 'pedro';
  const password = 1234;
  const matrix = parseInt(matriculaCliente?.toString().trim(), 10);
  const cpf = parseInt(cpfCliente?.toString().trim(), 10);
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
    const matriz = parseInt(dados.matriz);
    const cpf = parseInt(dados.cpf);

    if(matriz == matriculaCliente && cpf == cpfCliente){
      return true
    }else{
      return false
    }
    }); 

    return verificarMatriz;
  } catch (error) {
    
    msg.style.backgroundColor = "red";
    msg.innerText = "numero de matricula não encontrado!";  
    console.log("erro ao buscar usuarios: " + error);
  }
}
  