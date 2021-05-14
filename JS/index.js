const products = [
    {
        id: "product1",
        name: "Samsung TV",
        img: "/images/product1.png"
    },
    {
        id: "product2",
        name: "Pixel 4a",
        img: "/images/product2.png"
    },
    {
        id: "product3",
        name: "PS 5",
        img: "/images/product3.png"
    },
    {
        id: "product4",
        name: "Macbook Air",
        img: "/images/product4.png"
    },
    {
        id: "product5",
        name: "Apple Watch",
        img: "/images/product5.png"
    },
    {
        id: "product6",
        name: "Airpods",
        img: "/images/product6.png"
    }
]
function createElemFunction(product) {
    //parent element
    const productItem = document.querySelector(".product");
    //children element created
    const ulElem = document.createElement("ul");
    const liElem = document.createElement("li");
    const imgElem = document.createElement("img");
    const pElem = document.createElement("p");
    const btnElem = document.createElement("button");

    ulElem.id = "product-list";
    liElem.id = "product-item";
    pElem.id = "product-name";
    btnElem.id = "product-btn";

    //append child to the parent element
    productItem.appendChild(ulElem);
    ulElem.appendChild(liElem);
    liElem.appendChild(imgElem);
    liElem.appendChild(pElem);
    liElem.appendChild(btnElem);

    pElem.appendChild(document.createTextNode(product.name))
    btnElem.appendChild(document.createTextNode("Add to Cart"))

    imgElem.src = product.img

}
products.forEach(product => {
    createElemFunction(product);

});