const form = document.getElementById("form"),

  inputZ = document.getElementById("teeth"),

  inputM = document.getElementById("module"),

  inputA = document.getElementById("angle"),

  output = document.getElementById("output"),

  select = document.getElementById("type"),

  array = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],

  rad = Math.PI / 180;



form.addEventListener("submit",
  function calc(event) {
    event.preventDefault();
    // main value
    let teeth = +inputZ.value,
      module = +inputM.value,
      angle = +inputA.value,
      num = +select.value;
    // clac value
    let
      OutDimeter = ((teeth + 2) * module) / Math.cos(angle * rad),
      depth = module * 2.25,
      pitch = (Math.PI * module) / Math.cos(angle * rad),
      addendum = module,
      dedendum = module * 1.25,
      pitchDiameter = (module * teeth) / Math.cos(angle * rad),
      rootDiameter = pitchDiameter - 2.5 * module,
      hexil = (num * Math.sin(angle * rad)) / module || 0;
    outPut(teeth, module, angle, OutDimeter, depth, pitch, addendum, dedendum, pitchDiameter, rootDiameter, hexil, Gears(hexil, num));

  }
)

function Gears(hexil, num) {
  if (hexil > 0.001) {
    while (true) {

      nums = array.sort(() => Math.random() - 0.5).slice(0, 4);

      outHexil = nums[0] / nums[1] * nums[2] / nums[3]
      if (Math.abs(outHexil - hexil) < 0.0001) {
        return [nums[0], nums[1], nums[2], nums[3]];
      }
    }

  }
}

function outPut() {
  console.log(arguments);

  output.innerHTML = `
  <div dir="rtl">
    <h2>القيم الاساسية</h2>
    <p>عدد الاسنان : ${arguments[0]}</p>
    <p>الموديول : ${arguments[1]}</p>
    <p>زاوية الضغط : ${arguments[2]}</p>
    <p>قطر الخارجي : ${arguments[3]}</p>
    <p>عمق الاسنان : ${arguments[4]}</p>
    <p>المسافة بين الاسنان : ${arguments[5]}</p>
    <p>المسافة بين الاسنان والقطر : ${arguments[6]}</p>
    <p>المسافة بين الاسنان والقاعدة : ${arguments[7]}</p>
    <p>قطر الاسنان : ${arguments[8]}</p>
    <p>قطر الجذر : ${arguments[9]}</p>
    <p>النسبة الحلزونية : ${arguments[10]}</p>
    <p>التروس المناسب : ${arguments[11]}</p>
</div>
`
}
