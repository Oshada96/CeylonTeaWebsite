//variables
let type = " ";
let pack = " ";
let size = " ";
let extra = " ";
let total = 0;
let allOrder = 0;
let count = 0;
let loyal = 0;


//show the change in current cart when the user make a selection
function teaTypeChange() {
    type = document.getElementById("type").value;
    document.getElementById("currentManu").innerHTML = "Selected Manufacturer : " + type;
    cost();
}
function packTypeChange() {
    pack = document.getElementById("pack").value;
    document.getElementById("currentPackage").innerHTML = "Selected Packing choice : " + pack;
    cost();
}
function sizeTypeChange() {
    size = document.getElementById("size").value;
    document.getElementById("currentSize").innerHTML = "Selected Size : " + size;
    cost();
}
function extraTypeChange() {
    extra = document.getElementById("extra").value;
    document.getElementById("currentExtra").innerHTML = "Selected Extra item : " + extra;
    cost();
}

//calculate the current total
function cost() {

    let costType = 0;
    let costPack = 0;
    let costSize = 0;
    let costExtra = 0;


    if (type == "Dilmah") {
        costType = 1000;
    }
    if (type == "Jones") {
        costType = 1500;
    }
    if (type == "George Steuwart") {
        costType = 1000;
    }
    if (type == "Malwatte Vally Plantation") {
        costType = 2000;
    }
    if (type == "Prestige Ceylon Tea") {
        costType = 1000;
    }
    if (type == "Empire Tea") {
        costType = 2000;
    }



    if (pack == "Tin") {
        costPack = 5000;
    }
    if (pack == "Paper Pouch") {
        costPack = 1000;
    }
    if (pack == "Bag") {
        costPack = 2500;
    }



    if (size == "Small") {
        costSize = 1000;
    }
    if (size == "Medium") {
        costSize = 2500;
    }
    if (size == "Large") {
        costSize = 5000;
    }


    if (extra == "Mugs") {
        costExtra = 500;
    }
    if (extra == "Silver Pins") {
        costExtra = 1000;
    }
    if (extra == "Souvenirs") {
        costExtra = 1500;
    }



    total = costType + costPack + costSize + costExtra;
    document.getElementById("currentTotalCost").innerHTML = "Current Order Total : " + total;

}

//adding the current order to the overall order and resetting the current order
function addOrder() {
    allOrder = allOrder + total;
    count++;

    document.getElementById("finalCost").innerHTML = "Total is : " + allOrder;
    document.getElementById("noOfOrders").innerHTML = "Total number of orders is : " + count;
    document.getElementById("currentManu").innerHTML = "Selected Manufacturer  : ";
    document.getElementById("currentPackage").innerHTML = "Selected Packing Choice : ";
    document.getElementById("currentSize").innerHTML = "Selected Size : ";
    document.getElementById("currentExtra").innerHTML = "Selected Extra item : ";
    document.getElementById("currentTotalCost").innerHTML = "Current Order Total : ";


}
//placeing an order and resetting the overall total and the number of orders 
function placeOrder() {
    /*
    document.getElementById("type").innerHTM.reset();
    document.getElementById("pack").innerHTML.reset();
    document.getElementById("size").innerHTML.reset();
    document.getElementById("extra").innerHTML.reset();
    */

    document.getElementById("finalCost").innerHTML = "Total : 0";
    document.getElementById("noOfOrders").innerHTML = "Total number of orders is : 0";
    alert("Thank you for your Order !!!  Your Total bill is: " + allOrder);


}

//saving a current order as a favourite order
function addFavourite() {
    localStorage.setItem("type", type);
    localStorage.setItem("pack", pack);
    localStorage.setItem("size", size);
    localStorage.setItem("extra", extra);
    localStorage.setItem("currentTotalCost", total)

}

//recall a previously saved order
function orderFavourite() {
    document.getElementById("currentManu").innerHTML = "Selected Manufacturer : " + localStorage.getItem("type");
    document.getElementById("currentPackage").innerHTML = "Selected Packing choice : " + localStorage.getItem("pack");
    document.getElementById("currentSize").innerHTML = "Selected Size : " + localStorage.getItem("size");
    document.getElementById("currentExtra").innerHTML = "Selected Extra item : " + localStorage.getItem("extra");
    document.getElementById("currentTotalCost").innerHTML = "Current Order Total : " + localStorage.getItem("currentTotalCost");


    document.getElementById("type").value = localStorage.getItem("type");
    document.getElementById("pack").value = localStorage.getItem("pack");
    document.getElementById("size").value = localStorage.getItem("size");
    document.getElementById("extra").value = localStorage.getItem("extra");
    document.getElementById("currentTotalCost").value = localStorage.getItem("currentTotalCost");

}


//cheking the loyality amount after adding three current orders 
function checkLoyality() {
    document.getElementById("noOfOrders").value = localStorage.getItem("noOfOrders");

    if (count >= 4) {
        loyal = loyal + 20;
        stop
    }

    alert("You have " + loyal + " loyality points");

    localStorage.setItem("noOFOrders", loyal);
}
