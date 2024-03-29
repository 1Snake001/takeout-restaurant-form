const url: string = `http://localhost:5000/api/orders`;

const form: HTMLFormElement = document.querySelector(".needs-validation") as HTMLFormElement;
const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const addressInput: HTMLInputElement = document.getElementById("address") as HTMLInputElement;
const baseInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="base"]');

function getBase() {
  let base: string | undefined;
  let checkedBaseInput : HTMLInputElement | undefined;

  baseInputs.forEach((checkbox) => {
    if (checkbox.checked) {
      base = checkbox.value;
      checkedBaseInput = checkbox;
    }
  });
    return [base, checkedBaseInput];
}
const toppingSelect: HTMLSelectElement = document.querySelector("select") as HTMLSelectElement;
const alertSuccess: HTMLElement = document.querySelector(".alert-success") as HTMLElement;

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

  const fetchOptions: RequestInit = {
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
  } else {
    form.classList.add("was-validated");
    alertSuccess.style.display = "none";
  }
});

function inputsDefaultValueReset(): void {
  nameInput.value = "";
  addressInput.value = "";

  let checkedBaseInput: any = getBase()[1];
  checkedBaseInput.checked = false;

  (toppingSelect as HTMLSelectElement).value = (
    toppingSelect as HTMLSelectElement
  ).options[0].value;

};
