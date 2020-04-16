window.onload = function() {
  let btnData = document.getElementById("getData");
  let btnCrear = document.getElementById("createProducto");
  var tarjetas = document.getElementById("tarjetas");

  function imprimirTarjetas(productos) {
    productos.forEach(function(tarj) {
      let tarjeta = document.createElement("div");
      let contenidoTarjeta = `<div class="card" style="width: 18rem;">
                                    <img src='${tarj.prod_img}'class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${tarj.prod_nom}</h5>
                                        <p class="card-text" >
                                            ${tarj.prod_desc}
                                            <br/>
                                            ${tarj.prod_price}
                                        </p>
                                        
                                    </div>
                                </div>`;
      tarjeta.innerHTML = contenidoTarjeta;
      tarjetas.appendChild(tarjeta);
    });
  }

  btnCrear.addEventListener("click",function(){
      let objProducto = new Producto("patata","carbohidrato",50,"https://picsum.photos/200");
    //   console.log(objProducto);

      let xhr = new XMLHttpRequest();
    
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
          let json = JSON.parse(xhr.responseText);
          console.log("productoCreado",json);
          break;
      }
    };

    xhr.open("POST", "https://5e22b9e7afee990014e59669.mockapi.io/productos");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(JSON.stringify(objProducto));
  })

  btnData.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();

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
          let json = JSON.parse(xhr.responseText);
          console.log(json);
          imprimirTarjetas(json);
          break;
      }
    };

    xhr.open("GET", "https://5e22b9e7afee990014e59669.mockapi.io/productos");

    xhr.send(null);
  });
};
