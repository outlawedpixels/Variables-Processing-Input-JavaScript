var containerEle = document.body.querySelector(".container")
var taxTotal = document.body.querySelector(".container2")
var tipTotal = document.body.querySelector(".container3")

var input = Number(prompt("What is your bill?"))

var taxBill = (input * 0.07)
var taxBillTotal = (input * 0.07) + input
var tipBill = (taxBillTotal * 0.05)
var billTotal = taxBillTotal + tipBill

taxTotal.innerHTML = "Tax (7%): $"+taxBill.toFixed(2)
tipTotal.innerHTML = "Tip (5%): $"+tipBill.toFixed(2)
containerEle.innerHTML = "Your total bill is $"+billTotal.toFixed(2)