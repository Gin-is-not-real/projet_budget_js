<?php 
// echo 'je suis la page ajax.php ' . $_GET['get'];

$variable = (isset($_POST['variable'])) ? $_POST['variable'] : 'void';
$computedString = 'Bonjour, ' . $variable . ' !';
$array = ['variable' => $variable, 'computedString' => $computedString];
echo json_encode($array);
?>

