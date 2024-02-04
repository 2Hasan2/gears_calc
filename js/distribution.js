let teeth = document.getElementById("Teeth")
let base = document.getElementById("Base")
let form = document.querySelector("#form")
let outPut = document.querySelector("#outPut")

let array_2 = [16, 17, 19, 21, 23, 29, 31, 45, 46, 47, 49, 51, 53, 54, 57, 58, 59, 62, 66, 81, 83, 85, 103]

function calc(teeth, base) {
  let sw = 9999;
  if (teeth == "") return "null";
  if (array_2.includes(+teeth)) {
    outPut.innerHTML +=
      `<div class="onAdd">
                <span>
                ${base + "/" + teeth}
                </span>
                <span>
                ${Math.trunc(base / teeth) + " cricle"}
                </span>
                <span>
                ${base % teeth + " hole"}
                </span>
            </div>`

  } else {
    array_2.forEach(cr => {
      if ((cr / teeth * (base % teeth)) % 1 == 0) {
        outPut.innerHTML +=
          `<div class="onAdd">
                        <span>
                        ${base + "/" + cr}
                        </span>
                        <span>
                        ${Math.trunc(base / teeth) + " cricle"}
                        </span>
                        <span>
                        ${cr / teeth * (base % teeth) + " hole"}
                        </span>
                    </div>`
      } else {
        let math = (base * cr / teeth).toFixed(3);
        math = +math.slice(math.indexOf(".") + 1);
        if (math < sw) {
          sw = math
          outPut.innerHTML +=
            `<div>
                            <span>${base + "/" + cr}</span>
                            <span>${Math.trunc(base / teeth) + " cricle"}</span>
                            <span>${((base * cr / teeth).toFixed()) % cr + " hole"}</span>
                            <span class="add">${cr * base - teeth * (base * cr / teeth).toFixed()}</span>
                        </div>`
        } else {
        }
      }
    })
  }
}


form.addEventListener("submit", (e) => {
  e.preventDefault()
  outPut.innerHTML = ""
  calc(teeth.value, base.value)
})


function auto(start = 10, end = 1000) {
  var I = function (n) {
    return function () {
      return n++;
    };
  };
  let N = I(1)
  let notsolve = []
  let interval = setInterval(() => {
    outPut.innerHTML == "" ? notsolve.push(teeth.value) : 0;
    teeth.value = N()
    outPut.innerHTML = ""
    calc(teeth.value, base.value)
  }, start)

  setTimeout(() => {
    clearInterval(interval)
  }, end)
}
