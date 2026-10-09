function saveProfile() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (name === "" || age === "" ||
        height === "" || weight === "") {

        alert("Please enter all details.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);

    window.location.href = "tracker.html";
}


function calculateBMI() {

    let height = Number(
        document.getElementById("bmiHeight").value
    );

    let weight = Number(
        document.getElementById("bmiWeight").value
    );

    if (height <= 0 || weight <= 0) {
        alert("Please enter valid values.");
        return;
    }

    let heightMeter = height / 100;

    let bmi = weight /
        (heightMeter * heightMeter);

    let status;

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if (bmi < 25) {
        status = "Normal";
    }
    else if (bmi < 30) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }

    document.getElementById("bmiResult").innerHTML =
        "BMI: " + bmi.toFixed(2) +
        "<br>Status: " + status;
}


function saveGoals() {

    let steps = document.getElementById("stepsGoal").value;
    let water = document.getElementById("waterGoal").value;
    let workout = document.getElementById("workoutGoal").value;

    localStorage.setItem("stepsGoal", steps);
    localStorage.setItem("waterGoal", water);
    localStorage.setItem("workoutGoal", workout);

    alert("Goals saved successfully!");
}