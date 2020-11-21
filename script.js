const instruments = [
    {
        name: 'trumpet',
        instrumentType: 'brass',
        price: '100.00',
        brand: 'fender',
        image: 'https://www.jimlaabsmusicstore.com/wp-content/uploads/2019/05/Schiller-Old-City-Taj-Bb-Trumpet-3.png'
    },
    {
        name: 'violin',
        instrumentType: 'string',
        price: '100.00',
        brand: 'fender',
        image: 'https://cdn.shopify.com/s/files/1/0746/4805/products/yes1714__1_300x.jpg?v=1594917099'
    },
    {
        name: 'piano',
        instrumentType: 'percussion',
        price: '100.00',
        brand: 'yamaha',
        image: 'https://www.pianosolutions.net/pub/media/catalog/product/cache/3eefb03207b57b648a3f7359289ae856/c/l/clp695gppe.jpg'
    },
    {
        name: 'saxophone',
        instrumentType: 'woodwind',
        price: '100.00',
        brand: 'yamaha',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71tawT3OEML._AC_SX425_.jpg'
    },
    {
        name: 'drums',
        instrumentType: 'percussion',
        price: '100.00',
        brand: 'maton',
        image: 'https://media.sweetwater.com/api/i/q-82__ha-82ed2b675587e632__hmac-0c4c06cc9a590e1eaf59b2ec2283c4dbcf68f393/images/items/750/AF322COP-large.jpg'
    },
    {
        name: 'clarinet',
        instrumentType: 'woodwind',
        price: '100.00',
        brand: 'maton',
        image: 'https://cdn.shoplightspeed.com/shops/632400/files/16332720/buffet-buffet-crampon-r13-bb-professional-clarinet.jpg'
    },
]

let cart = []
let store = instruments

window.onload = () => {
    displayInstruments(instruments)
    document.getElementById("fender").addEventListener("mouseover", mouseOverFender)
    document.getElementById("fender").addEventListener("mouseout", mouseOutFender)
    document.getElementById("yamaha").addEventListener("mouseover", mouseOverYamaha)
    document.getElementById("yamaha").addEventListener("mouseout", mouseOutYamaha)
    document.getElementById("maton").addEventListener("mouseover", mouseOverMaton)
    document.getElementById("maton").addEventListener("mouseout", mouseOutMaton)

    displayCart(cart)
}

const displayCart = (cart) => {
    if (cart.length === 0) {
        document.appendChild(document.createTextNode("Store is empty"))
    } else {
        cart.forEach((i) => {
            i.name
        })
    }

}

const displayInstruments = (instruments) => {
    let instrumentsNode = document.getElementById('instruments')

    instruments.forEach((i) => {
        console.log(i.name)
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "instrument")
        newDiv.setAttribute("id", i.brand)
        // newDiv.addEventListener("mouseover", mouseOver+${Fend)

        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class", "imgDiv")

        let img = document.createElement("img")
        img.setAttribute("src", i.image)
        imgDiv.appendChild(img)
        newDiv.appendChild(imgDiv)
        newDiv.appendChild(document.createTextNode(i.name))
        instrumentsNode.appendChild(newDiv)  
    })
}

function mouseOverFender() {
    document.getElementById("fender").style.backgroundColor = "red";
    document.getElementById("fender").style.color = "white";
}

function mouseOutFender() {
    document.getElementById("fender").style.backgroundColor = "white";  
    document.getElementById("fender").style.color = "black";  
}
  
function mouseOverYamaha() {
    document.getElementById("yamaha").style.backgroundColor = "green";
    document.getElementById("yamaha").style.color = "white";
}

function mouseOutYamaha() {
    document.getElementById("yamaha").style.backgroundColor = "white";  
    document.getElementById("yamaha").style.color = "black";  
}
  
function mouseOverMaton() {
    document.getElementById("maton").style.backgroundColor = "blue";
    document.getElementById("maton").style.color = "white";
}

function mouseOutMaton() {
    document.getElementById("maton").style.backgroundColor = "white";  
    document.getElementById("maton").style.color = "black";  
}