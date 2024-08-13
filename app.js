import { showBtn } from "./functions.js"


document.addEventListener("DOMContentLoaded", () => {

})

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn")) {
        return;
    }
    showBtn(e.target);
})

