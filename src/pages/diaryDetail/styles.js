import {StyleSheet} from "react-native";


export default StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#cccccc',
    },
    title: {
        flex: 1,
    },
    title_text: {
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
    },
    header_left: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_right: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pagerView: {
        flex: 1,
    },
    pagerViewItem: {
        flex: 1,
        backgroundColor: 'pink',
    },
    pagerItemScroll: {
        flex: 1,
    },
    mood:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'white'
    },
    moodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginRight: 5,
    },
    moodItemText: {
        color: 'white',
        marginRight: 5
    },
    moodTitleText: {
      fontWeight: '600',
      fontSize: 20,
      color: 'black'
    },
    time: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'white',
        borderBottomWidth: 0.5,
        borderColor: '#cccccc',
        borderStyle: 'solid',
    },
    timeText: {
        fontSize: 18,
    },
    webView: {
        flex: 1,
        backgroundColor: 'black',
    }
})