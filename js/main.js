
function consultaCep(){
    $(".barraProgresso").show();
    var cep = document.getElementById("cep").value
    var url = "https://viacep.com.br/ws/"+ cep +"/json/"
    console.log(cep)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

            /*
            document.getElementById("logradouro").innerHTML = response.logradouro
            document.getElementById("bairro").innerHTML = response.bairro
            document.getElementById("localidade").innerHTML = response.localidade
            document.getElementById("uf").innerHTML = response.uf
            */

            $("#tituloCep").html("CEP " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
            $(".barraProgresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barraProgresso").hide();
});


