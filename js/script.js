let nameActivity = document.getElementById('name');
let getBtn = document.getElementById('get');

let URL = 'http://www.boredapi.com/api/activity/';


let getActivity = () => {
	nameActivity.classList.remove('show');
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			nameActivity.textContent = `${data.activity}`;
			nameActivity.classList.add('show');
		});
}

getBtn.addEventListener('click', getActivity);

getActivity();
