import { writeFile, appendFile, readFile, unlink } from "fs";
const logFile = "app.log";

// 1. WRITE to a file (this overwrites the file if it exists)
writeFile(logFile, "Log started at " + new Date() + "\n", (err) => {
  if (err) return console.error("Error writing file:", err);
  console.log("1. Log file created.");

  // 2. APPEND to the file (this adds to the end)
  appendFile(logFile, "User logged in.\n", (err) => {
    if (err) return console.error("Error appending to file:", err);
    console.log("2. User activity appended.");

    // 3. READ the file to see the result
    readFile(logFile, "utf8", (err, data) => {
      if (err) return console.error("Error reading file:", err);
      console.log(
        "3. Current log content:",
        "\n" +
          data
            .split("\n")
            .filter((str) => str !== "")
            .map((str) => "--- " + str)
            .join("\n"),
      );

      // 4. DELETE the file to clean up
      unlink(logFile, (err) => {
        if (err) return console.error("Error deleting file:", err);
        console.log("4. Log file deleted.");
      });
    });
  });
});
