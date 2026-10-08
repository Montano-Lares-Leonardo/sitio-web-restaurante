<?php
$servername = "localhost";
$usernam = "root";
$password = "";
$dbname = "usuariosr";

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
     <a href="INDEX.html" style="float: left;">
            <img src="imagenes/LPHmini.png" width="270" style="padding: 5px;">
        </a>
        <a id="TOPLINK" href="http:\\localhost\\4b_equipo04\us2.php">Usuarios</a>
        <a id="TOPLINK" href="http:\\localhost\\4b_equipo04\us.php">Administradores</a>
        <div id="CUENTA"><a id="TOPLINK" href="http:\\localhost\\4b_equipo04\Productos.php">Agregar Producto</a></div>


    </div>
    <center>
        <a href="Admin.html"><img src="imagenes/LPH.png" width="255" style="padding: 20px;"></a>
    <div id="GENERICO" style="width: 300px; height: 270px;">

 <section class="body"><center>
        <h1>Registro de nuevo usuario</h1>
        
        <div class="login-container">
          
          <form action="http:\\localhost\\4b_equipo04\agregar2.php" method="POST">
            <input type="text" name="u" placeholder="Nombre del usuario" required><br>
            <input type="password" name="p" placeholder="Contraseña" required><br>
            <input type="text" name="E" placeholder="Correo electrónico" required><br>
            
            <input type="submit" value="Registrar">
          </form>
        </div>
    </section></center>
</center>
</body>
<?php
// Verificar si se envió el formulario de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['u'];
    $password = $_POST['p'];
    $email = $_POST['E'];

    // Consulta para verificar si el usuario ya existe
    $checkQuery = "SELECT * FROM usuarios WHERE username = '$username'";
    $checkResult = $conn->query($checkQuery);
    if ($checkResult->num_rows > 0) {
        // El usuario ya existe
        //echo 'El usuario ya existe';
        ?><script type="text/javascript">
        alert("El nombre de usuario ya existe, por favor intente con otro nombre.");
        </script><?php
    } 
    else {
        // Consulta que el email no este usado ya
        $checkQuery = "SELECT * FROM usuarios WHERE Email = '$email'";  
        $checkResult = $conn->query($checkQuery);
        if ($checkResult->num_rows > 0) {
            ?><script type="text/javascript">
            alert("El correo ya fue registrado, por favor intente con otro nombre.");
            </script><?php
        }
        else{
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                // Inserta los nuevos datos a la base de datos
                $insertQuery = "INSERT INTO usuarios (username, password, Email) VALUES ('$username', '$password', '$email')";
                if ($conn->query($insertQuery) === TRUE) {
                    // Registro exitoso
                    ?><script type="text/javascript">
                    alert("El registro se insertó correctamente.");
                    window.location.href="us2.php";
                    </script>   <?php
                }

                else {
                    // Error al registrar el usuario
                    echo 'Error al registrar el usuario: ' . $conn->error; 
                } 
            }
            else{
                ?><script type="text/javascript">
                alert("No es un correo valido");
                </script><?php
            }
        } 
    }
}   
// Cerrar conexión
$conn->close();
?>

