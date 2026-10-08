<?php
    $servername = 'localhost'; // Cambiar con la dirección de tu servidor MySQL
    $usernam = 'root'; // Cambiar con tu nombre de usuario de MySQL
    $password = ''; // Cambiar con tu contraseña de MySQL
    $dbname = 'bd_4b_eq04'; // Cambiar con el nombre de tu base de datos

    // Establecer conexión con la base de datos
    $conn = new mysqli($servername, $usernam, $password, $dbname);


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['Username'];
        $password = $_POST['Password'];
        $email = $_POST['Email'];
        $id = $_GET['id'];
        // Consulta para verificar si el usuario ya existe
        $checkQuery = "SELECT * FROM usuarios WHERE username = '$username'";
        $checkResult = $conn->query($checkQuery);
        if ($checkResult->num_rows > 0) {
        // El usuario ya existe
        //echo 'El usuario ya existe';
        ?><script type="text/javascript">
        alert("El nombre de usuario ya existe, por favor intente con otro nombre.");
        window.location.href="edit_us.php";
        </script><?php
    } 
        // Consulta para verificar si el correo ya existe
        $checkQuery = "SELECT * FROM usuarios WHERE Email = '$email'";
        $checkResult = $conn->query($checkQuery);
        if ($checkResult->num_rows > 0) {
        // El usuario ya existe
        //echo 'El usuario ya existe';
        ?><script type="text/javascript">
        alert("La direccion de correo ya esta registrado, por favor intente con otro correo.");
        window.location.href="edit_us.php";
        </script><?php
    } 
        $actualizaQuery = "UPDATE usuarios SET username = '$username', password= '$password', Email = '$email' WHERE Id = '$id'";
        if ($conn->query($actualizaQuery) === TRUE) {
            // Registro exitoso
            echo'<script type="text/javascript">
            alert("El registro se actualizó correctamente.");
            window.location.href="us.php";
            </script>';
        } else {
            // Error al registrar el usuario
            echo 'Error al registrar el usuario: ' . $conn->error;
        }
    }
else{
    if (!isset($_GET['Id'])) {     
         $id = $_GET['id'];
        $consultaSQL = "SELECT * FROM usuarios WHERE Id = '$id'";
        $result = $conn->query($consultaSQL);
        if ($result->num_rows > 0) {
            // Obtener los datos del registro y asignarlos a variables
            $row = $result->fetch_assoc();
            $id = $row["Id"];
            $username = $row["username"];
            $password = $row["password"];
            $email = $row["Email"];
        } else {
            // El registro no existe, puedes mostrar un mensaje de error o redireccionar
            echo'<script type="text/javascript">
            alert("Error al realizar el registro.");
            window.location.href="us.php";
            </script>';

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
    <div id="GENERICO" style="width: 400px; height: 270px;">

 <section class="body"><center>
       <h1>Actualización de usuario Id: <?php echo $id ?></h1>
    
    <div class="login-container">
      
      <form method="POST" enctype="multipart/form-data">
        <input type="text" name="Username" placeholder="Nombre del usuario" value="<?php echo $username; ?>" ><br>
        <input type="password" name="Password" placeholder="Contraseña" value="<?php echo $password; ?>" ><br>
        <input type="text" name="Email" placeholder="Correo electrónico" value="<?php echo $email; ?>" ><br>
        <input type="submit" value="Actualizar">
      </form>
    </div>
</section></center>
</center>
</body>