const inputs = [...document.querySelectorAll('.controls input')];

function changeValueHandler() {
    const getSuffixValue = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + getSuffixValue);
}
inputs.map((singleInput) =>
  singleInput.addEventListener('mousemove', changeValueHandler)
);
inputs.map((singleInput) =>
  singleInput.addEventListener('change', changeValueHandler)
);
