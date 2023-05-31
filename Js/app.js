const filterButtons = document.querySelectorAll(".select");
const pizzaItems = document.querySelectorAll(".menu__item");
console.log(pizzaItems);
pizzaItems.forEach(function(pizza){
  if(pizza.classList.contains("chicken")){
    pizza.style.display="block"
  }
  else{
    pizza.style.display="none"
  }
})
filterButtons.forEach(function (select) {
  select.addEventListener("click", function () {
    filterButtons.forEach(function(btn){
      btn.classList.remove("active")
    })
    select.classList.add("active")
    const filterName = select.innerHTML;
    // console.log(filterName);
    if (filterName === "Chicken Pizza") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("chicken")) {
          // console.log(item);
          item.style.display="block"
        } 
        else {
          // console.log("no chicken");
          item.style.display="none"
        }
      });
    }
else if (filterName === "Pepperoni") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("Pepperoni")) {
          // console.log(item);
          item.style.display="block"
        } 
        else {
          // console.log("no chicken");
          item.style.display="none"
        }
      });
    }
    else if (filterName === "Margherita"){
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("Margherita")) {
          // console.log(item);
          item.style.display="block"
        } 
        else {
          // console.log("no chicken");
          item.style.display="none"
        }
      });
    }
   else if (filterName === "Hawaiian") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("Hawaiian")) {
          // console.log(item);
          item.style.display="block"
        } 
        else {
          // console.log("no chicken");
          item.style.display="none"
        }
      });
    }
  else  if (filterName === "Meat Lover’s Pizza") {
      pizzaItems.forEach(function (item) {
        // console.log(item)
        if (item.classList.contains("meat")) {
          // console.log(item);
          item.style.display="block"
        } 
        else {
          // console.log("no chicken");
          item.style.display="none"
        }
      });
    }
  });
});


// pizzaItem.forEach(function(menu) {console.log(menu)})
