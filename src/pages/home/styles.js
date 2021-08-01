import {Dimensions, StyleSheet} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {getHeight, getWidth} from "../../utils/fitSize";

export default StyleSheet.create({
    carousel: {
        // flex: 1,
        height: getHeight(1300),
        width: windowWidth,
        marginTop: getHeight(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        height: 230,
    },
    scrollWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    scrollItem: {
        height: '80%',
        width: 150,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    scrollItemImg: {
        width: '100%',
        height: '100%',
    },
})