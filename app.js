/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){

  function readFormData() {
    var formData = {};
    formData["itemName"] = $("#item-name").val();
    formData["sku"] = $("#sku").val();
    formData["department"] = $("#department").val();
    formData["quantity"] = $("#item-quantity").val();
    formData["dateReceived"] = $("#date-received").val();
    return formData;
  }

  function insertNewRecord(data) {
    var table = $('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);
    cell1.innerHTML = data.itemName;
    cell2.innerHTML = data.sku;
    cell3.innerHTML = data.department;
    cell4.innerHTML = data.quantity;
    cell5.innerHTML = data.dateReceived; 
    cell6.innerHTML = `<button id="edit">Edit</button><button id="delete">Delete</button>`;
  }

  function resetForm() {
    $("#item-name").val("")
    $("#sku").val("");
    $("#department").val("");
    $("#item-quantity").val("");
    $("#date-received").val("");
  }

  $(".add-item").on("click", function(){
    var formData = readFormData();
    console.log(formData);
    insertNewRecord(formData);
    resetForm();
  });

  $("tbody").on("click", "#edit", function(){
    console.log("this is working")
  });

  $("tbody").on("click", "#delete", function(){
    console.log("this is working")
  });




  // console.log("before\n", window.localStorage);

  // // add event listener
  // $(".add-text-btn").on("click", function(){
  //   $(".show-text").empty();
  //   var curTextValue = $('#theKey').val(); // reading from <input>
  //   var curKeyValue = "theKey"; // change to dynamic key?
  //   localStorage.setItem(curKeyValue, curTextValue);
  //   $(".show-text").append(curTextValue);
  // });

  // // remove item from app

  // // listen for click event (del)
  // $(".clear-cache-btn").on("click", function(){
  //   // clear local storage
  //   localStorage.clear();
  //   $(".show-text").empty();
  // });

});