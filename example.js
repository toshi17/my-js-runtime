console.log("Hello", "runjs!");
console.error("Boom!");

const path = "./log.txt";
try {
  const contens = await runjs.readFile(path);
  console.log("Read from a file", contens);
} catch (err) {
  console.error("Unable to read file", path, err);
}

await runjs.writeFile(path, "I can write to a file.");
const contents = await runjs.readFile(path);
console.log("Read from a file", path, "contents:", contents);
console.log("Removing file", path);
runjs.removeFile(path);
console.log("File removed");
