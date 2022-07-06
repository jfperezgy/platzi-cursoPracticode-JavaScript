// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return PrecioConDescuento;
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const PrecioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + PrecioConDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     PrecioConDescuento
// });

