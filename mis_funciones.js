function togle_dark_light(){  
    /** toglea la pantalla en modo oscuro y luminoso con un switch */  
    var switchStatus = false;
        $("#togBtn").on('change', function() {
            if ($(this).is(':checked')) {
              switchStatus = $(this).is(':checked');
              document.documentElement.setAttribute('data-bs-theme','dark')
              document.getElementById("hoja").style.backgroundColor = "black";
              document.getElementById("direcciones").style.backgroundColor  = "#033C1A";
              document.getElementById("direcciones2").style.backgroundColor = "#033C1A";
            }
            else {
              switchStatus = $(this).is(':checked');
              document.documentElement.setAttribute('data-bs-theme','light')
              document.getElementById("hoja").style.backgroundColor = "white";
              document.getElementById("direcciones").style.backgroundColor  = "#00f5dc";
              document.getElementById("direcciones2").style.backgroundColor = "#00f5dc";
            }
        });  
}

function relleno_en_miModal(){
    /** Rellena el texto que va en el modal de mensaje */
    const miModal = document.getElementById('miModal')
    miModal.addEventListener('show.bs.modal', event => {
    const recipient = document.getElementById("email").textContent
    const modalTitle = miModal.querySelector('.modal-title')
    const modalBodyInput = miModal.querySelector('.modal-body input')                                    
    modalTitle.textContent = "Mandar Mensaje"
    modalBodyInput.value = recipient
    })
}


function obtener_datos_deJson() {
    /* obtiene datos de ramdon user de un arbol JSON*/
      $.ajax({
          url: 'https://randomuser.me/api/',dataType: 'json',success: function(data) {
            console.log(data.results[0]);
            let nom = data.results[0].name.first;
            let ape = data.results[0].name.last;
            let calle = data.results[0].location.street.name;
            let num = data.results[0].location.street.number;
            let ciu = data.results[0].location.city;
            let stt = data.results[0].location.state;
            let ctry = data.results[0].location.country;
            document.getElementById("nom_y_ap").innerHTML=nom+" "+ape;
            document.getElementById("email").innerHTML=data.results[0].email;
            document.getElementById("calle_y_num").innerHTML=calle+" "+num;
            document.getElementById("ciudad_y_estado").innerHTML=ciu+", "+stt;
            document.getElementById("pais").innerHTML=ctry;
            document.getElementById("celu").innerHTML=data.results[0].cell;
            document.getElementById("foto").src = data.results[0].picture.large;
            /**texto en direcciones 2 */
            document.getElementById("email2").innerHTML=data.results[0].email;
            document.getElementById("calle_y_num2").innerHTML=calle+" "+num;
            document.getElementById("ciudad_y_estado2").innerHTML=ciu+", "+stt;
            document.getElementById("pais2").innerHTML=ctry;
            document.getElementById("celu2").innerHTML=data.results[0].cell;
          }
      });
  }