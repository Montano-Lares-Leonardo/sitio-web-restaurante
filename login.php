<?php
$host = 'localhost';
$db = 'bd_4b_eq04';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if($conn->connect_error){
    die("Error de Conexion: " . $conn->connect_error);
}
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $username=$_POST["username"];
    $password=$_POST["password"];
    
    $query="SELECT * FROM usuarios WHERE username='$username' AND password='$password'";
    $result=$conn->query($query);

    if($result->num_rows===1){
        ?>
        <script type="text/javascript">
            alert("¡Inicio de Sesion exitoso!");
            window.location.href = "Admin.html";
        </script>
        <?php
    }else{
        ?>
        <script type="text/javascript">
        alert("Usuario o contraseña incorrecta.");
        window.location.href = "login.html";
        </script>
        <?php
    }
}
$conn->close();
?>