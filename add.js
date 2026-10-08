const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "Logs");

// Create Logs directory if it does not exist
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Change current working directory to Logs
process.chdir(logDirectory);

// Create 10 log files
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;

  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(fileName);
}
