
alertify.set('notifier','position', 'top-right')

function dtables(){
    var t = $('#example').DataTable()
    $.ajax({
        url: "php/api/session.php",
        success: function(resp)
        {
            resp = JSON.parse(resp)
            $('#total_cart').val(resp['total_cart'])
            $.each(resp['buy_item'], function(key, value){
                let p = parseFloat(value.total).toFixed(2)
                t.row.add([
                    value.id,
                    value.name,
                    value.quantity,
                    value.price,
                    p,
                    '<button onclick="trash('+value.id+',this)" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>'
                ]).draw(false);
            });



        },
    })

    $(document).ready(function() {
        $('#example').DataTable();
    } );

}

function trash(e,t){
    $.ajax({
        type:"POST",
        data: {"id_trash_table":e},
        url: "php/api/session.php",
        success: function(resp)
        {
            resp = JSON.parse(resp)
            $(t).parents('tr').eq(0).remove();
            $('.s-btn-wallet').text(resp['count_cart'])
            $('#total_cart').val(resp['total_cart'])
            totalBuy()
        },
    })
}


function transport() {
    $('#selectTransport').append(`<option value="0" selected disabled >Select Transport</option>`)
    $_SESSION['transport'].forEach(element => {
        $('#selectTransport').append(`<option value="${element.price}" >${element.name} Increment $ ${element.price}</option>`)
    });
}




function totalBuy(){
    $.ajax({
        url: "php/api/session.php",
        success: function(resp)
        {
            resp = JSON.parse(resp)
            let total_cart = parseFloat(resp['total_cart'])
            let price_transport = parseFloat($('#selectTransport').val())
            let total = price_transport + total_cart

            $('#total_cart').val(total)
        },
    })
}


function process_buy() {
    let process = {}
        process.total = $('#total_cart').val()
    if( parseInt(total) > parseInt($_SESSION["user"]['wallet'])){
        alertify.error('Exceeded amount')
    }else{
        $.ajax({
            type:"POST",
            data: {"process":process},
            url: "php/api/session.php",
            success: function(resp)
            {
                resp = JSON.parse(resp)
                $('.s-btn-wallet').text(resp['count_cart'])
                $('.s-btn-wallet-user').text('$ ' + resp['wallet'])
                $("#example").dataTable().fnClearTable()
                $('#total_cart').val("0")
                alertify.success('Buyed')
            },
        })
    }
}