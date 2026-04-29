function login() {
    let name = document.getElementById("name").value;
    let regno = document.getElementById("regno").value;

    if (name === "" || regno === "") {
        alert("Enter all details");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("regno", regno);

    window.location.href = "dashboard.html";
}

function loadData() {
    let name = localStorage.getItem("name");
    let regno = localStorage.getItem("regno");

    if (!name) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("studentName").innerText = "Name: " + name;
    document.getElementById("studentReg").innerText = "Registration No: " + regno;
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}