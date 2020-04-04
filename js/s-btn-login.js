if(!$_SESSION['user']){
    $('.s-btn-login').click()
}else{
    $('.s-btn-login').removeClass('btn-outline-success').addClass('btn-outline-danger')
    $('.s-btn-logo').append(`<i class="s-btn-wallet-user btn btn-dark"> $ `+ $_SESSION['user']['wallet'] +`</i>`)
    $('.btn-b-2').append(`<i class="btn btn-dark rounded-circle ml-2 s-btn-wallet">` + $_SESSION['count_cart'] + `</i>`)
}
function loginout(){
    if(!$_SESSION['user']){
        $('#exampleModal').modal('show')
        $('.s-btn-logo').css('background-image','url("img/u-default-0.png")').css('background-size','60px').css('width','60px')
    }else{
        $('.s-btn-login').removeClass('btn-outline-success').addClass('btn-outline-danger')
        $('#exampleModal').modal('hide')
        $('.s-btn-login').click(function(){
            $('#modallogout').modal('show')
        })
    }
}
$('#SubmitLogoutYes').click(function(){location.replace("php/api/logout.php");})
$('#SubmitLogoutNo').click(function(){$('#modallogout').modal('hide')})