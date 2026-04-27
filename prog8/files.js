const fs = require("fs");
const path = require("path");

const folderPath = "./"; // current folder

fs.readdir(folderPath, { withFileTypes: true }, (err, items) => {
    if (err) {
        console.log(JSON.stringify({ error: err.message }, null, 2));
        return;
    }

    const result = items.map(item => ({
        name: item.name,
        type: item.isDirectory() ? "directory" : "file"
    }));

    console.log(JSON.stringify(result, null, 2));
});