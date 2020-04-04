alertify.set('notifier','position', 'top-right')
function id_product(id)
{
    $('.card-item').empty()
    $_SESSION['products'].forEach(element => {
        if(element.id == id){
            $('.card-item').append(`
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="img/${element.img}.png" style="width:100%;height:100%" class="card-img card-img-item" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Price: ${element.price}</p>
                        <input class="col-6" type="number" placeholder="Quantity" value="1" onchange="total($(this).val()*${element.price})" min="1" id="quantity">
                        <input class="col-6 float-right" value="${element.price}" Placeholder="Total" readonly type="number" id="total">
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                    <div onclick="itemadd(${element.id},$('#quantity').val(),$('#total').val())" class="s-btn-item-add col-6 btn btn-success">Add</div>
                    <div data-toggle="modal" data-target="#itemModal" class="s-btn-item-close col-6 btn btn-danger float-right">Close</div>
                </div>
            </div>
            `)
        } 
    });  
}

function total(t)
{
    $('#total').val(t)
}
function itemadd(id,cuantity,total)
{
    if( parseInt(total) > parseInt($_SESSION["user"]['wallet'])){
        alertify.error('Exceeded amount')
    }else{


        if(!$_SESSION['user'])
    {
        $('#itemModal').click()
        $('#exampleModal').modal('show')
        alertify.error('Login please')
    }else
    {
        obj = {}
        $_SESSION['products'].forEach(element => {
            if(element.id == id)
            {
                obj.id = element.id
                obj.name = element.name
                obj.quantity = cuantity
                obj.price = element.price
                obj.total = total
            }
        });
        $.ajax({
            type:"POST",
            data: {"data_buy_item":obj},
            url: "php/api/session.php",
            success: function(resp)
            {
                resp = JSON.parse(resp)
                $('.s-btn-wallet').text(resp['count_cart'])
                alertify.success('Successful added')
                $('#itemModal').click()
            },
        })
    }






    }


    
}



