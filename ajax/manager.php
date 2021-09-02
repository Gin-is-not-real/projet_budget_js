<?php 
require 'globals.php';
$tablename = $_GLOBALS['tablename'];

$lineId = (isset($_POST['line_id'])) ? $_POST['line_id'] : null;
$expense = (isset($_POST['expense'])) ? $_POST['expense'] : 0;
$income = (isset($_POST['income'])) ? $_POST['income'] : 0;
$label = (isset($_POST['label'])) ? $_POST['label'] : '';

$array = [
    'line_id' => $lineId,
    'expense' => $expense, 
    'income' => $income,
    'label' => $label,
    'computedString' =>$computedString
];
$array = json_encode($array);

try {
    $pdo= new PDO("mysql:host=" . $_GLOBALS['hostname'] . ";dbname=" . $_GLOBALS['basename'] . ";charset=utf8", $_GLOBALS['username'], $_GLOBALS['password'], array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    $req = $pdo->prepare("INSERT INTO operations VALUES (DEFAULT, :line_id, :expense, :income, :label)");
    
    $affectedLine = $req->execute($array);
}
catch(Exception $e) {
    die('ERROR: ' . $e->getMessage());
}



$computedString = 'line_id: ' . $lineId . ', expense: ' . $expense . ', income: ' . $income . ', label:' . $label;

// echo json_encode($array);
