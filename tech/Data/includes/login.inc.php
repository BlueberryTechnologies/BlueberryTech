<?php

if ($SERVER["REQUEST_METHOD"] === "POST") {

    $id = $_POST["id"];
    $pwd = $_POST["pwd"];

    try {

        require_once 'dbh.inc.php';
        require_once 'login_model.inc.php';
        require_once 'login_contr.inc.php';

        // ERROR HANDLERS
        $errors = [];

        if (is_input_empty($id, $pwd)) {
            $errors["empty_input"] = "Fill in all of the fields";
        }
        if (is_id_invalid($id)){
            $errors["invalid_id"] = "That is an invalid ID.";
        }

        require_once 'config_session.inc.php';

        if ($errors){
            $_SESSION["errors_signup"] = $errors;

            //$sign
        }
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {
    header("Location: ../../login/index.php");
    die();
}
