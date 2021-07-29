import {StyleSheet} from "react-native";

export default StyleSheet.create({
    headerRight: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    save: {
        paddingTop: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        borderRadius: 15,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderColor: '#999999',
        marginRight: 15,
    },
    release: {
        paddingTop: 5,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 5,
        borderRadius: 15,
        backgroundColor: 'yellow',
    },
    releaseText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
    scrollView: {
        // flex: 1,
        backgroundColor: 'white'
    },
    listItem:{
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    listItem_left: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    listItem_right: {

    },
    blodText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    rich: {
        // minHeight: 450,
        flex: 1,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: '#e3e3e3',
    },
    textInput: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'Cold_stone',
        height: '100%'
    },
    staticalWord: {
        position: 'absolute',
        bottom: 100,
        right: 15,
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    moodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginRight: 5,
    },
    modal: {
        backgroundColor: 'pink',
        width: '100%',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modal_takePhoto:{
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    modal_photos: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})