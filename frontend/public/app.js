"use strict";
const url = `http://localhost:5000/api/orders`;
const form = document.querySelector(".needs-validation");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const baseInputs = document.querySelectorAll('[name="base"]');
function getBase() {
    let base;
    baseInputs.forEach((checkbox) => {
        if (checkbox.checked) {
            base = checkbox.value;
        }
    });
    return base;
}
const toppingSelect = document.querySelector("select");
const alertSuccess = document.querySelector(".alert-success");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        form.classList.remove("was-validated");
        let base = getBase();
        const data = {
            name: nameInput.value,
            address: addressInput.value,
            base: base,
            topping: toppingSelect.value,
        };
        console.log(data);
    }
    else {
        form.classList.add("was-validated");
    }
});
