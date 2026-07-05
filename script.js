let amount = 10;

function changeAmount(change){

    amount += change;

    if(amount < 10){
        amount = 10;
    }

    document.getElementById("amount").innerText = amount;

}

function calculate(){

    let batches = amount / 10;

    let water = batches * 8;
    let wheat = batches * 5;
    let sugar = batches * 6;
    let yeast = batches * 4;

    document.getElementById("results").innerHTML = `

        <div class="section">
            YOU NEED
        </div>

        <div class="row">
            <span>Water Bottles</span>
            <strong>${water}</strong>
        </div>

        <div class="row">
            <span>Wheat</span>
            <strong>${wheat}</strong>
        </div>

        <div class="row">
            <span>Sugar</span>
            <strong>${sugar}</strong>
        </div>

        <div class="row">
            <span>Yeast</span>
            <strong>${yeast}</strong>
        </div>

        <div class="section">
            INFO
        </div>

        <div class="row">
            <span>Craft Beer Wanted</span>
            <strong>${amount}</strong>
        </div>

        <div class="row">
            <span>Batches Needed</span>
            <strong>${batches}</strong>
        </div>

    `;

}

calculate();
