import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import renderApp from "./dist/server/ServerApp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.port || 3001;

const html = fs.readFileSync(path.resolve(__dirname, "./dist/client/index.html")).toString();

const parts = html.split("not rendered");

const app = express();
app.use("./assets", express.static(path.resolve(__dirname, "./dist/client/assets")));
app.use((req, res) => {
    res.write(parts[0]) // deliver everything that's in head

    const stream = renderApp(req.url, {
        onShellReady() {
            // if it was a crawler, do nothing here
            stream.pipe(res)
        },
        onShellError() {
            // todo: error handling
        },
        onAllReady() {
            // if it was a crawler then 
            // stream.pipe(res)

            res.write(parts[1]) // deliver the rest
            res.end();
        },
        onError(err) {
            console.log(err)
        }
    })
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);