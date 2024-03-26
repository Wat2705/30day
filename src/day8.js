// có 1 input chỉ đc nhập số, sử dụng oninput
// khi xóa thì phải để lại số 0
// thêm 1 input nhập tiền, format số tiền có ,

// *kiem tra max Inter
//"01,000,450...55eda"
let oldValue = 0;

function handleFraction(txt) {
  // "3333.0001"
  let arr = txt.split(".");
  return Number(arr[0]).toLocaleString() + "." + arr[1];
}

function validateNumber() {
  let txt = this.value;
  txt = txt.replaceAll(/[^0-9.-]/gim, "").replaceAll(/\.+/gim, ".");
  let number = Number(txt);
  if (isNaN(number)) {
    // khong hop
    this.value = oldValue;
  } else {
    if (number < Number.MAX_SAFE_INTEGER) {
      let validNum = number.toLocaleString(undefined, {
        maximumFractionDigits: 20,
      });
      this.value = /[0-9]*(\.[0-9]*)$/.test(txt)
        ? handleFraction(txt)
        : validNum;
      oldValue = this.value;
    } else {
      this.value = oldValue;
      document.querySelector(`#${this.id.slice(0, -6) + "_err"}`).innerHTML =
        "Số quá lớn";
    }
  }
}

let numberInput = document.getElementById("number_input");
let moneyInput = document.getElementById("money_input");

numberInput.addEventListener("input", validateNumber);
moneyInput.addEventListener("input", validateNumber);

// document.getElementById("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   for (let v of document.querySelectorAll("input")) {
//     if (v.value == "") {
//       document.querySelector(
//         `#${v.dataset.id}`
//       ).innerHTML = `* Không được để trống`;
//     } else document.querySelector(`#${v.dataset.id}`).innerHTML = "";
//   }
// });
