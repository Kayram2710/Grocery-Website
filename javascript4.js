function removeElement(a) {
    // Removes an element from the document.
    var element= document.getElementById(a);
    console.log(parseInt(a.substr(a.length - 1)));
    element.parentNode.removeChild(element);
    let item = data[parseInt(a.substr(a.length - 1))+1].name;
    sessionStorage.removeItem(item);
    calcTotal();
    // location.reload();
    return false;
 }

function incrementElement(b) {
    // Removes an element from the document.
    var num= document.getElementById(b);
    num.value ++;  
    let item = data[parseInt(b.substr(b.length - 1))].name;
    let value = data[parseInt(b.substr(b.length - 1))].quantity;
    let price = data[parseInt(b.substr(b.length - 1))].price;

    value = num.value;
    sessionStorage.setItem(item,value);
    let totalId = "total" + b.substr(b.length - 1);

    document.getElementById(totalId).innerHTML = `${(value * price).toFixed(2)}$`;
    setItems();
    totalCost();
    calcTotal();
    // location.reload();
}

function decrementElement(b) {
    // Removes an element from the document.
    var num= document.getElementById(b);
    console.log('NUM:',num);
    if (num.value>0){
        num.value --;
        let item = data[parseInt(b.substr(b.length - 1))].name;
        let value = data[parseInt(b.substr(b.length - 1))].quantity;
        let price = data[parseInt(b.substr(b.length - 1))].price;
        value = num.value;
        // console.log(value, num.value);
        sessionStorage.setItem(item,value);
        let totalId = "total" + b.substr(b.length - 1);

        document.getElementById(totalId).innerHTML = `${(value * price).toFixed(2)}$`;
        setItems();
        totalCost();
        calcTotal();
    }
    
    // location.reload();
}