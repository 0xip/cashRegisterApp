let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const sale = document.getElementById("purchase-btn");

let currencyUnits = [
    ['PENNY', .01],
    ['NICKEL', .05],
    ['DIME', .1],
    ['QUARTER', .25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
  ];

  sale.addEventListener("click", ()=>{
    const cashValue = parseFloat(cash.value);
    const changeDue = cashValue - price;
    if(cashValue < price){
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    if(cashValue === price){
        change.innerText = "No change due - customer paid with exact cash";
    }
  })    