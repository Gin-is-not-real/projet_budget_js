<?php 
// echo 'je suis la page ajax.php ' . $_GET['get'];

$var1 = (isset($_POST['var1'])) ? $_POST['var1'] : 'void variable';
$var2 = (isset($_POST['var2'])) ? $_POST['var2'] : 'void variable';

$computedString = 'var1: ' . $var1 . ', var2: ' . $var2;
$array = [
    'var1' => $var1, 
    'var2' => $var2,
    'computedString' => $computedString
];

echo json_encode($array);
?>

