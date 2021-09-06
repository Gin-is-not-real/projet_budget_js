<?php

$pdo= new PDO("mysql:host=localhost;dbname=projet_budget;charset=utf8", 'admin', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

if(isset($_POST['action'])) {
    $action = $_POST['action'];

    if($action == 'add') {
        $req = $pdo->prepare("INSERT INTO operations (line_id, expense, income, label) VALUES (:line_id, :expense, :income, :label)");

        $affectedLines = $req->execute(array(
            'line_id' => $_POST['line_id'],
            'expense' => $_POST['expense'],
            'income' => $_POST['income'],
            'label' => $_POST['label']
        ));
        return $affectedLines;
    }

    elseif($action == 'delete') {
        $lineId = $_POST['line_id'];
        $req = $pdo->query("DELETE FROM operations WHERE line_id=$lineId");
    }

    elseif($action == 'update') {
        $lineId = $_POST['line_id'];
        $req = $pdo->prepare("UPDATE operations SET line_id=:line_id, expense=:expense, income=:income, label=:label WHERE line_id=$lineId");

        $affectedLines = $req->execute(array(
            'line_id' => $_POST['line_id'],
            'expense' => $_POST['expense'],
            'income' => $_POST['income'],
            'label' => $_POST['label']
        ));
        return $affectedLines;
    }

    elseif($action == 'get-all') {
        $req = $pdo->query("SELECT * FROM operations");

        $response = [];
        while($data = $req->fetch()) {

            $computedString = 'line_id: ' . $data['line_id'] . ', expense: ' . $data['expense'] . ', income: ' . $data['income'] . ', label:' . $data['label'];

            $array = [
                'line_id' => $data['line_id'],
                'expense' => $data['expense'],
                'income' => $data['income'],
                'label' => $data['label'],
                'computedString' => $computedString
            ];
            array_push($response, $array);
        }

        echo json_encode($response);
    }

    if($action == 'get') {
        $req = $pdo->query("SELECT * FROM operations");
    }
}

// $response = [];
// while($data = $req->fetch()) {
//     echo '<div>' . $data['line_id'] . ', ' . $data['expense'] . '</br>';
// }
