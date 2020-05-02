<?php
require 'database_connection.php';
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    /** @var array $data */
    $data = json_decode(file_get_contents('php://input'), true);
    if (!empty($data)) {
        /** @var string $player_name */
        $player_name = htmlspecialchars(trim($data['player_name']), ENT_QUOTES);
        /** @var int $killed_enemies */
        $killed_enemies = $data['demons_killed'];
        /** @var string $surviving_time */
        $surviving_time = $data['time_alive'];
        $query = $pdo->prepare("INSERT INTO `highscores` (`player_name`, `demons_killed`, `time_alive`) VALUES (?, ?, ?)")
            ->execute([$player_name, $killed_enemies, $surviving_time]);
        header('Content-Type: application/json');
        die(json_encode($pdo->lastInsertId()));
    }
}