const makeList = document.getElementById("makeList");
let make = makeList.value;

makeList.addEventListener("change", () => {
    make = makeList.value;
    getModels(make);
});


async function getModels(make) {
    const API_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        appendModels(data);
    } catch (error) {
        console.error("Error fetching models:", error);
    }



}

function appendModels(models) {
    const uiElem = document.getElementById("modelList");
    uiElem.innerHTML = "";
    for (const model of models.Results) {
        const listItem = document.createElement('li');
        listItem.innerText = model.Model_Name;
        uiElem.appendChild(listItem);
    }
}



