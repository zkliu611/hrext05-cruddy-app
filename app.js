

$(document).ready(function(){

  var dataArray = [];

  function loadData(){
    dataArray = JSON.parse(localStorage.inventory);
    for (var i = 0; i < dataArray.length; i++){
      insertNewRow(dataArray[i]);
    }
  }

  loadData();

  var selectedRow = null;

  function readFormData() {
    var formData = {};
    formData["itemName"] = $("#item-name").val();
    formData["sku"] = $("#sku").val();
    formData["department"] = $("#department").val();
    formData["quantity"] = $("#item-quantity").val();
    formData["dateReceived"] = $("#date-received").val();
    return formData;
  }

  function insertNewRow(data) {
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
    cell6.innerHTML = '<button id="edit">Edit</button><button id="delete">Delete</button>';
  }

  function updateRow(data){
    selectedRow.cells[0].innerHTML = data.itemName;
    selectedRow.cells[1].innerHTML = data.sku;
    selectedRow.cells[2].innerHTML = data.department;
    selectedRow.cells[3].innerHTML = data.quantity;
    selectedRow.cells[4].innerHTML = data.dateReceived;
  }

  function resetForm() {
    $("#item-name").val("")
    $("#sku").val("");
    $("#department").val("");
    $("#item-quantity").val("");
    $("#date-received").val("");
    selectedRow = null;
  }

  function editRow(row) {
    selectedRow = row.parentElement.parentElement;
    $("#item-name").val(selectedRow.cells[0].innerHTML);
    $("#sku").val(selectedRow.cells[1].innerHTML);
    $("#department").val(selectedRow.cells[2].innerHTML);
    $("#item-quantity").val(selectedRow.cells[3].innerHTML);
    $("#date-received").val(selectedRow.cells[4].innerHTML);
  }

  function deleteRow(row) {
    if (confirm("Are you sure to delete this?")) {
      selectedRow = row.parentElement.parentElement;
      selectedRow.remove();
      selectedRow = null;
      // solution without jquery
      // var i = row.parentNode.parentNode.rowIndex;
      // document.getElementById("item-ist").deleteRow(i);
    }
  }

  $(".add-item").on("click", function(){
    var formData = readFormData();
    if (selectedRow === null){
      insertNewRow(formData);
      dataArray = JSON.parse(localStorage.inventory);
      dataArray.push(formData);
      localStorage.setItem("inventory", JSON.stringify(dataArray))
    }else{
      updateRow(formData);
      dataArray = JSON.parse(localStorage.inventory);
      dataArray.push(formData);
      localStorage.setItem("inventory", JSON.stringify(dataArray))
    }
    resetForm();
  });

  $("tbody").on("click", "#edit", function(){
    editRow(this);
    var index = this.parentElement.parentElement.rowIndex - 1;
    dataArray = JSON.parse(localStorage.inventory);
    dataArray.splice(index, 1);
    localStorage.setItem("inventory", JSON.stringify(dataArray))
  });

  $("tbody").on("click", "#delete", function(){
    deleteRow(this);
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