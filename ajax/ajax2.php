<?php 
// echo 'je suis la page ajax.php ' . $_GET['get'];
$lineId = (isset($_POST['line_id'])) ? $_POST['line_id'] : null;
$expense = (isset($_POST['expense'])) ? $_POST['expense'] : null;
$income = (isset($_POST['income'])) ? $_POST['income'] : null;
$label = (isset($_POST['label'])) ? $_POST['label'] : null;

$computedString = 'line_id: ' . $lineId . ', expense: ' . $expense . ', income: ' . $income . ', label:' . $label;

$array = [
    'line_id' => $lineId,
    'expense' => $expense, 
    'income' => $income,
    'label' => $label,
    'computedString' => $computedString
];

echo json_encode($array);
?>