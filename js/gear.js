array = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

rad = Math.PI / 180;

["form", "teeth", "module", "angle", "output", "type"].forEach((id) => window[id] = document.getElementById(id));

form.addEventListener("submit", (e) => {
	e.preventDefault();
  	output.innerHTML = "";
  	calc(+teeth.value, +module.value, +angle.value, type.value);
} );

function calc(teeth, module, angle, type) {
	let
		OutDimeter = ((teeth + 2) * module) / Math.cos(angle * rad),
		depth = module * 2.25,
		pitch = (Math.PI * module) / Math.cos(angle * rad),
		addendum = module,
		dedendum = module * 1.25,
		pitchDiameter = (module * teeth) / Math.cos(angle * rad),
		rootDiameter = pitchDiameter - 2.5 * module,
		hexil = (type * Math.sin(angle * rad)) / module || 0;
	outPut(teeth, module, angle, OutDimeter, depth, pitch, addendum, dedendum, pitchDiameter, rootDiameter, hexil, Gears(hexil));
}

function outPut(...args){
	output.innerHTML = args.map((arg, i) => `<div>${Object.keys({teeth: "Teeth", module: "Module", angle: "Angle", OutDimeter: "OutDimeter", depth: "Depth", pitch: "Pitch", addendum: "Addendum", dedendum: "Dedendum", pitchDiameter: "PitchDiameter", rootDiameter: "RootDiameter", hexil: "Hexil", Gears: "Gears"})[i]}: ${arg}</div>`).join("");
}





function Gears(hexil) {
	let time = 0;
	if (hexil > 0.001 ) {
		while (true && time != 1000000)  {

			nums = array.sort(() => Math.random() - 0.5).slice(0, 4);

			outHexil = nums[0] / nums[1] * nums[2] / nums[3]
			if (Math.abs(outHexil - hexil) < 0.0001) {
				console.log(time);
				return [nums[0], nums[1], nums[2], nums[3]];
			}
			time++;
		}

	}
}

