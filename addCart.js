
// Set values for the prices of each item
var prices = {
    broccoli:3.99,
    croissant: 0.70,
    roast: 5.99,
    granolabar: 3.99,
    lysol:4.99,
    airpods:329
    };

var images = {
    broccoli: "broccoli.jpg",
    croissant: "croissant.png",
    roast: "chuck roast.jpg",
    granolabar: "granolabar.png",
    lysol: "lysol.jpg",
    airpods: "AirPods_Pro.jfif",
    };

var data ={};
var subTotal = 0;
    // Just an alert so the client knows they added the item
function addToCart(products){
    alert("Item added to your Cart");

}


function setItems(){
    
    // console.log('DATA: ',data);
    // console.log(sessionStorage.key(0));
    if(sessionStorage.key(0) == 'IsThisFirstTime_Log_From_LiveServer'){
        for(let i=1; i<sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            let value = sessionStorage.getItem(key);
            console.log(key, value, prices[key]);
            data[i]= {name:key,quantity:parseInt(value), price: prices[key]}
        }
        // console.log('DATA:',data);
    }else{
        for(let i=0; i<sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            let value = sessionStorage.getItem(key);
            // console.log(key, value, prices[key]);
            data[i]= {name:key,quantity:parseInt(value), price: prices[key]}
        }
    }
}

function removeItem(){
    
}

// Calculates the total cost of the cart
function totalCost(){
    subTotal = 0;
    for ( const key in data) {
        let p = (data[key].price);
        let q = (data[key].quantity);
        let t = p * q;
        subTotal += t;
    }
    console.log(subTotal, '$');
    
}

function displayCart(){
    // let productContainer = document.querySelector(".table");
    let i = 0;
    for (const key in data) {
    document.getElementById("myCart-table").innerHTML += 
    `<tr id="row${i}">
            <th>
                <button class="btn btn-outline-danger" type="button" id="myBtn" onclick="removeElement('row${i}')">
                    <i class="bi bi-x"></i>
                </button>
            </th>
            <td> </td>
            <td>
                <img src="image/${images[data[key].name]}" alt="">${data[key].name}
            </td>
            <td> ${data[key].price} </td>
            <td>
                <button class="btn btn-light" id="minus${i}" onclick="decrementElement('num${i}')">
                    <i class="bi bi-dash"></i>
                </button>
                <input type="number" value="${data[key].quantity}" id="num${i}" disabled>
                <button class="btn btn-light" id="plus${i}" onclick="incrementElement('num${i}')">
                    <i class="bi bi-plus"></i>
                </button>
            </td>
            <td><p id="total${i}">${(data[key].price * data[key].quantity).toFixed(2)}</p></td>
        </tr>
    `;
    i++;
    }
    calcTotal();
    
};

function calcTotal(){
    // for ( const key in data) {
    //     let p = (data[key].price);
    //     let q = (data[key].quantity);
    //     let t = p * q;
    //     subTotal += t;
    // }
    // console.log(subTotal, '$');
    let taxQ = subTotal*(.09975);
    let taxG = subTotal*(0.05);
    let total = subTotal+taxQ+taxG;
    document.getElementById("subtotal").innerHTML = `${subTotal.toFixed(2)}$`;
    document.getElementById("taxQ").innerHTML = `${taxQ.toFixed(2)}$`;
    document.getElementById("taxG").innerHTML = `${taxG.toFixed(2)}$`;
    document.getElementById("total").innerHTML = `${total.toFixed(2)}$`;
    
}


setItems();
totalCost();