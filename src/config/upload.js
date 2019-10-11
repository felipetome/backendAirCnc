const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        /* path usado para achar a pasta em qualquer sistema, uma vírgula é a barra ! ex: ../../ */
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    var newName = name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/\s/g, '');
    cb(null, `${newName}-${Date.now()}${ext}`);
        },
    })
}
