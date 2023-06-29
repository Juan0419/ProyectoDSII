<?php

$host='localhost';
$bd='Gimnasio';
$user='postgres';
$pass='12345678';

$conexion=pg_connect("host=$host dbname=$bd user=$user password=$pass");
?>