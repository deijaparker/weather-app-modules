document.querySelector("#cities").addEventListener("change", async function () {
    const selectedCity = this.value;
    console.log(selectedCity);
  
    const module = await import(`./${selectedCity}.mjs`);
  
    const weatherImg = module.weatherImg;
    const description = module.description;
    const backgroundColor = module.backgroundColor;
  
    document.querySelector(".weather-img").src = weatherImg;
    document.querySelector(".weather-description").textContent = description;
    document.querySelector("body").style.backgroundColor = backgroundColor;
});
