$(document).ready(function(){
  
  

  function borderRed(){ 
    //verifica se o inpu ta vazio, caso esteja, muda a cor da borda e da um hide no span  
    $('input').each((index,element) => {

    $(element).focus().keydown(function(){
      if($('input').eq(index).val() != ''){  
      $(element).css('border-color','rgb(	91, 23, 130)');
      $(element).css('border-color','rgb(119, 110, 124)');
      $('span.'+element.className).hide();
    }})
    
    if($('input').eq(index).val() == ''){
      $('span.'+element.className).show();
     $(element).css('border-color','red');
     console.log(element.className);
    }})  
  }

   //mascaraInputNamber()  
    //formata o input namber quando o usuario começa a digitar
    $("#btn-form").click(async function(e){
      e.preventDefault();

        var name = $('#input-name').val()
        var numero = $('#input-namber').val()
        var cpf = $('#input-cpf').val()

      const result = await verificador(numero);
      console.log(result);

if(result){

       name = tranformaTexto(name)


if(name == '' || numero == '' || cpf == ''){
  borderRed()
  
  }else{
        $('#matricula-card').text("Mat: "+numero)
        $('#nome-card').text(name)
        $('#cpf-card').text("CPF: "+cpf)
        $('.formulario-card').hide()
        $('.complate-state').show()
        e.preventDefault();
        }
        
      }else{
        alert("deu ruim demais pedo")
    }
      });

  /*  $('#btnOpen').click(() => {
      //recarrega a pagina
        $('.complate-state').hide();
        location.reload();

    })*/


  });
