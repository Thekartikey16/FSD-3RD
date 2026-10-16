const myPromise = new Promise((resolve, reject) => {
    let age = 19;
    if (age >= 18) {
        resolve("eligible");
    } else {
        reject("not eligible");
    }
});
console.log(myPromise)