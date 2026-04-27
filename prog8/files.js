const fs = require("fs");
const path = require("path");

const folderPath = "./"; // current folder

fs.readdir(folderPath, { withFileTypes: true }, (err, items) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    const result = items.map(item => ({
        name: item.name,
        type: item.isDirectory() ? "directory" : "file"
    }));

    console.log(JSON.stringify(result, null, 2));
});