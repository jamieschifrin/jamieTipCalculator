function tipCalculate() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;
    
    var total = (billAmount * serviceQuality) / numberOfPeople;
    total = '$' + total.toFixed(2) +' each';

    document.getElementById("totalTipAmount").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
    document.getElementById("calculate").onclick = function () {
        tipCalculate();

}