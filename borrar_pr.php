<?php
    $host = 'localhost'; // Cambiar con la dirección de tu servidor MySQL
    $db = 'bd_4b_eq04'; // Cambiar con el nombre de tu base de datos
    $user = 'root'; // Cambiar con tu nombre de usuario de MySQL
    $pass = ''; // Cambiar con tu contraseña de MySQL

    // Establecer conexión con la base de datos
    $conn = new mysqli($host, $user, $pass, $db);
    if (!isset($_GET['Id'])) {     
        $id = $_GET['id'];
        $consultaSQL = "DELETE FROM menu WHERE Id = '$id'";
        try{
            $result = $conn->query($consultaSQL);
            echo'<script type="text/javascript">
            alert("Producto eliminado.");
            window.location.href="Productos.php";
            </script>';
        }
        catch (exception $error){
            echo'<script type="text/javascript">
            alert("Error al eliminar el producto.");
            window.location.href="Productos.php";
            </script>';

        }
        $conn->close();
   }
?>