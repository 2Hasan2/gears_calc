fetch('apps.json')
	.then(response => response.json())
	.then(data => GUI(data));

function GUI(data) {
	let appOptions = document.querySelector('.container');
	data.forEach(app => {
		let appOption = document.createElement('div');
		appOption.classList.add('app-option');
		appOption.innerHTML = `
				<h2>${app.name}</h2>
				<a href="/templates/${app.url}" class="btn">Go to ${app.name}</a>
			`;
		appOptions.appendChild(appOption);
	});

}