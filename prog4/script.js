let studentCount = 0;
const passMark = 40;

function addRow() {
    studentCount++;
    const table = document.getElementById("marksTable");

    const row = table.insertRow();
    row.insertCell(0).innerHTML = "Student " + studentCount;

    for (let i = 1; i <= 3; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = "<input type='number' min='0' max='100'>";
    }
}

function calculateResults() {
    const table = document.getElementById("marksTable");
    const rows = table.rows;

    if (rows.length <= 1) {
        alert("Please add student data!");
        return;
    }

    let subjects = ["Math", "Science", "English"];
    let max = [0, 0, 0];
    let min = [100, 100, 100];
    let passCount = [0, 0, 0];
    let failCount = [0, 0, 0];

    let overallPass = 0;
    let overallFail = 0;

    for (let i = 1; i < rows.length; i++) {
        let studentPassedAll = true;

        for (let j = 1; j <= 3; j++) {
            let mark = parseInt(rows[i].cells[j].children[0].value) || 0;

            if (mark > max[j - 1]) max[j - 1] = mark;
            if (mark < min[j - 1]) min[j - 1] = mark;

            if (mark >= passMark) {
                passCount[j - 1]++;
            } else {
                failCount[j - 1]++;
                studentPassedAll = false;
            }
        }

        if (studentPassedAll) {
            overallPass++;
        } else {
            overallFail++;
        }
    }

    let totalStudents = rows.length - 1;
    let overallPassPercent = ((overallPass / totalStudents) * 100).toFixed(2);
    let overallFailPercent = ((overallFail / totalStudents) * 100).toFixed(2);

    let output = "<h2>Result Summary</h2>";

    for (let i = 0; i < 3; i++) {
        output += "<h3>" + subjects[i] + "</h3>";
        output += "Max Marks: " + max[i] + "<br>";
        output += "Min Marks: " + min[i] + "<br>";
        output += "Passed: " + passCount[i] + "<br>";
        output += "Failed: " + failCount[i] + "<br><br>";
    }

    output += "<h3>Overall Result</h3>";
    output += "Overall Pass Percentage: " + overallPassPercent + "%<br>";
    output += "Overall Fail Percentage: " + overallFailPercent + "%<br>";

    document.getElementById("result").innerHTML = output;
}
