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
$sql = "SELECT Id, Categoria, Nombre, Descripcion, Precio, Imagen FROM menu";
if (isset($_GET['Categoria'])){
    $categoSelec = $_GET['Categoria'];
    if ($categoSelec !== 'all'){
        $sql .= " WHERE Categoria = '$categoSelec'"; 
    }
}
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
        <a href="INDEX.html" style="float: left;">
            <img src="imagenes/LPHmini.png" width="270" style="padding: 5px;">
        </a>
      <a id="TOPLINK" href="Creditos2.html">Créditos</a>
        <div id="CUENTA"><a id="TOPLINK" href="login.html">Cerrar Sesión</a></div>
        <a id="TOPLINK" href="Menu3.php">Nuestro Menu</a>
    </div>
    <center>
<a href="INDEX.html"><img src="imagenes/LPH.png" width="255" style="padding: 20px;"></a>
<div id="GENERICO"><center><A HREF=agregar_pr.php>Agregar producto</A></center>
    <A HREF=Menu3.php>Mostar tabla completa</A>
    <select id=seleciona>
    <option value="all">Seleciona una categoria</option>
    <option value="Platillo">Platillos</option>
    <option value="Bebida">Bebidas</option>
    <option value="Acompañantes">Acompañantes</option>
    <option value="Extras">Extras</option>
</select>
<script>
    document.getElementById("seleciona").addEventListener("change", function(){
        var Categoria = this.value;
        window.location.href = "Menu3.php?Categoria=" + Categoria
    });
</script>
<section class="body">
<TABLE BORDER id="tabla" style="text-align: center;">
<TR>
<TD BORDER><I id="ID"><CENTER> CATEGORIA: </I></CENTER></TD>
<TD BORDER><I id="ID"><CENTER> NOMBRE:</I></CENTER></TD></I></CENTER>
<TD BORDER><I id="ID"><CENTER> DESCRIPCION: </I></CENTER></TD>
<TD BORDER><I id="ID"><CENTER> PRECIO: </I></CENTER></TD>
<TD BORDER><I id="ID"><CENTER> IMAGEN:</CENTER></I></TD>
<TD BORDER><I id="ID"><CENTER> EDITAR:</CENTER></I></TD>
</TR>
 <?php
 if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["Categoria"] . "</td>";
                        echo "<td>" . $row["Nombre"] . "</td>";
                        echo "<td>" . $row["Descripcion"] . "</td>";
                        echo "<td>" . $row["Precio"] . "</td>";
                        echo "<td style='color:#000000'><img src='imgplatillos/" . $row["Imagen"] . "' width='150px'" . "'height='150px' </td>";
                    }
                } else {
                    echo "<tr><td colspan='5'>No se encontraron registros</td></tr>";
                }
                ?>
</TABLE>
 </section>
</div>

</body>
</html>