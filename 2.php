<?php
$prov = include("login.php");
if ($prov){
	$algo = "SELECT * FROM usuarios  ";
	$resultado = mysql_query($conn($conn ),$algo);
	if(resultado){
		while ($row = $resultado ->fetch_array()) {
			$username=$_POST["username"];
            $password=$_POST["password"];
			$id=$_POST["id"];
    		$nombre=$_POST["nombre"];
    		$email=$_POST["email"];
    		$telefono=$_POST["telefono"];
    		$edad=$_POST["edad"];
    		$direccion=$_POST["direccion"];
			?>
			<?php
		}
	}
}
?>