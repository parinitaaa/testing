// data
let langs = [
    { name: "JavaScript", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "Java", votes: 0 },
    { name: "C++", votes: 0 }
];

// show options using map()
document.getElementById("options").innerHTML =
    langs.map((l, i) =>
        `<input type="radio" name="lang" value="${i}"> ${l.name}<br>`
    ).join("");

// vote function
const vote = () => {
    let sel = document.querySelector('input[name="lang"]:checked');

    if (!sel) {
        alert("Select one option");
        return;
    }

    // increase vote
    langs[sel.value].votes++;

    // show results using map()
    document.getElementById("results").innerHTML =
        langs.map(l => `${l.name}: ${l.votes}`).join("<br>");
};