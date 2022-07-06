<?php

function conn(){

    $hostname = 'localhost'
    $usuarioconexion = 'root'
    $passwordconexion = 'cuantiflomas'
    $conexionname = 'messi'

    $conectar = mysqli_connect($hostname, $usuarioconexion, $passwordconexion, $conexionname);
    return $conectar;

}

?>