<?php
$servername = "localhost";
$usernam = "root";
$password = "";
$dbname = "bd_4b_eq04";

// Establecer conexión con la base de datos
$conn = new mysqli($servername, $usernam, $password, $dbname);

// Verificar si hay error de conexión
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/ESTILOS.css">
    <link rel="icon" type="image/x-icon" href="imagenes/LPHmini.png">
    <title>Los Pollos Hermanos</title>
</head>
<body>
    <div id="TOPBAR">
     <a href="Admin.html" style="float: left;">
            <img src="imagenes/LPHmini.png" width="270" style="padding: 5px;">
        </a>
        <a id="TOPLINK" href="http:\\localhost\\4b_equipo04\us2.php">Usuarios</a>
        <a id="TOPLINK" href="http:\\localhost\\4b_equipo04\us.php">Administradores</a>
        <div id="CUENTA"><a id="TOPLINK" href="http:\\localhost\\4b_equipo04\Productos.php">Agregar Producto</a></div>


    </div>
    <center>
        <br><br>
            <a href="Admin.html"><img src="imagenes/LPH.png" width="255" style="padding: 20px;"></a>

    <div id="GENERICO" style="width: 400px; height: 370px;">

 <section class="body"><center>

       <h1>Registro de nuevo producto</h1>
        
        <div class="login-container">
          
          <form action="http:\\localhost\\4b_equipo04\agregar_pr.php" method="POST" enctype="multipart/form-data">
             <select name="Cat" placeholder="Categoria" required>
            <option value="all">Seleciona una categoria</option>
            <option value="Platillo">Platillos</option>
            <option value="Bebida">Bebidas</option>
            <option value="Acompanantes">Acompañantes</option>
            <option value="Extras">Extras</option>
            </select><br>
            <input type="text" name="Nom" placeholder="Nombre del producto" required><br>
            <input type="text" name="Desc" placeholder="Descripcion" required><br>
            <input type="text" name="Precio" placeholder="Precio" required><br>
            <input type="file" name="Imagen" accept=".png, .jpg, .jpeg" required><br><br>
            <input type="submit" value="Añadir">
          </form>
          <form action="http://localhost/4b_equipo04/Productos.php">
            <button>Regresar</button>
        </form>
        </div>
    </section></center>
</center>
<br><br>
</body>

<?php
// Verificar si se envió el formulario de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $categoria = $_POST['Cat'];
    $nombre = $_POST['Nom'];
    $desc = $_POST['Desc'];
    $precio = $_POST['Precio'];
    $imag = $_FILES['Imagen']['name'];
       $Destino = "imagenes/" . $imag;
    move_uploaded_file($_FILES['Imagen']['tmp_name'], $Destino);

    // Consulta para verificar si el usuario ya existe
    $checkQuery = "SELECT * FROM menu WHERE Categoria = '$categoria' AND Nombre = '$nombre' AND Descripcion = '$desc' AND Precio = '$precio' AND Imagen = '$imag'";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult->num_rows > 0) {
        // El Producto ya existe
        //echo 'El producto ya existe';
        ?><script type="text/javascript">
        alert("El nombre del producto ya existe, por favor intente con otro nombre.");
        window.location.href="agregar_pr.php";
        </script><?php
    } else {
        ///guardar imagen en el servidor
        $imgn = $_FILES['Imagen']['name'];
        $ruta = "imgplatillos/" . $_FILES['Imagen']['name'];
        $resultado = @move_uploaded_file($_FILES["Imagen"]["tmp_name"], $ruta);
        // Insertar el nuevo producto en la base de datos
        $insertQuery = "INSERT INTO menu (Categoria, Nombre, Descripcion, Precio, Imagen) VALUES ('$categoria', '$nombre', '$desc', '$precio', '$imag')";
        if ($conn->query($insertQuery) === TRUE) {
            // Registro exitoso
            ?><script type="text/javascript">
            alert("El producto se insertó correctamente.");
            window.location.href="Productos.php";
            </script><?php
        } else {
            // Error al registrar el producto
            echo 'Error al registrar el producto: ' . $conn->error;
        }
    }
}

// Cerrar conexión
$conn->close();
?>

