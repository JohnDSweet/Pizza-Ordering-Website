// backend
function Menu(size, price) {

  this.size = 0;
  this.price = 0;
  this.toppings = [];
}
Menu.prototype.getPrice = function() {
  var sum = (this.toppings.length * 5 + (this.size * 2) + 3);
// return $(".price").text(sum)
return(sum)
  console.log(sum);
}
// function Address(street, city, state, zip, apt) {
//   this.street = street;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
//   this.apt = apt;
// }
// Address.prototype.fullAddress =  function() {
//   return this.street + " " + this.city + ", " + this.state + " " + this.zip + " " + this.apt;
// }

// interface logic
$(document).ready(function() {
  // debugger;
  $(".openMenu").click(function() {
    $(".showMenu").show();
    $(".openMenu").hide();
    $(".hero-text").hide();
    $(".hideImage").hide();

  });

var menuList = new Menu()

  $("form#menu").submit(function(event) {
  // debugger;
    event.preventDefault();
    var nameInput = $("input#name").val();
      menuList.size = parseInt($("#size").val());
     // console.log(menuList.size);
    $("input:checkbox[name=topping]:checked").each(function() {
      menuList.toppings.push($(this).val());

      });
      // shows what the user choice
        $(".result").append( "<li>" + " with Love, " +  menuList.toppings + " and " + "</li>")
      // menuList.getPrice();
        if (menuList.getPrice()<=11) {
          alert("Add more toppings!!!")
        }
      $(".price").append(menuList.getPrice())

      $(".name").text(nameInput.toUpperCase())
      $("#result").show();
      $("#menu").hide();

      $("#addPizza").show();
      $("#result2").hide();
      $(".deliver").show();

    });
    $("#resetMenu").click(function() {
       $("#inputName").hide();
      $("#resetMenu").hide();
      $("#order2").show();
    });
// second pizza order form
    var menuListSecond = new Menu()

      $("form#menuSecond").submit(function(event) {
      // debugger;
        event.preventDefault();

          menuListSecond.size = parseInt($("#size2").val());
         // console.log(menuList.size);
        $("input:checkbox[name=topping2]:checked").each(function() {
          menuListSecond.toppings.push($(this).val());

          });

            $(".result2").append( "<li>" + " with love " +  menuListSecond.toppings + " and " + "</li>")
            $(".price2").append(menuListSecond.getPrice())
            $(".totalSum").append(menuListSecond.getPrice() + menuList.getPrice())
          $("#result2").show();
          $("#order2").hide();
          // $(".hideImage").hide();

        });
// deliver section
    $(".deliver").click(function() {
      $("#address").toggle();
    });
    // var addressInput = new Address;
    $("form#address").submit(function(event) {
      event.preventDefault();

      var addresses = ['street', 'city', 'state', 'zip', 'apt'];
       addresses.forEach(function(address) {
        var addressInput = $("input#" + address).val();
         $("." + address).text(addressInput.toUpperCase())
       });
       $("#addressShow").show();
       $("#address").hide();
       $(".deliver").hide();
    });
});
