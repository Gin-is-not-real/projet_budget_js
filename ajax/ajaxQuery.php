<?php

$pdo= new PDO("mysql:host=localhost;dbname=projet_budget;charset=utf8", 'admin', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

$req = $pdo->query("SELECT * FROM operations");

$response = [];
while($data = $req->fetch()) {
    echo '<div>' . $data['line_id'] . ', ' . $data['expense'] . '</br>';

}
