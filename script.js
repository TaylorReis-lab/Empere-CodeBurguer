const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".descont-all")
const buttonTotal = document.querySelector(".button-total")
const buttonFilter = document.querySelector(".button-filter")

function formatCurrency(value) {
    const newValue = value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
    return newValue
}

function mostAll(Array) {
    let myLi = ""
    Array.forEach(products => {
        myLi += `
        <li>
            <img src=${products.src}>
            <p>${products.name}</p>
            <p class="item-price">${formatCurrency(products.price)}</p>
        </li>
        `
});
    list.innerHTML = myLi
}

function discontAll() {
    const discontMap = menuOptions.map((product) =>({
        ...product,
        price: product.price * 0.9
    }))
    mostAll(discontMap)
}

function sumsAll() {
    const totalSum = menuOptions.reduce((acc, cur) => acc + cur.price, 0)
    list.innerHTML = `
        <li>
            <p>O valor total de todos os produtos foi ${formatCurrency(totalSum)}</p>
        </li>
    `
}

function filterAll() {
    const filter = menuOptions.filter((product) => product.vegan)
    mostAll(filter)
}   

buttonShowAll.addEventListener("click", () => mostAll(menuOptions))
buttonMapAll.addEventListener("click", discontAll)
buttonTotal.addEventListener("click", sumsAll)
buttonFilter.addEventListener("click", filterAll)