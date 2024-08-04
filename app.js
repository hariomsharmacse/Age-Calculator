const inputDate = document.getElementById('date');
const calBtn = document.getElementById('btn');
const output = document.getElementById('output');


calBtn.addEventListener('click', () => {
    let dob = inputDate.value;
    let dateOne = new Date(dob);
    let currDate = new Date();

    // let month = currDate.getMonth() - dateOne.getMonth();

    // let day = currDate.getDay() - dateOne.getDay();

    // let year = currDate.getFullYear() - dateOne.getFullYear();

    let differece = currDate - dateOne;

    const finalYears = Math.floor((differece/(24 * 60 * 60 * 1000))/365.25);

    output.style.display = "block";
    output.innerText = `Your are ${finalYears} years old`


})




