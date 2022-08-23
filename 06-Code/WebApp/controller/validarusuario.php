
<?php
require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/db/db.php";
$usuario = $_POST['usuario'] ;
$password = $_POST['password'] ;
$query = new MongoDB\Driver\Query(array('usuario' => $usuario,'password'=>$password));

 //Output of the executeQuery will be object of MongoDB\Driver\Cursor class
$cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
// Convert cursor to Array and print result
$users = $cursor->toArray();
$result = count($users);

if ($result != 0) {
      echo 1;
}else{
    echo 0;
};
?>
