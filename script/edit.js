const range = document.querySelector(".range");
const check = document.querySelector("#check");
const money = document.querySelector(".money");
const view = document.querySelector(".page-view");
let value2;

range.addEventListener("change", handleValue);

function handleValue() {
  value2 = range.value;
  monthly();
  handlecheck();
}

function monthly() {
  let text;
  let m2;

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
}

function handlecheck() {
  if (check.checked) {
    if (value2 == 1) {
      text = "10K Pag0000000000eviews";
      m1 = 8 * 12 * 0.25;
      m2 = `$${m1}`;
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
  }
}
