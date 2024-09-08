const inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0];
const calBtn = document.getElementById("btn");
const output = document.getElementById("output");

calBtn.addEventListener("click", () => {
  if (inputDate.value === "") {
    alert("Please enter a valid value");
  } else {
    let birthDate = new Date(inputDate.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    console.log(d2);

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    console.log(d3, m3, y3);
    output.style.display = "block";
    output.innerText = `Your age is ${y3}years ${m3}months and ${d3}days.`;
  }
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
