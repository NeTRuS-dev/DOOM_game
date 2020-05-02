<?php
require 'database_connection.php';
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    /** @var array $data */
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['player_id'])) {
        $query_string = 'SELECT number, id, player_name, demons_killed, time_alive FROM
                    (SELECT (@row_number := @row_number + 1) AS number, id, player_name, demons_killed, time_alive FROM `highscores`, ( SELECT @row_number := 0 ) AS t
                    ORDER BY `time_alive` DESC) as calced_table
                    WHERE number <= 10 OR id = ?';
        $request = $pdo->prepare($query_string);
        $request->execute([$data['player_id']]);
        /** @var array $rating */
        $rating = $request->fetchAll(PDO::FETCH_ASSOC);
        header('Content-Type: application/json');
        die(json_encode($rating));
    }
}
