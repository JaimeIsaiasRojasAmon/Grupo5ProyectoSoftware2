<?php 
    require_once $_SERVER['DOCUMENT_ROOT']."/CANGRECODERS-GROUP-1/06-Code/01WebApp/WebApp/db/db.php";
    $filter = [];
    $options = [];
    $query = new MongoDB\Driver\Query($filter, $options);
    $cursor = $manager->executeQuery('gestionEducativa.usuarios', $query);
    
 

    foreach ($cursor as $document) {
        $document = json_decode(json_encode($document),true);
        $datos[]=array('nombres'=>$document['name'], 'apellidos'=>$document['lastName'], 'cedula'=>$document['idCedula'], 'tipo_usuario'=>$document['type_user'],);
        
    }
        
    echo json_encode($datos);
?>|