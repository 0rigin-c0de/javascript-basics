function makechng(Amount, coins) {
  var remainAmt = 0;

  if (Amount % 0.5 < Amount) {
    coins[2] = parseInt(Amount / 0.5);
    remainAmt = Amount;
    Amount = remainAmt;
  }
  if (Amount % 0.25 < Amount) {
    coins[3] = parseInt(Amount / 0.25);
    remainAmt = Amount;
    Amount = remainAmt;
  }

  if (Amount % 0.05 < Amount) {
    coins[1] = parseInt(Amount / 0.05);
    remainAmt = Amount;
    Amount = remainAmt;
  }
}

function showChng(coins) {
  if (coins[3] > 0) {
    console.log("Number of HalfRupees - " + coins[3] + " - " + coins[3] * 0.5);
  }
  if (coins[2] > 0) {
    console.log(
      "Number of QuarterRupees - " + coins[2] + " - " + coins[2] * 0.25
    );
  }
  if (coins[1] > 0) {
    console.log("Number of 0.5Rupees - " + coins[1] + " - " + coins[1] * 0.05);
  }
}

var Amount = 100;
var coins = [];
makechng(Amount, coins);
showChng(coins);
