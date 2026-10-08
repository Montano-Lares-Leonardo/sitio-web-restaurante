<?php
// Configuración de la conexión a la base de datos MySQL
$servername = "localhost";
$usernam = "root";
$password = "";
$dbname = "bd_4b_eq04";

// Crear la conexión
$conn = new mysqli($servername, $usernam, $password, $dbname);

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos de la tabla
$sql = "SELECT Id, username, password, Email FROM usuarios";
$result = $conn->query($sql);
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
        <a id="TOPLINK" href="http:\\localhost\\4b_equipo04\Productos.php">Productos</a>
        <div id="CUENTA"><a id="TOPLINK" href="Admin.html">Pagina Administradora</a></div>
    </div>
    <center>
<a href="Admin.html"><img src="imagenes/LPH.png" width="255" style="padding: 20px;"></a>
<center><A HREF=http:\\localhost\\4b_equipo04\agregar2.php><h1>Agregar usuario</h1></A></center>
<section class="body">
<TABLE BORDER id=tabla style="text-align: center;">
<TR>
<TD BORDER><I name="I"><CENTER> ID: </I></CENTER></TD>
<TD BORDER><I name="U"><CENTER> USUARIO:</I></CENTER></TD></I></CENTER>
<TD BORDER><I name="P"><CENTER> CONTRASEÑA: </I></CENTER></TD>
<TD BORDER><I name="E"><CENTER> CORREO: </I></CENTER></TD>
<TD BORDER><I name="Ed"><CENTER> EDITAR:</CENTER></I></TD>
</TR>
 <?php
 if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["Id"] . "</td>";
                        echo "<td>" . $row["username"] . "</td>";
                        echo "<td>" . $row["password"] . "</td>";
                        echo "<td>" . $row["Email"] . "</td>";
                        echo "<td>
                                <a href='edit_us2.php?id=" . $row["Id"] . "'>Editar</a>
                                <a href='borrar_us2.php?id=" . $row["Id"] . "'>Eliminar</a>
                                </td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'>No se encontraron registros</td></tr>";
                }
                ?>
</TABLE>
 </section>
</body>
</html> 