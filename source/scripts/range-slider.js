const rangeSlider = document.getElementById('range-slider');

noUiSlider.create(rangeSlider, {
    start: [0, 900],
		connect: true,
		step: 1,
    range: {
			'min': [0],
			'max': [1000]
    }
	});

if (rangeSlider) {
	

	const inputMin = document.getElementById('input-min');
	const inputMax = document.getElementById('input-max');
	const inputs = [inputMin, inputMax];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

