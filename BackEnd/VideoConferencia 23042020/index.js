window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCPgZ4CXE9yhtM0rqJAbwl0gMeePkzM26g",
        authDomain: "codigoblendedprueba.firebaseapp.com",
        databaseURL: "https://codigoblendedprueba.firebaseio.com",
        projectId: "codigoblendedprueba",
        storageBucket: "codigoblendedprueba.appspot.com",
        messagingSenderId: "96744472740",
        appId: "1:96744472740:web:e29e6af96c015eb9d4e631",
        measurementId: "G-JD3FYCCZRZ"
    };
    let tablaProductos = document.getElementById("tablaProductos");
    let nombre = document.getElementById("nomProd")
    let precio = document.getElementById("preProd");
    let agregar = document.getElementById("btnAdd");
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var referencia = firebase.database().ref("productos");
    console.log(referencia);
    // value devuelve toda la informacion de esa referencia "productos"
    referencia.on("value", function (snapshot) {
        console.log(snapshot.val());
    })
    let traerData = ()=>{
        var cuerpo = document.createElement("tbody");
        // child_added devuelve uno por uno los nodos que posee esa referencia
        referencia.on("child_added", function (snapshot,LlaveAnterior) {
            console.log(snapshot.val());
            let informacion = snapshot.val();
            cuerpo.innerHTML+=`
            <tr>
                <td>${snapshot.key}</td>
                <td>${informacion.nombre_producto}</td>
                <td>${informacion.precio_producto}</td>
            </tr>`;
            tablaProductos.appendChild(cuerpo);
            
        })
    }
    traerData();
    agregar.onclick= ()=>{
        var nuevoProducto = referencia.push();
        nuevoProducto.set({
            nombre_producto: nombre.value,
            precio_producto: precio.value
        });
        console.log(nuevoProducto.key);
        
    }

}