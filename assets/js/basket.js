const div = document.getElementById('products')

function getBasket() {
    div.innerHTML = ''

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p> ${item.name}</p>
        <p>${item.price}</p>
        <p>${item.count} Eded</p>
        <button onclick="removeProducts(${index})">remove</button>       
        `;
        div.appendChild(box)
    })

}
function removeProducts(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
}

getBasket();