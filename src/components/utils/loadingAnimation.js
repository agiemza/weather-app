import "./loadingAnimation.css"

export default function loadingAnimation() {
    const element = document.createElement("div")
    element.classList.add("lds-ring")
    element.innerHTML = `<div></div><div></div><div></div><div></div>`
    return element
}