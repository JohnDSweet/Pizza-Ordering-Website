function Pizza() {
  this.toppings = [];
  this.size = [];
}

var price = 0;
Pizza.prototype.getPrice = function(pizza, size) {
  if (size === "small") {
    price = 10;
  } else if (size === "medium") {
    price = 14;
  } else if (size === "large") {
    price = 18;
  } else if (size === "extra large") {
    price = 22;
  };
  price += pizza.toppings.length;
};  

var pizzaToppings = "";
function pizzaName(pizza) {
  for (var i = 0; i < pizza.toppings.length; i++) {
    pizzaToppings += ", " + pizza.toppings[i];
  };
};

function resetFunction(pizza) {
  console.log("This is working");
  var x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $("#button1").empty().append("Preview your pizza");
  pizza.toppings = [];
  pizza.size = "";
  pizzaToppings = "";
};

$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var pizza = new Pizza();
    $("input:checkbox[name=topping]:checked").each(function() {
      pizza.toppings.push($(this).val());
      });
    var size = $("#size option:selected").val();
    pizza.getPrice(pizza, size);
    $("#result").show();
    $(".result").empty().append("Your pizza will cost $" + price + ".");
    $("#button1").empty().append("Revise your order");
    $("#reset").removeClass("hidden");

    document.getElementById("reset").onclick = function() {
      pizzaName(pizza);
      $("#orders").append("<li>One " + size + " pizza with cheese" + pizzaToppings + ".</li>");
      resetFunction(pizza);
    };

    $("#orders").click(function() {
      $("ul#orders").children("li").first().click(function() {
        $(this).remove();
      });
    });

    price = 0;
  });
});
