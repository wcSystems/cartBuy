<table id="example" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Id_Product</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sub total</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody id="tbodycart" >
        </tbody>
    </table>

    <select class="col-sm-3" name="selectTransport" onchange="totalBuy()" id="selectTransport"></select>
    <input class="col-sm-2" disable type="text" name="total_cart" id="total_cart">
    <button class="btn btn-success col-sm-2" onclick="process_buy()">Process</button>

    


    <script>
    dtables()
    transport() 
    </script>
