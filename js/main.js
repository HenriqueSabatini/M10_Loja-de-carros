// aqui criamos para que o carrossel comece assim que a pagina abrir//
$(document).ready(function(){
    $('#carrossel-imagens').slick({ //função slick de carrossel, para as imagems serem arrastadas uma ao lado da outra e ultrapassar o tamanho da pagina
        autoplay: true, //aqui colocamos o autoplay para as imagens do carrossel passarem sozinhas
    });

    $('.menu-hamburguer').click(function(){ //aqui definimos que ao clicar no menu hamburguer os links <nav> vao aparecer
        $('nav').slideToggle(); //usamos a tag slideToggle para o menu fazer a função de subir e descer 
    })

    $('#telefone').mask('(00) 00000-0000',{ //aqui colocamos a mascara do pluing para o usuario respeitar o formato no formulario
        placeholder: '(__) _____-____'
    })
    //exemplos de mask para campos de data ou placa (no plugin numero são representados por "0" e letras por "s")
    // $('#telefone').mask('00/00/0000', {
    //  placeholder: '__/__/____'
    //}) **nesse cad]so dentro do campo data iria ficar o modo de como queremos que o usuario digite

    $('form').validate({ //aqui o codigo ativa outro plugin que mostra uma mensagem no campo obrigatorio do formulario (form)
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoDeInteresse: {
                required: true
            }                    
        },
        messages:{ //aqui definimos as mensagens obrigatorias em casa campo
            nome: 'Por favor, insira seu nome'
        }, //abaixo vamos adicionar um pop-up para o usuario mostrando quantos campos estao incorretos no formulario
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    //aqui criamos a função de quando clicar em qualquer botao de "interesse" a pagina rola até o top do formulario de preenchimento
    $('.lista-veiculos button').click(function(){ //qualquer botao da lista de veiculos a venda
        const destino = $('#contato'); //section contato

        //aqui vamos criar um 'this' para quando clica no botao o nome do veiculo ja preenche sozinho no campo do formulario
        const nomeVeiculo = $(this).parent().find('h3').text(); //criamos a contante para buscar (find) o h3 do li
        $('#veiculo-interesse').val(nomeVeiculo); //campo que vai ser preenchido o valor

        $('html').animate({ //animação de rolar a pagina
            scrollTop: destino.offset().top
        }, 500) //tempo de rolagem em milisegundo 1s = 1000
    })
})