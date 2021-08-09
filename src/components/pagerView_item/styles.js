import {StyleSheet} from "react-native";


export default StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
    backgroundColor:'yellow'
  },
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
    justifyContent: 'space-between',
  },
  pagerItemScroll: {
    flex: 1,
  },
  mood:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:'white'
  },
  moodLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:'white',
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
  },
  timeTitle: {
    fontSize: 20,
    color: 'black',
  },
  timeText: {
    fontSize: 20,
  },
  timeItem: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  webView: {
    flex: 1,
    backgroundColor: 'black',
  }
})