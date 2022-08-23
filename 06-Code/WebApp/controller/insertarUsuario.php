<?php
require_once "../db/db.php";
$usuario = $_POST['txtUsuario'] ;
$password = $_POST['txtPassword'] ;
$query = new MongoDB\Driver\Query(array('usuario' => $usuario,'password'=>$password));