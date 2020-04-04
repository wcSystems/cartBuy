<?php
    $c = new mysqli("localhost", "root", "");
    mysqli_select_db($c, "zzwc");
    $tildes = $c->query("SET NAMES 'utf8'");
    if ($c->connect_error) {
        die("Connection failed: " . $c->connect_error);
    }
?>
