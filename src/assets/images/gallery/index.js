import getImagePaths from "../../../utils/getImagePaths";

const directory = require.context("./", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let images = [];
imagePaths.map((path) => images.push(require("./" + path)));

export default images;
