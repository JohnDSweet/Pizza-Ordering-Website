function Pizza() {
  this.toppings = [];
  this.size = [];
}

var price = 0;
Pizza.prototype.getPrice = function(pizza, size) {
  // console.log("toppings length = " + pizza.toppings.length);
  // console.log("size = " + size);
  // debugger;
  if (size === 1) {
    price = 10;
    // console.log("The size was 1 so the price is $10: " + price);
  } else if (size === 2) {
    price = 14;
    // console.log("The size was 2 so the price is $14: " + price);
  } else if (size === 3) {
    price = 18;
    // console.log("The size was 3 so the price is $18: " + price);
  } else if (size === 4) {
    price = 22;
    // console.log("The size was 4 so the price is $22: " + price);
  };
  // console.log(price);
  price += pizza.toppings.length;
  // console.log(price);
};

$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    $("input:checkbox[name=topping]:checked").each(function() {
      pizza.toppings.push($(this).val());
      });
    var size = parseInt($("#size option:selected").val());
    console.log("The size was collected and it is: " + size);
    pizza.getPrice(pizza, size);
    $("#result").show();
    $(".result").empty().append( "Your pizza will cost $" + price + ".");
    price = 0;
  });
});
