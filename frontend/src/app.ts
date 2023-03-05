const url: string = `http://localhost:5000/api/orders`;

const form: HTMLFormElement = document.querySelector(".needs-validation") as HTMLFormElement;
const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const addressInput: HTMLInputElement = document.getElementById("address") as HTMLInputElement;
const baseInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="base"]');

function getBase() {
  let base: string | undefined;

  baseInputs.forEach((checkbox) => {
    if (checkbox.checked) {
      base = checkbox.value;
    }
  });
    return base;
}
const toppingSelect: HTMLSelectElement = document.querySelector("select") as HTMLSelectElement;
const alertSuccess: HTMLElement = document.querySelector(".alert-success") as HTMLElement;

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
  
  } else {
    form.classList.add("was-validated");
  }
});
