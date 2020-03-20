window.onload = function() {
  let productos = [
      {
          prod_id:1,
          prod_nom:'Papel Higienico',
          prod_desc:'Producto muy cotizado',
          prod_price:3,
          prod_img:"https://picsum.photos/200"
      },
      {
          prod_id:2,
          prod_nom:'Jabón',
          prod_desc:'Lavense las manos por más de 20 segundos',
          prod_price:4,
          prod_img:"https://picsum.photos/200"
      }
  ]

  var btnData = document.getElementById("data");
  var tbody = document.getElementById("tbody");
  var inputBuscar = document.getElementById("buscar");

  function rellenarCeldas(arregloProductos) {
    // tendrá codigo HTML eventualmente
    let tr = "";

    tbody.innerHTML = "";


    //forEach va a recorrer todo mi arreglo y por cada elemento ejecutara la funcion que yo le de recibiendo en su función cada elemento
    arregloProductos.forEach(function(producto) {

      tr =
        tr +
        `<tr>
                           <td>${producto.prod_id}</td>
                           <td>${producto.prod_nom}</td>
                           <td>${producto.prod_desc}</td>
                           <td>${producto.prod_price}</td>
                           <td><img src=${producto.prod_img}/></td>
                        </tr>`;
    });
    
    tbody.innerHTML = tr;
  }
  rellenarCeldas(productos);

  // cuando mi usuario termine de presionar una tecla en el input
  inputBuscar.onkeyup = function(event) {
    console.log(event.target.value);

    let filtro = this.value;

    let filtrado = productos.filter(function(producto) {
      console.log(toString(producto.prod_nom));

      // devuelve un arreglo ya filtrado
      return producto.prod_nom.toLowerCase().includes(filtro.toLowerCase());
    });

    rellenarCeldas(filtrado);
  };

  btnData.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();

    console.log(xhr);

    xhr.onreadystatechange = function() {
      switch (xhr.readyState) {
        case 1:
          console.log("se ha ejecutado la función open()");
          break;
        case 2:
          console.log("se ha disparado una petición http");
          break;
        case 3:
          console.log("ya estamos descargando los datos");
          break;
        case 4:
          console.log("ya tenemos los datos, la operación terminó");
          // tengo un string y lo convierto a objeto
          var json = JSON.parse(xhr.responseText);
        console.log(json)
        productos = json;
          rellenarCeldas(json);
          break;
      }
    };

    xhr.open("GET","https://5e22b9e7afee990014e59669.mockapi.io/productos");

    xhr.send(null);
  });
};
