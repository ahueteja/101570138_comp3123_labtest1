
const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "Logs");

// Check whether the Logs directory exists
if (fs.existsSync(logDirectory)) {
  const files = fs.readdirSync(logDirectory);

  // Delete all files and print their names
  files.forEach((file) => {
    const filePath = path.join(logDirectory, file);

    fs.unlinkSync(filePath);
    console.log(`Deleted: ${file}`);
  });

  // Remove the empty Logs directory
  fs.rmdirSync(logDirectory);
  console.log("Logs directory removed");
} else {
  console.log("Logs directory does not exist");
}
