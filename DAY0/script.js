function calculateSI() {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);

    if (p === 0 || r === 0 || t === 0) {
        document.getElementById("result").innerHTML = "Please enter all values";
        return;
    }

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML = "Simple Interest = " + si;
}