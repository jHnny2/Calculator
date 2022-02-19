let input = 0
var total = 0
var tax = 0
var change = 0
var amount = 0

function computeTax() {
    input = parseInt(document.getElementById("subtotal").value)
    
    if(isValidInput()) {
        setTaxPercentage()
        setTotal()
        // setAmoutPaid(total)
    } else {
        clearInputFields()
    }
    // var taxPercentage;
    // var total;
}


function isValidInput() {
    return input >= 100 && input <= 10000
}

function setTaxPercentage() {
    tax = input * 0.12
    document.getElementById("tax").value = tax
}

function setTotal() {
    total = input + tax
    document.getElementById("total").value = total
    document.getElementById("amount").value = total
    // document.getElementById("change").value = change
    document.getElementById("amount").disabled = false
    calculateChange()
}

function calculateChange() {
    amount = document.getElementById("amount").value
    change = amount - total
    document.getElementById("change").value = change
}

function clearInputFields() {
    document.getElementById("tax").value = ''
    document.getElementById("total").value = ''
    document.getElementById("amount").value = ''
    document.getElementById("change").value = ''
    document.getElementById("amount").disabled = true
}
