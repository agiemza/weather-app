export default function nav() {
    const nav = document.createElement("nav")
    nav.appendChild(createButton("search"))
    nav.appendChild(createButton("currentPos"))
    return nav
}

function createButton(content) {
    const searchButton = document.createElement("button")
    searchButton.innerHTML = content
    return searchButton
}