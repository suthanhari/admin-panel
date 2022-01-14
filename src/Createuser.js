import React from "react";


export default function Createuser(){
    return (
        <>
        <h3>Create User</h3>
         <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="name" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div><br/>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Phone Number</label>
      <input type="number" class="form-control" id="validationCustom02" placeholder="Phone number" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="email" class="form-control" id="validationCustom03" placeholder="Email" value="" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Address</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Address" required/>
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