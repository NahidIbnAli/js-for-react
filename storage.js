const getInputValue = elementId => {
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    element.value = '';
    return elementValue;
}
// const addToLocalStorage = () => {
//     const id = getInputValue('storageId-field');
//     const value = getInputValue('storageValue-field');
//     if(id && value) {
//         localStorage.setItem(id, value);
//     }
// }

// ======================================================

const getFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}
const addToLocalStorage = () => {
    const id = getInputValue('storageId-field');
    const value = getInputValue('storageValue-field');
    const cart = getFromLocalStorage();
    cart[id] = value;
    localStorage.setItem('cart', JSON.stringify(cart));
}