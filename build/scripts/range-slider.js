// source/scripts/range-slider.js
var rangeSlider = document.getElementById("range-slider");
noUiSlider.create(rangeSlider, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    "min": [0],
    "max": [1e3]
  }
});
if (rangeSlider) {
  const inputMin = document.getElementById("input-min");
  const inputMax = document.getElementById("input-max");
  const inputs = [inputMin, inputMax];
  rangeSlider.noUiSlider.on("update", (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
//# sourceMappingURL=range-slider.js.map
