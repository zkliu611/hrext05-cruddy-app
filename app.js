

$(document).ready(function(){

// load and display data from localstorage
  var dataArray = [];
  function loadData(){
    dataArray = JSON.parse(localStorage.inventory);
    for (var i = 0; i < dataArray.length; i++){
      insertNewRow(dataArray[i]);
    }
  }
  loadData();

  var selectedRow = null;
  var index;

  function readFormData() { // read data input and place it in an object
    var formData = {};
    formData["itemName"] = $("#item-name").val();
    formData["sku"] = $("#sku").val();
    formData["department"] = $("#department").val();
    formData["quantity"] = $("#item-quantity").val();
    formData["dateReceived"] = $("#datepicker").val();
    return formData;
  }

  function insertNewRow(data) { // create new row in table and insert values from data object
    var table = $("tbody")[0];
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
    //add edit/delete button at end of each row 
    cell6.innerHTML = '<button id="edit">Edit</button><button id="delete">Delete</button>';
  }

  function resetForm() { // resets the input form after data is read and stored
    $("#item-name").val("")
    $("#sku").val("");
    $("#department").val("");
    $("#item-quantity").val("");
    $("#datepicker").val("");
    selectedRow = null;
  }

  function editRow(row) { //puts current row value in input form for edit
    selectedRow = row.parentElement.parentElement;
    $("#item-name").val(selectedRow.cells[0].innerHTML);
    $("#sku").val(selectedRow.cells[1].innerHTML);
    $("#department").val(selectedRow.cells[2].innerHTML);
    $("#item-quantity").val(selectedRow.cells[3].innerHTML);
    $("#datepicker").val(selectedRow.cells[4].innerHTML);
    $(".add-item").text("Update Inventory");
  }

   function updateRow(data){ //updates the selected row values
    selectedRow.cells[0].innerHTML = data.itemName;
    selectedRow.cells[1].innerHTML = data.sku;
    selectedRow.cells[2].innerHTML = data.department;
    selectedRow.cells[3].innerHTML = data.quantity;
    selectedRow.cells[4].innerHTML = data.dateReceived;
  }

  function deleteRow(row) { //deletes current row, and remove the data from localstorage
    if (confirm("Are you sure you want to delete this?")) {
      if (confirm("WARNING: YOU CANNOT UNDO ONCE YOU DELETE ITEM")) {
        dataArray = JSON.parse(localStorage.inventory);
        dataArray.splice(index, 1);
        localStorage.setItem("inventory", JSON.stringify(dataArray))
      //delete row using jquery
        selectedRow = row.parentElement.parentElement;
        selectedRow.remove();
        selectedRow = null;
        // delete row without using jquery
      // var i = row.parentNode.parentNode.rowIndex;
      // document.getElementById("item-ist").deleteRow(i);
      }
    }
  }

  // function sort(){
  //   console.log(this is working);
  // }

  $(".search-btn").on("click", function(){//function for search
    var search = $("#search").val();
    dataArray = JSON.parse(localStorage.inventory);
    $("tbody").html("");
    $(".msg").html("");
    var result = false;
    for (var i = 0; i< dataArray.length; i++){
      if (dataArray[i].sku === search){
        insertNewRow(dataArray[i]);
        result = true;
      }
    }
    if (result === false){//if no record found
      $(".msg").html("No record found for SKU # " + search);
    }
  });

  $(".add-item").on("click", function(){ 
    var formData = readFormData();
    //for adding new entry
    if (selectedRow === null){
      insertNewRow(formData);
      dataArray = JSON.parse(localStorage.inventory);
      dataArray.push(formData);
      localStorage.setItem("inventory", JSON.stringify(dataArray));
    }else{ //for editing existing entry 
      //first update the row values
      updateRow(formData);
      //then remove old data and place new data back into localstorage
      dataArray = JSON.parse(localStorage.inventory);
      dataArray.splice(index, 1, formData);
      localStorage.setItem("inventory", JSON.stringify(dataArray));
      $(".add-item").text("Add To Inventory");

    }
    resetForm(); //clear out input form
  });

  $("tbody").on("click", "#edit", function(){
    index = this.parentElement.parentElement.rowIndex - 1;
    editRow(this);
  });

  $("tbody").on("click", "#delete", function(){
    index = this.parentElement.parentElement.rowIndex -1;
    deleteRow(this);
  });

});