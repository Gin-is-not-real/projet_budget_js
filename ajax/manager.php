<?php 
require 'globals.php';
$tablename = $_GLOBALS['tablename'];

// if( isset($_POST['line_id']) AND isset($_POST['expense']) AND isset($_POST['income']) AND isset($_POST['label']) ) {
//     if( !empty($_POST['line_id']) AND !empty($_POST['expense']) AND !empty($_POST['income']) AND !empty($_POST['label']) ) {


//         $lineId = $_POST['line_id'];
//         $expense = $_POST['expense'];
//         $income = $_POST['income'];
//         $label = $_POST['label'];
//         $array = [$lineId, $expense, $income, $label];
//         $array = json_encode($array);


//         try {
//             // $pdo= new PDO("mysql:host=" . $_GLOBALS['hostname'] . ";dbname=" . $_GLOBALS['basename'] . ";charset=utf8", $_GLOBALS['username'], $_GLOBALS['password'], array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
//             $pdo= new PDO("mysql:localhost;dbname=projet_budget;charset=utf8", 'admin', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
//         }
//         catch(Exception $e) {
//             die('ERROR: ' . $e->getMessage()); 
//         }
//         $req = $pdo->query("INSERT INTO operations (line_id, expense, income, label) VALUES ($lineId, $expense, $income, $label)");


//             // $req = $pdo->prepare("INSERT INTO operations (line_id, expense, income, label) VALUES (:line_id, :expense, :income, :label)");

            
//             // $affectedLine = $req->execute($array);
//             // $affectedLines = $req->execute(array(
//             //     'line_id' => $lineId,
//             //     'expense' => $expense, 
//             //     'income' => $income,
//             //     'label' => $label,
//             //     'computedString' =>$computedString
//             // ));

//         $computedString = 'line_id: ' . $lineId . ', expense: ' . $expense . ', income: ' . $income . ', label:' . $label;

//     }
//     $computedString = 'ya du vide la dedans è_é !';
// }
// else {
//     $computedString = 'j\'ai pas tout les post !';

// }



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

    $req = $pdo->prepare("INSERT INTO operations (id, line_id, expense, income, label) VALUES (DEFAULT, :line_id, :expense, :income, :label)");
    
    // $affectedLine = $req->execute($array);
    $affectedLines = $req->execute(array(
        'line_id' => $lineId,
        'expense' => $expense, 
        'income' => $income,
        'label' => $label,
    ));
}
catch(Exception $e) {
    die('ERROR: ' . $e->getMessage());
}


$computedString = 'line_id: ' . $lineId . ', expense: ' . $expense . ', income: ' . $income . ', label:' . $label;

echo json_encode($array);
