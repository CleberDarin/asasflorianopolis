<?php
$servername = "localhost";   
$username = "root";          
$password = "";              
$dbname = "formulario_asas";

// Criar a conexão
$conn = new mysqli('localhost', 'root', '', 'formulario_asas');


// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
