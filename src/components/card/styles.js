import {StyleSheet} from "react-native";

let public_item = {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
}

export default StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'space-between',
    },
    title: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title_icon: {
      height: '100%',
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    touch: {
        flex: 1,
        justifyContent: 'space-between'
    },
    body: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    body_image: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottom: {
        width: '100%',
        height: 70,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    bottom_title: {
        ...public_item,
        paddingTop: 5
    },
    bottom_title_text: {
        fontWeight: '600',
        fontSize: 28,
        color: 'white',
        lineHeight: 30
    },
    bottom_line: {
        ...public_item
    },
    bottom_line_text: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white'
    },
    bottom_time: {
        ...public_item
    },
    bottom_time_text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    }
})

