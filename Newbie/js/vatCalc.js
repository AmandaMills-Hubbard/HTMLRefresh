let price = prompt("Enter the RAW PRICE:");

vat = price * .206;

newPrice = Number(price) + Number(vat);
// .206
console.log(newPrice);
