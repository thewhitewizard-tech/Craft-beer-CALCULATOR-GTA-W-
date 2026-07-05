const recipes = {

    wheatMash:{
        makes:1,
        ingredients:{
            "Water Bottles":8,
            "Wheat":5,
            "Sugar":6
        }
    },

    craftBeer:{
        makes:10,
        ingredients:{
            "Wheat Mash":8,
            "Yeast":4
        }
    }

};

function calculate(){

    const wanted = parseInt(document.getElementById("amount").value);

    if(isNaN(wanted) || wanted <= 0){
        return;
    }

    const cycles = Math.ceil(wanted / recipes.craftBeer.makes);

    const wheatMash = recipes.craftBeer.ingredients["Wheat Mash"] * cycles;
    const yeast = recipes.craftBeer.ingredients["Yeast"] * cycles;

    const water = wheatMash * recipes.wheatMash.ingredients["Water Bottles"];
    const wheat = wheatMash * recipes.wheatMash.ingredients["Wheat"];
    const sugar = wheatMash * recipes.wheatMash.ingredients["Sugar"];

    document.getElementById("results").innerHTML = `
        <h2>Results</h2>

        Craft Beer Wanted: <b>${wanted}</b><br>
        Craft Beer Cycles: <b>${cycles}</b><br><br>

        Wheat Mash Needed: <b>${wheatMash}</b><br>
        Yeast Needed: <b>${yeast}</b><br><br>

        <h3>Base Ingredients</h3>

        Water Bottles: <b>${water}</b><br>
        Wheat: <b>${wheat}</b><br>
        Sugar: <b>${sugar}</b>
    `;
}
