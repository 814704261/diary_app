import { Dimensions, PixelRatio } from 'react-native';
const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;
const currentPixel = PixelRatio.get()
const {height, width} = Dimensions.get('window');

export {
    getWidth,
    getHeight,
}

function getHeight(h) {
    return h / currentPixel * (height / BASE_WIN_HEIGHT);
}


function getWidth(w) {
    return w / currentPixel * (width / BASE_WIN_WIDTH);
}