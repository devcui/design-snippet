const os = require("os");
const { spawn } = require("child_process");
const path = require("path");
const isWindows = os.platform() === "win32";
const root = path.resolve(__dirname, "../");
const bin = path.resolve(__dirname, "../node_modules/.bin");
const tsc = path.resolve(bin, isWindows ? "tsc.cmd" : "tsc");
const sass = path.resolve(bin, isWindows ? "sass.cmd" : "sass");
const tsconfig = path.resolve(root, "tsconfig.json");
const process_tsc = spawn(tsc, ["--watch", "--project", tsconfig], { stdio: "inherit", });
const process_sass = spawn(sass, ["--watch", "src:dist"], { stdio: "inherit" });
const process_tsc_index = spawn(tsc, ["--watch","./index.ts","--outDir", "./"], { stdio: "inherit", });
const process_sass_index = spawn(sass, ["--watch", "index.scss:index.css"], { stdio: "inherit" });
process_tsc.on("data", (data) => { console.log(data); });
process_sass.on("data", (data) => { console.log(data); });
process_tsc_index.on("data", (data) => { console.log(data); });
process_sass_index.on("data", (data) => { console.log(data); });
