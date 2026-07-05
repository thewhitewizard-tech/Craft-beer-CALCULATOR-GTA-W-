let amount = 10;

function changeAmount(change) {

    amount += change;

    if (amount < 10)
        amount = 10;

    document.getElementById("amountDisplay").textContent = amount;
}

function calculate() {

    const batches = amount / 10;

    const water = batches * 8;
    const wheat = batches * 5;
    const sugar = batches * 6;
    const yeast = batches * 4;

    document.getElementById("results").innerHTML = `
        <div class="header">YOU NEED</div>

        <div class="resultRow">
            <span>Water Bottles</span>
            <b>${water}</b>
        </div>

        <div class="resultRow">
            <span>Wheat</span>
            <b>${wheat}</b>
        </div>

        <div class="resultRow">
            <span>Sugar</span>
            <b>${sugar}</b>
        </div>

        <div class="resultRow">
            <span>Yeast</span>
            <b>${yeast}</b>
        </div>

        <div class="header">INFO</div>

        <div class="resultRow">
            <span>Craft Beer Wanted</span>
            <b>${amount}</b>
        </div>

        <div class="resultRow">
            <span>Batches Needed</span>
            <b>${batches}</b>
        </div>
    `;
}
