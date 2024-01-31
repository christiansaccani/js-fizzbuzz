const grillElement = document.querySelector("#grill");

for (let i=1; i<=100; i++) {
    // console.log(i);
    const newElement = document.createElement("div");
    newElement.className = "square";

    grillElement.append(newElement);

    if (i % 3 == 0 && i % 5 != 0) {
        newElement.innerHTML = "fizz";
    } else if (i % 3 != 0 && i % 5 == 0) {
        newElement.innerHTML = "buzz";
    } else if (i % 3 == 0 && i % 5 == 0) {
        newElement.innerHTML = "fizzbuzz";
    } else {
        newElement.innerHTML = i;
    }
}