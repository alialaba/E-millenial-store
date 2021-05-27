const products = [
    {
        id: "product1",
        name: "Samsung TV",
        img: "images/product1.png",
        price: '$1,000'
    },
    {
        id: "product2",
        name: "Pixel 4a",
        img: "images/product2.png",
        price: '$2,000'

    },
    {
        id: "product3",
        name: "PS 5",
        img: "images/product3.png",
        price: '$3,000'
    },
    {
        id: "product4",
        name: "Macbook Air",
        img: "images/product4.png",
        price: '$2,000'

    },
    {
        id: "product5",
        name: "Apple Watch",
        img: "images/product5.png",
        price: '$4,000'
    },
    {
        id: "product6",
        name: "Airpods",
        img: "images/product6.png",
        price: '$3,000'
    }
]
//parent element
const productItem = document.querySelector(".product");
function createElemFunction(product) {

    //children element created
    const ulElem = document.createElement("ul");
    const liElem = document.createElement("li");
    const imgElem = document.createElement("img");
    const pElem = document.createElement("p");
    const btnElem = document.createElement("button");
    const divImg = document.createElement("div")
    const spanElem = document.createElement("span");

    ulElem.id = "product-list";
    liElem.id = "product-item";
    pElem.id = "product-name";
    btnElem.classList = "btn add-btn ";
    divImg.id = "product-content__img";
    spanElem.id = "product-content__price";

    //append child to the parent element
    productItem.appendChild(ulElem);
    ulElem.appendChild(liElem);
    liElem.appendChild(divImg);
    divImg.appendChild(imgElem);
    divImg.appendChild(spanElem)
    liElem.appendChild(pElem);
    liElem.appendChild(btnElem);

    pElem.appendChild(document.createTextNode(product.name))
    // btnElem.appendChild(document.createTextNode("Add to Cart"))
    spanElem.appendChild(document.createTextNode(`Price ${product.price}`));

    imgElem.src = product.img

    btnElem.innerText = "Add to Cart";

}
products.forEach(product => {
    createElemFunction(product);

});


//onclick the hamburger 
const navToggle = document.querySelector(".toggle-nav");
const navOpen = () => {
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("nav-visible")
}

navToggle.addEventListener("click", navOpen)




