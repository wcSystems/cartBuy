<!--CONEXION PHP, DB-->
<?php 
    include 'php/api/query.php';
    $q = new query();
    session_start();
    $_SESSION['main'] = $q->s("SELECT * FROM main");
    $_SESSION['users'] = $q->s("SELECT * FROM user");
    $_SESSION['products'] = $q->s("SELECT * FROM product");
    $_SESSION['transport'] = $q->s("SELECT * FROM transport");
?>
<!--VARIABLES PHP TO JAVASCRIPT -->
<?php include 'php/api/session_javascript.php' ?>
<!--HTML-->
<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>STORE</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!--Bootstrap-->
            <link rel="stylesheet" type="text/css" href="lib/bootstrap/bootstrap-reboot.min.css">
            <link rel="stylesheet" type="text/css" href="lib/bootstrap/bootstrap.min.css">
            <!--Datatables-->
            <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>
            <!--Fontawesome-->
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/all.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/brands.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/fontawesome.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/regular.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/solid.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/svg-with-js.min.css">
            <link rel="stylesheet" type="text/css" href="lib/fontawesome/css/v4-shims.min.css">
            <!--Alertify-->
            <link rel="stylesheet" type="text/css" href="lib/alertify/css/alertify.css">
            <link rel="stylesheet" type="text/css" href="lib/alertify/css/themes/bootstrap.css">
            <!--Login-->
            <link rel="stylesheet" type="text/css" href="css/login.css">
            <!--Styles-->
            <link rel="stylesheet" type="text/css" href="css/styles.css">
        </head>
        <body>

            <nav id="navbar01" class="navbar navbar-expand-lg navbar-light">
            
                    <i class="navbar-brand rounded-circle s-btn-logo" style="background-size: 60px auto; width: 60px; background-image: url('img/<?php echo $_SESSION['user']['img'] ?>.png');"  href="#" alt="Navbar"></i>
            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="navbar" class="navbar-nav mr-auto">
                    </ul>
                    <form class="form-inline my-2 my-lg-0" onSubmit="event.preventDefault()">
                        <button class="btn btn-outline-success rounded-circle ml-3 s-btn-login" data-toggle="modal" onclick="loginout()" ><i class="fas fa-power-off"></i></button>
                    </form>
                </div>
            </nav>
            <div class="container ajaxPages mt-4">
            </div>
            <div class="modals">
                <?php include 'ajax/modals/login.php' ?>
                <?php include 'ajax/modals/logout.php' ?>
                <?php include 'ajax/modals/item.php' ?>
            </div>
            <!--script src="../lib/jquery/jquery.min.js">revisar por que no agarra el local</script-->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <!--Bootstrap-->
            <script src="lib/bootstrap/bootstrap.min.js"></script>
            <script src="lib/bootstrap/bootstrap.bundle.min.js"></script>
            <!--Datatables-->
            <script type="text/javascript" src="https:////cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
            <!--Fontawesome-->
            <script src="lib/fontawesome/js/all.js"></script>
            <script src="lib/fontawesome/js/brands.min.js"></script>
            <script src="lib/fontawesome/js/fontawesome.min.js"></script>
            <script src="lib/fontawesome/js/regular.min.js"></script>
            <script src="lib/fontawesome/js/solid.min.js"></script>
            <script src="lib/fontawesome/js/v4-shims.min.js"></script>
            <!--Alertify-->
            <script src="lib/alertify/alertify.js"></script>
            <!--navbar-->
            <script src="js/navbar.js"></script>
            <!--login-->
            <script src="js/login.js"></script>
            <!--s-btn-login-->
            <script src="js/s-btn-login.js"></script>
            <!--store-->
            <script src="js/store.js"></script>
            <!--Item-->
            <script src="js/item.js"></script>
            <!--Refress session-->
            <script>$_SESSION = <?php echo json_encode($_SESSION)?></script>
            <!--Cart-->
            <script src="js/cart.js"></script>
        </body>
    </html>