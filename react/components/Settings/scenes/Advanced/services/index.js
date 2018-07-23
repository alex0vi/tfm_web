import R          from 'ramda';
const fs          = require('fs'); // inout

const ADDR_CONST  = require('../../../../../../js/devel/constants/addresses/constants.js');
const FS_UTILS    = require('../../../../../../js/devel/modules-system/module-operations-fs');

const {
    HTML_SEP_CHAR,
    ADDRESS_FROM_MODULE_TO_BG_FOLDER, // as a test we save it in our module folder
    SAVESTATE_ADRESS_MODULE,
} = ADDR_CONST;


const {
    getFolderElements,
} = FS_UTILS;

const IMAGE_LIST = {
    ".JPG": true,
    ".PNG": true,
    ".GIF": true,
    ".SGV": true,
    ".TIF": true,
    ".BMP": true,
    ".XCF": true,
    ".PSD": true,
    ".PCD": true,
    ".JPEG": true
};

const isImage = (imageName) => {
    let extension = imageName.substr(imageName.length - 4).toUpperCase();
    console.log("is image? ", extension);
    return extension in IMAGE_LIST;
};



const deleteElement = (addressToFolder) => (file) => {

    // if (isImage(file)) {
    //     fs.unlink('' + addressToFolder + HTML_SEP_CHAR + file, function (err) {
    //         if (err) return console.log(err);
    //         console.log('file deleted successfully');
    //     });
    //     console.log("erase procedure");
    // }
    // else {
        // console.log(file, "not image");
        fs.unlink('' + addressToFolder + HTML_SEP_CHAR + file, function (err) {
            if (err) return console.log(err);
            // console.log('file deleted successfully');
        });
    // }
}

/**
 * given an address from the module, it erases all the content of the folder if it is an image
 * @param addressToFolder
 */
const cleanAFolder = (addressToFolder) => {

    let path = addressToFolder();

    return getFolderElements(path)
        .then( (files) => {
            console.log("start erasing");
            R.map( deleteElement(path) , files);
        });
};



/**
 * List here all the folders that needs to be clean from Library/AppData
 */
const cleanAllFolders = () => {
    let p1 = cleanAFolder(ADDRESS_FROM_MODULE_TO_BG_FOLDER);
    let p2 = cleanAFolder(SAVESTATE_ADRESS_MODULE);
    return Promise.all([p1,p2]).then( () => 'Success');
};


export {
    cleanAllFolders
}
