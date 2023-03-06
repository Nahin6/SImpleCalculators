function calculateTotal() {
    const unitPrice = parseFloat(document.getElementById("unit-price").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
  
    const totalPrice = unitPrice * quantity;
    let discount = 0;
  
    if (totalPrice > 10000) {
        discount = totalPrice * 0.1;
    } else if (totalPrice > 5000) {
        discount = totalPrice * 0.04;
    } else if (totalPrice > 3000) {
        discount = totalPrice * 0.02;
    }
    const finalPrice = totalPrice - discount;
  
    document.getElementById("total-price").innerHTML = `<p>Total Payable Price: ${finalPrice.toFixed(2)} taka</p>`;
  }
  