<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
$materia = $_POST['materia'];
$year    = $_POST['year'];
$departamento = $_POST['departamento'];
$nivel = $_POST['nivel'];
$paralelo = $_POST['paralelo'];
$docente = $_POST['docente'];

$obj = array (
'nombreMateria' => $materia,
'yearLectivo' => $year,
'departamento'=> $departamento,
'nivel'=> $nivel,
'paralelo' => $paralelo,
'docente'=>$docente
);

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($obj);
$result = $manager->executeBulkWrite('gestionEducativa.materias', $insert);

if ($result->getInsertedCount() == 1) {
    echo 'registrado';
	
} else {
    echo 'error';
    
}