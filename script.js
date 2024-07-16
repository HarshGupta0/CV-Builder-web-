// Add new work experience field
function addNewWeFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'weFeild', 'mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Explain Your Experience");
    let weAddButtonOb = document.getElementById('weAddButton');
    let weOb = document.getElementById('we');
    weOb.insertBefore(newNode, weAddButtonOb);
}

// Add new academic qualification field
function addNewAqFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'aqFeild', 'mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Add More Qualification");
    let weAddButtonOb = document.getElementById('aqAddButton');
    let weOb = document.getElementById('aq');
    weOb.insertBefore(newNode, weAddButtonOb);
}

// Validate email format
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Validate phone number format (simple validation for 10-digit numbers)
function validatePhoneNumber(number) {
    let re = /^\d{10}$/;
    return re.test(String(number));
}

// Generate CV
function generateCV() {
    // Get and validate inputs
    let nameField = document.getElementById("namefeild").value;
    let emailField = document.getElementById("emailfeild").value;
    let numberField = document.getElementById("contactfeild").value;
    let addressField = document.getElementById("addressfeild").value;
    let objectiveField = document.getElementById("objectivefeild").value;

    if (!nameField || !emailField || !numberField || !addressField || !objectiveField) {
        alert("Please fill out all required fields.");
        return;
    }

    if (!validateEmail(emailField)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhoneNumber(numberField)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Personal details
    document.getElementById('nameT').innerHTML = nameField;
    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById('emailT').innerHTML = emailField;
    document.getElementById('numberT').innerHTML = numberField;
    document.getElementById("addressT").innerHTML = addressField;

    // Links
    document.getElementById("gitHubT").innerHTML = document.getElementById("GitHubfeild").value;
    document.getElementById("linkedInT").innerHTML = document.getElementById("linkedInfeild").value;
    document.getElementById("instagramT").innerHTML = document.getElementById("Instafeild").value;

    // Objective
    document.getElementById("objectiveT").innerHTML = objectiveField;

    // Work experience
    let wes = document.getElementsByClassName('weFeild');
    let str = '';
    for (let e of wes) {
        if (e.value.trim() !== '') {
            str += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("weT").innerHTML = str;

    // Academic qualifications
    let aqs = document.getElementsByClassName('aqFeild');
    let str2 = '';
    for (let e of aqs) {
        if (e.value.trim() !== '') {
            str2 += `<li>${e.value}</li>`;
        }
    }
    document.getElementById("aqT").innerHTML = str2;

    // Show the CV template
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// Print CV
function printCV() {
    window.print();
}
