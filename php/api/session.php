<?php
    include 'query.php';
    $q = new query();
    session_start();
    if($_SESSION['user'] == null ){
        $_SESSION['user'] =  $_POST['user'];
    }
    //guardar las compras de item para pasarlos a tabla
    $_SESSION['buy_item'][$_POST['data_buy_item']['id']] = $_POST['data_buy_item'];


    $_SESSION['count_buy_item'] = count($_SESSION['buy_item']);

    
    unset($_SESSION['buy_item'][$_POST['id_trash_table']]);


    if($_POST['id_product_rating']){
        $_SESSION['rating'] = $q->s("SELECT AVG(rating) AS rating FROM rating WHERE product = '".$_POST['id_product_rating']."' ")[0];
    }
    




    if($_POST['process']['total']){

        foreach ($_SESSION['buy_item'] as $key => $value) {
            $q->u("INSERT INTO rating (user,product,rating) VALUES ('".$_SESSION['user']['id']."','".$key."',20)");
        }
        
        $_SESSION['user']['wallet'] = $_SESSION['user']['wallet'] - $_POST['process']['total'];
        unset($_SESSION['buy_item']);
        $q->u("UPDATE user SET wallet = '".$_SESSION['user']['wallet']."' WHERE id = '".$_SESSION['user']['id']."' ");
    }
    



    $_SESSION['count_cart'] = $_SESSION['buy_item'][1]['quantity'] + $_SESSION['buy_item'][2]['quantity'] + $_SESSION['buy_item'][3]['quantity'] + $_SESSION['buy_item'][4]['quantity'];
    $_SESSION['total_cart'] = $_SESSION['buy_item'][1]['total'] + $_SESSION['buy_item'][2]['total'] + $_SESSION['buy_item'][3]['total'] + $_SESSION['buy_item'][4]['total'];


    echo json_encode($resp = array(
        "count_cart" => $_SESSION['count_cart'],
        "total_cart" => $_SESSION['total_cart'],
        "buy_item" => $_SESSION['buy_item'],
        "count_buy_item" =>$_SESSION['count_buy_item'],
        "buy_item" => $_SESSION['buy_item'],
        "wallet" => $_SESSION['user']['wallet'],
        "rating" => $_SESSION['rating']
    ));

     
?>
