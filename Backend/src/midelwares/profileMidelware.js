import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({
    dest: path.resolve(__dirname, "../../public/data/uploads"),
    limits: {
        fileSize:3e7
    }
});

export default upload