<?php 
$hostname = 'localhost';
$basename = 'projet_budget';
$username = 'admin';
$password = 'admin';
$tablename = 'operations';
$pdo = newPdo($hostname, $basename, $username, $password, $tablename);

var_dump($_POST);

function newPdo($hostname, $basename, $username, $password, $tablename) {
    try {
        $pdo = new PDO("mysql:host=" . $hostname . ";dbname=" . $basename . ";charset=utf8", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        return $pdo;
    }
    catch(Exception $e) {
        die('ERROR: ' . $e->getMessage());
    }
}


function addOperation($pdo, $id, $line) {
    try {
        $req = $pdo->prepare("INSERT INTO operations (line_id, expense, income, label) VALUES (:line_id, :expense, :income, :label)");
        $affectedLines = $req->execute(array(
            'line_id' => $id,
            'expense' => $line['expense'],
            'income' => $line['income'],
            'label' => $line['label']
        ));
        return $req;
    }
    catch(Exception $e) {
        die('ERROR: ' . $e->getMessage());
    }
}

