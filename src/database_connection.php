<?php
$conn_string = 'mysql:host=127.0.0.1;port=3306;dbname=doom_game_db';
$conn_user = 'root';
$conn_pass = 'root';
$pdo = '';
try {
    $pdo = new PDO($conn_string, $conn_user, $conn_pass);

} catch (Exception $e) {
    echo 'Подключение не удалось: ' . $e->getMessage();
}
