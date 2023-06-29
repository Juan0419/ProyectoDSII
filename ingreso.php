<?php

session_start();
$user=$_SESSION['nombre_usuario'];
echo "<h2> Bienvenido $user </h2>";

?>