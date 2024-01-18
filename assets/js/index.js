const div = document.getElementById('products')
const btn = document.getElementById('btn')

let page = 1
let limit = 3

async function getProduct() {
    const res = await axios.get(`https://655c30f2ab37729791aa0509.mockapi.io/basket?page=${page}&limit=${limit}`);
    const data = res.data
    db = data

    db.map(item => {
        const box = document.createElement('div')
        box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p class="${item.name}"></p>
        <p class="${item.price}"></p>
        <button onclick="addToBasket(${item.id})">Add to basket</button>
        <button onclick="addToWishlist(${item.id})">Add to wishlist</button>
        `;
        div.appendChild(box)
    })
    page++;
}

btn.addEventListener('click', getProduct)

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productsItem = cart.find(item => item.id == id)
    if (productsItem) {
        productsItem.count = (productsItem.count || 1) + 1;
    }
    else {
        cart.push(db.find(item => item.id == id))
    }
    localStorage.setItem('cart', JSON.stringify(cart))

}

function addToWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productsItem = wishlist.find(item => item.id == id)
    if (productsItem) {
        alert('bu mehsul artiq favori olundu')

    }
    else {
        wishlist.push(db.find(item => item.id == id))
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist))

}

getProduct()