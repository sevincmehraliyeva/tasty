const form = document.getElementById('form')
const exampleInput = document.getElementById('exampleInput')
const example = document.getElementById('example')



function axiosPost(e) {
    e.preventDefault();
    axios.post("https://655c30f2ab37729791aa0509.mockapi.io/products", {
        name: exampleInput.value,
        title: example.value,

    })
        .then(res => {
            console.log(res);
            form.reset()
        })
}

form.addEventListener("submit", axiosPost)


const div = document.getElementById('products')
const btn = document.getElementById('btn')


async function getProduct() {
    div.innerHTML=""
    const res = await axios.get(`https://655c30f2ab37729791aa0509.mockapi.io/products`);
    const data = res.data
    db = data
    db.map(item => {
        const box = document.createElement('tr')
        box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
       <td> <img style="width:50%" src="${item.image}" alt=""></td>
       <td> <p>${item.name}</p> </td>
       <td> <p class='title'>${item.title}</p></td>
       <td> <p>${item.price}</p> </td>
       <td> <button onclick="RemoveProduct(${item.id})">Remove Product</button> </td>
        `;
        div.appendChild(box)
    })
    page++;
}


function RemoveProduct(id) {
    axios
        .delete(`https://655c30f2ab37729791aa0509.mockapi.io/products/${id}`),
        getProduct()

}



const btnmor = document.getElementById('btnmor')
const inpmor = document.getElementById('inpmor')

function getSearch() {
    div.innerHTML = ''
    axios.get(`https://655c30f2ab37729791aa0509.mockapi.io/products`)
        .then(res => {
            db = res.data
            const filterdata = db.filter(item => item.name.toLowerCase().startsWith(inpmor.value.toLowerCase()))
            filterdata.map(item => {
                const box = document.createElement('tr');
                box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'
                box.innerHTML = `
                <td> <img style="width:50%" src="${item.image}" alt=""></td>
                <td> <p>${item.name}</p> </td>
                <td> <p class='title'>${item.title}</p></td>
                <td> <p>${item.price}</p> </td>
                <td> <button onclick="RemoveProduct(${item.id})">Remove Product</button> </td>
            `;
                div.appendChild(box);
            })
        })
}
btnmor.addEventListener('click', getSearch)




const btnAZ = document.getElementById('btnAZ')
const btnZA = document.getElementById('btnZA')



function sortAZ() {
    div.innerHTML = ''
    axios.get('https://655c30f2ab37729791aa0509.mockapi.io/products')
        .then(res => {
            db = res.data
            const sortData = db.sort((a, b) => a.title.localeCompare(b.title))
            console.log(sortData);
            sortData.map(item => {
                const box = document.createElement('tr')
                box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 '
                box.innerHTML = `
                <td> <img style="width:50%" src="${item.image}" alt=""></td>
                <td> <p>${item.name}</p> </td>
                <td> <p class='title'>${item.title}</p></td>
                <td> <p>${item.price}</p> </td>
                <td> <button onclick="RemoveProduct(${item.id})">Remove Product</button> </td>
        `;
                div.appendChild(box);
            })
        })

}
btnAZ.addEventListener('click', sortAZ)


function sortZA() {
    div.innerHTML = ''
    axios.get('https://655c30f2ab37729791aa0509.mockapi.io/products')
        .then(res => {
            db = res.data
            const sortData = db.sort((a, b) => b.title.localeCompare(a.title))
            console.log(sortData);
            sortData.map(item => {
                const box = document.createElement('tr')
                box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 '
                box.innerHTML = `
                <td> <img style="width:50%" src="${item.image}" alt=""></td>
                <td> <p>${item.name}</p> </td>
                <td> <p class='title'>${item.title}</p></td>
                <td> <p>${item.price}</p> </td>
                <td> <button onclick="RemoveProduct(${item.id})">Remove Product</button> </td>
        `;
                div.appendChild(box);
            })
        })

}
btnZA.addEventListener('click', sortZA)


const sortDefault = document.getElementById("default")

sortDefault.addEventListener("click", getProduct)


getProduct()

