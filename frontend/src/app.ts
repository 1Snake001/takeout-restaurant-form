const url: string = `http://localhost:5000/api/orders`;

const form: HTMLFormElement = document.querySelector(".needs-validation") as HTMLFormElement;
const nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const addressInput: HTMLInputElement = document.getElementById("address") as HTMLInputElement;
const baseInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="base"]');
const toppingSelect: HTMLSelectElement  = document.querySelector("select") as HTMLSelectElement;
const alertSuccess: HTMLElement = document.querySelector(".alert-success") as HTMLElement;


