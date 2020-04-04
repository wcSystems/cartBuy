view = 3
function card(){
  $('.div-card').empty()
    $_SESSION['products'].forEach(element => {
      console.log(element.id)
      $.ajax({
        type:"POST",
        data: {"id_product_rating":element.id},
        url: "php/api/session.php",
        success: function(resp)
        {
            resp = JSON.parse(resp)
            if(resp['rating']['rating'] <= 20){
              point = "*"
            }else{
              if(resp['rating']['rating'] > 20 && resp['rating']['rating'] <= 40){
                point = "* *"
              }else{
                if(resp['rating']['rating'] > 40 && resp['rating']['rating'] <= 60){
                  point = "* * *"
                }else{
                  if(resp['rating']['rating'] > 60 && resp['rating']['rating'] <= 80){
                    point = "* * * *"
                  }else{
                    if(resp['rating']['rating'] > 80){
                      point = "* * * * *"
                    }
                  }
                }
              }
            }
            
            $('.div-card').append(`
              <div class="col-sm-${view} mb-3 mt-3">
                <div class="card">
                  <img src="img/${element.img}.png" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Price: ${element.price}</p>
                    <p class="card-text">Reputation: <i class="text-warning font-weight-bold point">${point}</i></p>
                    <p class="card-text text_avg ">AVG(${parseFloat(resp['rating']['rating']).toFixed(2)})</p>
                  </div>
                  <div data-toggle="modal" onclick="id_product(${element.id})" data-target="#itemModal" class="s-btn-store col-12 btn btn-success">Open</div>
                </div>
              </div>
            `)
        },
    })
  })
}
card()


