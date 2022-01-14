import React  from "react";

export default function CreateProduct(){
  return(
      <>
       <h3>Create Product</h3>
        <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Product Name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="Product Name" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div><br/>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Product Price</label>
      <input type="number" class="form-control" id="validationCustom02" placeholder="Product Price" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Available Stocks</label>
      <input type="number" class="form-control" id="validationCustom03" placeholder="Enter Number of stocks" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Product Description</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Product description" required/>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  
   
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
     
      </>
  )

}