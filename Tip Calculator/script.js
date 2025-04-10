let calculate = document.querySelector("#calculate");

calculate.addEventListener("click",(e) => {
    let totalBill = document.querySelector("#totalBill").value;
    let tipPercent = document.querySelector("#tipPercent").value;
    let split = document.querySelector("#split").value;

    if(totalBill === '' || tipPercent === 0 || split === 0){
        alert("Please enter values.");
        return;
    }

    let total = (totalBill * tipPercent) / split;

    let perPerson = document.querySelector("#tip");

    perPerson.innerHTML = total.toFixed(2);
})