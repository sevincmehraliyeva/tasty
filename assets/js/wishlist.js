const div = document.getElementById('products')

function getBasket() {
    div.innerHTML = ''

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button onclick="removeProducts(${index})">remove</button>       
        `;
        div.appendChild(box)
    })

}
function removeProducts(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

getBasket();