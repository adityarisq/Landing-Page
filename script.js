function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return { name, city, email, zipCode, status };
}

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    var statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

function validateFormData(formData) {
    if (formData && isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status))
    {
    return true;
    }
    return false;
}

function submit() {
    const formData = handleGetFormData();
    const isFormValid = validateFormData(formData);
    const warning = document.getElementById("warning");
    if (!isFormValid) {
        warning.style.visibility = "visible";
        warning.innerHTML = "Periksa form anda sekali lagi";
        } else {
        warning.style.visibility = "hidden";
        warning.innerHTML = "";
        }
    }

    document.getElementById("submit-form").addEventListener("click", function (e) {
    e.preventDefault();
    submit();
});