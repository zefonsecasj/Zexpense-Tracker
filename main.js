var counter = 1

//Functions to format the currency string
var currency = 'BRL'
var currencyInput = document.querySelector('input[type=currency]')

onBlur({target:currencyInput})
currencyInput.addEventListener('focus', onFocus)
currencyInput.addEventListener('blur', onBlur)
function onFocus(e){
    var value = e.target.value;
    e.target.value = value ? localStringToNumber(value) : ''
}
function onBlur(e){
    var value = e.target.value;
    var options = {
        maximumFractionDigits : 2,
        currency : currency,
        style : 'currency',
        currencyDisplay : "symbol"
    }
    e.target.value = (value || value === 0) ? localStringToNumber(value).toLocaleString(undefined,  options) : ''
}

function localStringToNumber(text){
    return Number(String(text).replace(/[^0-9.-]+/g,""))
}

function add_item(){

    var itemName = window.document.getElementById('Item')
    var purchaseDate = window.document.getElementById('date')
    var price = window.document.getElementById('Price')
    var itemCategory = window.document.getElementById('category')
    var table = window.document.getElementById('mainTable')

    var newRow = table.insertRow(counter)

    var itemCell = newRow.insertCell(0)
    var purchaseDateCell = newRow.insertCell(1)
    var priceCell = newRow.insertCell(2)
    var categoryCell = newRow.insertCell(3)

    itemCell.innerHTML = `${itemName.value}`
    purchaseDateCell.innerHTML = `${purchaseDate.value}`
    priceCell.innerHTML = `${price.value}`
    categoryCell.innerHTML = `${itemCategory.value}` 

    itemName.value = ""
    purchaseDate.value  = ""
    price.value = ""
    itemCategory.value = ""

    var deleteCell = newRow.insertCell(4) 

    deleteCell.innerHTML = "<i class=\"fa-solid fa-trash\" onclick=\"delete_row(this.id)\" id="+counter+"></i>" 
    counter++
}

function delete_row(id){
    window.alert(id)
    var table = window.document.getElementById(`mainTable`)
    table.deleteRow(id)
}

function edit_table(){
    window.alert('test')
}


function output_graph(){
    var reportDiv = document.getElementById('report_div')
    var labels = ["Food", "Cleaning", "Leisure", "Gas", "Others"]
    var table = window.document.getElementById('mainTable')
    var tableRowsLenght = table.rows.length;

}