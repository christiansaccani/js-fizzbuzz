const grillElement = document.querySelector("#grill");

for (let i=1; i<=100; i++) {
    // console.log(i);
    const newElement = document.createElement("div");
    newElement.className = "square";

    grillElement.append(newElement);

    if (i % 3 == 0 && i % 5 != 0) {

        newElement.innerHTML = "fizz";
        newElement.style.backgroundColor = "#dee5e3";
        newElement.style.color = "black";

    } else if (i % 3 != 0 && i % 5 == 0) {

        newElement.innerHTML = "buzz";
        newElement.style.backgroundColor = "#dad0af";
        newElement.style.color = "black";

    } else if (i % 3 == 0 && i % 5 == 0) {

        newElement.innerHTML = "fizzbuzz";
        newElement.style.backgroundColor = "#c8a566";

    } else {
        newElement.innerHTML = i;
    }
}