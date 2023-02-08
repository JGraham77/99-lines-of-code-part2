// Array of my friends
let friends = ['Chad', 'Dylan', 'Nels', 'Austin', 'Kevin'];

// Grab button from HTML
let btn = document.getElementsByClassName('btn');

// Song happens after button is clicked
btn[0].addEventListener('click', function () {
    for (let i = 0; i < friends.length; i++) {
        //Create div and h3
        const div = document.createElement("div");
        const heading = document.createElement("h3");


        // Append div to body
        document.body.appendChild(div);

        // Assign class name to div
        div.className = "friend";

        // Adding h3 to div
        div.innerHTML = "<h3 class='name'>" + friends[i].toUpperCase() + "</h3>";

        // Loop to add song to page
        for (let j = 99; j > 0; j--) {
            if (j === 1) {
                const p = document.createElement("p");
                p.innerHTML = j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
                div.appendChild(p);
            } else {
                const p = document.createElement("p");
                p.innerHTML = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file";
                div.appendChild(p);
            }
        };
    };

});
