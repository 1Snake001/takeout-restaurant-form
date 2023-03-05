"use strict";
const url = `http://localhost:5000/api/orders`;

const form = document.querySelector(".needs-validation");
const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const baseInputs = document.querySelectorAll('[name="base"]');
const toppingSelect = document.querySelector("select");
const alertSuccess = document.querySelector(".alert-success");
