<?php
    $servername = 'localhost'; // Cambiar con la dirección de tu servidor MySQL
    $usernam = 'root'; // Cambiar con tu nombre de usuario de MySQL
    $password = ''; // Cambiar con tu contraseña de MySQL
    $dbname = 'bd_4b_eq04'; // Cambiar con el nombre de tu base de datos

    // Establecer conexión con la base de datos
    $conn = new mysqli($servername, $usernam, $password, $dbname);


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $categoria = $_POST['Categoria'];
        $nombre = $_POST['Nombre'];
        $desc = $_POST['Descripcion'];
        $precio = $_POST['Precio'];
        $imagen = $_POST['Imagen'];
        $id = $_GET['id'];
        if ($checkResult->num_rows > 0) {
        // El producto ya existe
        ?><script type="text/javascript">
        alert("El producto ya existe, por favor intente con otro nombre.");
        window.location.href="edit_pr.php";
        </script><?php
    }     
        ///guardar imagen en el servidor
        $imgn = $_FILES['Imagen']['name'];
        $ruta = "imgplatillos/" . $_FILES['Imagen']['name'];
        $resultado = @move_uploaded_file($_FILES["Imagen"]["tmp_name"], $ruta);
        // Insertar el nuevo producto en la base de datos
        $actualizaQuery = "UPDATE menu SET Categoria = '$categoria', Nombre= '$nombre', Descripcion = '$desc', Precio = '$precio', Imagen = '$imgn' WHERE Id = '$id'";
        if ($conn->query($actualizaQuery) === TRUE) {
            // Registro exitoso
            echo'<script type="text/javascript">
            alert("El registro se actualizó correctamente.");
            window.location.href="Productos.php";
            </script>';
        } else {
            // Error al registrar el usuario
            echo 'Error al registrar el usuario: ' . $conn->error;
        }
    }
else{
    if (!isset($_GET['Id'])) {     
         $id = $_GET['id'];
        $consultaSQL = "SELECT * FROM menu WHERE Id = '$id'";
        $result = $conn->query($consultaSQL);
        if ($result->num_rows > 0) {
            // Obtener los datos del registro y asignarlos a variables
            $row = $result->fetch_assoc();
            $id = $row["Id"];
            $categoria = $row["Categoria"];
            $nombre = $row["Nombre"];
            $desc = $row["Descripcion"];
            $precio = $row["Precio"];
            $imagen = $row['Imagen'];
        } else {
            // El registro no existe, puedes mostrar un mensaje de error o redireccionar
            echo "El registro no existe";
        }
        $conn->close();
    }
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
            <a href="Admin.html"><img src="imagenes/LPH.png" width="255" style="padding: 20px;"></a>

    <div id="GENERICO" style="width: 400px; height: 370px;">

 <section class="body"><center>
       <h1>Actualización de producto Id: <?php echo $id ?></h1>
    
    <div class="login-container">
      
      <form method="POST" enctype="multipart/form-data">
          <select name="Categoria" placeholder="Categoria" value="<?php echo $categoria; ?>">
    <option value="all">Seleciona una categoria</option>
    <option value="Platillo">Platillos</option>
    <option value="Bebida">Bebidas</option>
    <option value="Acompanantes">Acompañantes</option>
    <option value="Extras">Extras</option>
</select><br>
        <input type="text" name="Nombre" placeholder="Nombre" value="<?php echo $nombre; ?>" ><br>
        <input type="text" name="Descripcion" placeholder="Descripcion" value="<?php echo $desc; ?>" ><br>
        <input type="text" name="Precio" placeholder="Precio" value="<?php echo $precio; ?>" ><br>
        <input type="file" name="Imagen" accept=".png, .jpg, .jpeg" required><br>
        <input type="submit" value="Actualizar">
      </form>
    </div>
</section></center>
</center>
</body>