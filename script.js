let burger ;
let overallprice=0;
function hamburger () {
    burger = prompt ('What do you want in your burger? Tomato, cucumber, onion, lettuce, another meatball?','It is important to write down exactly what you want in your bun');
    alert ('yours order: ' + burger);
    alert ('price is 45 shekels')
    overallprice = overallprice +45;
        }
let piza;    
    function pizza () {
    piza = prompt ('What cheese and what toppings do you want?')
    alert ('your order is:' + piza);
    alert ('price is 45 shekels')
    overallprice = overallprice +45;
        }

    function checkout(){
            alert ("The price of the products is:" + overallprice);
    }