var Module = (function () {
	
document.getElementById("gum1").addEventListener("click", function() {
	addPrice("Extra");
});
	
document.getElementById("gum2").addEventListener("click", function() {
	addPrice("Trident");
});
	
document.getElementById("gum3").addEventListener("click", function() {
	addPrice("DoubleMint");
});
	
document.getElementById("gum4").addEventListener("click", function() {
	addPrice("BubbleGum");
});

document.getElementById("button").addEventListener("click", function() {
	clear();
});

  var brands =  [{
	brand: "Extra",
	price: 1.50},
	{
	brand: "Trident",
	price: 1.00},
	{
	brand: "DoubleMint",
	price: 2.00},
	{
	brand: "BubbleGum",
	price: 0.50}];

  var addPrice = function (muhBrands) {
    for (i= 0; i < 4; i++) {
		if (muhBrands.length === brands[i].brand.length) {
			document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + brands[i].price;
			document.getElementById("items").innerHTML = parseFloat(document.getElementById("items").innerHTML) + 1;
		}
	}
};

  var clear = function () {
    document.getElementById("total").innerHTML = 0;
	document.getElementById("items").innerHTML = 0;
  };
  
  return {
    addPrice:addPrice,
    clear:clear
  };

})();



