import {Dimensions, StyleSheet} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {getHeight, getWidth} from "../../utils/fitSize";


export default StyleSheet.create({
  container:{
    width: getWidth(900),
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 700
  },
  top: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topImg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottom: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bottomBtn: {
    width: getWidth(700),
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03A9F4',
    borderRadius: 25,
  },
  bottomBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})