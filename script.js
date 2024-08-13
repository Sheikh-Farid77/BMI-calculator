const result = document.getElementById('result');


function myFunction (){
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    if(isNaN(age) || age <= 0){
        result.textContent = "Please select a valid age"
        return;
    }else if
    (isNaN(weight) || weight <= 0 && isNaN(height) || height <= 0){
        result.textContent = "Please select a valid weight or height"
        return;
    }

    const bmi = weight / (height * height);
    if(bmi < 18.5){
        result.innerHTML = `
        <p> Your BMI is: ${bmi.toFixed(1)}</p>
        <p>You are underweight.</p>`
        return;

    }else if(bmi >= 18.5 || bmi <= 24.9){
        result.innerHTML = `
        <p> Your BMI is: ${bmi.toFixed(1)}</p>
        <p>You have a healthy weight.</p>`
        return;

    }else if(bmi >= 25 || bmi <= 29.9){
        result.innerHTML = `
        <p> Your BMI is: ${bmi.toFixed(1)}</p>
        <p>You are overweight.</p>`
        return;
    }else{
        result.innerHTML = `
        <p> Your BMI is: ${bmi.toFixed(1)}</p>
        <p>You are obese.</p>`
        return;
    }
    
    


}

function reset(){
    window.location.reload();

}

