const range = document.querySelector(".range");
const check = document.querySelector("#check");
const money = document.querySelector(".money");
const view = document.querySelector(".page-view");
const dv = document.querySelector(".dv");
let value2;

range.addEventListener("change", monthly);
check.addEventListener("click", monthly);

function monthly() {
  value2 = range.value;
  let text;
  let m2;

  /* ------------------------------ neu la monthly ------------------------------ */
  if (check.checked == false) {
    if (value2 == 1) {
      text = "10K Pageviews";
      m2 = "$8";
    }
    if (value2 == 2) {
      text = "50K Pageviews";
      m2 = "$12";
    }
    if (value2 == 3) {
      text = "100K Pageviews";
      m2 = "$16";
    }
    if (value2 == 4) {
      text = "500K Pageviews";
      m2 = "$24";
    }
    if (value2 == 5) {
      text = "1M Pageviews";
      m2 = "$36";
    }

    view.innerHTML = text;
    money.innerHTML = m2;
    dv.innerHTML = "/monthly";
  } else if (check.checked == true) {
    /* ------------------------------ neu la yearly ------------------------------ */
    if (value2 == 1) {
      text = "10K Pageviews";
      m2 = "$72";
    }
    if (value2 == 2) {
      text = "50K Pageviews";
      m2 = "$108";
    }
    if (value2 == 3) {
      text = "100K Pageviews";
      m2 = "$144";
    }
    if (value2 == 4) {
      text = "500K Pageviews";
      m2 = "$216";
    }
    if (value2 == 5) {
      text = "1M Pageviews";
      m2 = "$288";
    }

    view.innerHTML = text;
    money.innerHTML = m2;
    dv.innerHTML = "/yearly";
  }
}
