"use strict";
const url = `http://localhost:5000/api/orders`;
const form = document.querySelector(".needs-validation");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const baseInputs = document.querySelectorAll('[name="base"]');
function getBase() {
    let base;
    let checkedBaseInput;
    baseInputs.forEach((checkbox) => {
        if (checkbox.checked) {
            base = checkbox.value;
            checkedBaseInput = checkbox;
        }
    });
    return [base, checkedBaseInput];
}
const toppingSelect = document.querySelector("select");
const alertSuccess = document.querySelector(".alert-success");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        form.classList.remove("was-validated");
        let base = getBase()[0];
        const data = {
            name: nameInput.value,
            address: addressInput.value,
            base: base,
            topping: toppingSelect.value,
        };
        const fetchOptions = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, fetchOptions)
            .then((resp) => resp.json())
            .then((userOrder) => {
            alertSuccess.innerHTML = `Sikereses megrendelés. A rendelés azonosítója ${userOrder.id}`;
            alertSuccess.style.display = "block";
            inputsDefaultValueReset();
        }).catch((err) => console.error(err));
    }
    else {
        form.classList.add("was-validated");
        alertSuccess.style.display = "none";
    }
});
function inputsDefaultValueReset() {
    nameInput.value = "";
    addressInput.value = "";
    let checkedBaseInput = getBase()[1];
    checkedBaseInput.checked = false;
    toppingSelect.value = toppingSelect.options[0].value;
}
;
