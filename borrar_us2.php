<?php
    $host = 'localhost'; // Cambiar con la dirección de tu servidor MySQL
    $db = 'usuariosr'; // Cambiar con el nombre de tu base de datos
    $user = 'root'; // Cambiar con tu nombre de usuario de MySQL
    $pass = ''; // Cambiar con tu contraseña de MySQL

    // Establecer conexión con la base de datos
    $conn = new mysqli($host, $user, $pass, $db);
    if (!isset($_GET['Id'])) {     
        $id = $_GET['id'];
        $consultaSQL = "DELETE FROM usuarios WHERE Id = '$id'";
        try{
            $result = $conn->query($consultaSQL);
            echo'<script type="text/javascript">
            alert("Registro eliminado.");
            window.location.href="us2.php";
            </script>';
        }
        catch (exception $error){
            echo'<script type="text/javascript">
            alert("Error al eliminar el registro.");
            window.location.href="us2.php";
            </script>';

        }
        $conn->close();
   }
?>