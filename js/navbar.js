$('#navbar').empty();
$_SESSION['main'].forEach(element => {
    $('#navbar').append(`<li class="nav-item"><a class='nav-link' ><buttom class="btn-b-${element.id}" ><i class='fa fa-lg fa-fw ${element.icon}'></i> ${element.name}<span class='sr-only'>(current)</span></li>`);
    $('.ajaxPages').load(`ajax/store.php`);
    $('.btn-b-'+element.id).click(function(){
        $('.ajaxPages').load(`ajax/`+element.name.toLowerCase()+`.php`);
    })
});