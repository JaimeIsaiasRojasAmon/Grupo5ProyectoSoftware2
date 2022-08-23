<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
//$nivel = $_POST['curso'];
$telefono    = $_POST['telefono'];
$direccion = $_POST['direccion'];
$paralelo = $_POST['paralelo'];
$cedula = $_POST['cedula'];
//$materias = $_POST['materias'];
$year = $_POST['year'];
$nummaterias = $_POST['nummaterias'];
//$salario = $_POST['salario'];
$usuario = $_POST['usuario'];
$password = $_POST['password'];
$tipo_usuario = $_POST['tipo_usuario'];
$estatus = $_POST['estatus'];


$obj = array (
'nombre' => $nombre,
'apellidos' => $apellidos,
//'curso' => $nivel,
'telefono' => $telefono,
'direccion'=> $direccion,
'paralelos'=> $paralelo,
'cedula' => $cedula,
'yearLectivo'=>$year,
'numeroMaterias'=>$nummaterias,
'usuario'=>$usuario,
'password'=>$password,
'tipo_usuario'=>$tipo_usuario,
'estatus'=>$estatus
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.usuarios', $insert);

if ($result->getInsertedCount() == 1) {
    echo 1;
	
} else {
    echo 0;
    
}