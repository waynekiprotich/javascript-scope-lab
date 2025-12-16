/*Flat Burger Menu*/

//variable data
let burger = ['humburger', 'cheeseburger'];
let featuredDrink ='strawberry milkshake';

//function and block
function addBurger (){
    let newBurger = 'Flatburger';
    burger.push(newBurger);
    console.log(burger);
}

//Variable Declaration and Scope
if (true){
    let anotherNewBurger = 'Maple Bacon Burger';
    burger.push(anotherNewBurger);
    console.log(burger);
}

//change featured drink
function changeFeaturedDrink(){
    featuredDrink = 'The JavaShake';
    console.log(featuredDrink);
}