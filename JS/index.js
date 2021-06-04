const products = [
    {
        id: "product1",
        name: "Samsung TV",
        img: "./images/product1.png",
        price: '$1,000'
    },
    {
        id: "product2",
        name: "Pixel 4a",
        img: "./images/product2.png",
        price: '$2,000'

    },
    {
        id: "product3",
        name: "PS 5",
        img: "./images/product3.png",
        price: '$3,000'
    },
    {
        id: "product4",
        name: "Macbook Air",
        img: "./images/product4.png",
        price: '$2,000'

    },
    {
        id: "product5",
        name: "Apple Watch",
        img: "./images/product5.png",
        price: '$4,000'
    },
    {
        id: "product6",
        name: "Airpods",
        img: "./images/product6.png",
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


const cartBody = document.querySelector(".cart");
const model = document.querySelector(".modal");
const showModel = () => {
    model.style.display = "block";
    // console.log("clicked")
}
cartBody.addEventListener("click", showModel);


const itemList = document.querySelector(".item-list");
const addItem = () => {
    // const textHtml = `
    // <tr>
    //                     <td>1</td>
    //                     <td>Alaba</td>
    //                     <td>N1000</td>
    //                     <td>
    //                         <a href="#" class="btn btn-counter">+</a>
    //                         <span>1</span>
    //                         <a href="#" class="btn btn-counter">-</a>
    //                     </td>
    //                     <td>
    //                         <a href="#" class="btn btn-remove">Remove</a>

    //                     </td>
    //                 </tr>   
    // `;

    // let postion = 'beforeend';
    // item.insertAdjacentHTML(postion, textHtml);
    console.log(itemList)
}
addItem()

//form validations
const form = document.querySelector("form");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
const validateForm = () => {

    //inputted value variables
    let userNameValue = userName.value.trim();
    let userEmailValue = userEmail.value.trim();
    let userPhoneValue = userPhone.value.trim();
    //checking name validations on input
    if (userNameValue === " ") {
        setError(userName, "Field cannot be empty")
    } else {
        setSuccess(userName);
    }

    //checking email validations on input
    if (userEmailValue === " ") {
        setError(userEmail, "Field cannot be empty")
    } else if (!userEmailValue.includes("@")) {
        setError(userEmail, "Email is not valid");
    } else {
        setSuccess(userEmail);
    }
    //checking phone number validations on input

    if (userPhoneValue === "") {
        setError(userPhone, "Field cannot be empty");
    } else if (isNaN(userPhoneValue)) {
        setError(userPhone, "Must be a number");
    } else if (userPhoneValue.length < 11) {
        setError(userPhone, "Password should be 8 characters long");
    } else {
        setSuccess(userPhone);
    }


}
form.addEventListener("input", validateForm)


const setError = (input, message) => {
    let fieldInput = input.parentElement;
    let small = fieldInput.querySelector("small");
    small.innerText = message;

    fieldInput.className = "field error";
}
const setSuccess = (input) => {
    let fieldInput = input.parentElement;
    fieldInput.className = "field sucess";
}