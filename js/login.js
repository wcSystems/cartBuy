$('#SubmitSignin').click(function(){
    let Username = $('#inputUsername').val().toUpperCase()
    let Password = $('#inputPassword').val()
    alertify.set('notifier','position', 'top-right')

    if(Username == "" && Password == "")
    {
        alertify.error($('#inputUsername').attr('placeholder') + ' And ' + $('#inputPassword').attr('placeholder') + ' Empty')
    }else
    {
        if(Username == "" && Password.length > 0 )
        {
            alertify.error($('#inputUsername').attr('placeholder') + ' Empty')
        }
        if(Password == "" && Username.length > 0 )
        {
            alertify.error($('#inputPassword').attr('placeholder') + ' Empty')
        }
    }
    $_SESSION['users'].forEach(element => {
        if(Username == element.user && Password == element.password && Password.length > 0 && Username.length > 0 )
        {
            alertify.success('Wellcome to ' + element.name + ' ' + element.lastname )
            $_SESSION['user'] = element
            img = $_SESSION['user']['img']
            $('.s-btn-login').click();
                $.ajax({
                    type:"POST",
                    data: {"user":element},
                    url: "php/api/session.php",
                })
                $('.s-btn-logo').css(`background-image`,`url("img/${img}.png")`).css(`background-size`,`60px`).css(`width`,`60px`)
                if($_SESSION['count_cart'] == undefined){$_SESSION['count_cart'] = 0}
                if($_SESSION['user']['wallet'] == undefined){$_SESSION['user']['wallet'] = 0}
                $('.btn-b-2').append(`<i class="btn btn-dark rounded-circle ml-2 s-btn-wallet">` + $_SESSION['count_cart'] + `</i>`)
                $('.s-btn-logo').append(`<i class="s-btn-wallet-user btn btn-dark"> $ `+ $_SESSION['user']['wallet'] +`</i>`)
        }
            if(Username == element.user && Password != element.password && Password.length > 0 && Username.length > 0)
            {
                alertify.error($('#inputPassword').attr('placeholder') + ' is not associated with ' + $('#inputUsername').attr('placeholder'))
            }
    });
})