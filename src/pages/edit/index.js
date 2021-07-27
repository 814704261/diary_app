import React, {PureComponent, createRef} from 'react';
import {
    ScrollView,
    StatusBar,
    View,
    Button,
    TextInput,
    PermissionsAndroid,
    TouchableOpacity,
    ToastAndroid,
    Image,
    Keyboard,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import {RichEditor, RichToolbar, actions} from 'react-native-pell-rich-editor'
import { Input } from 'react-native-elements'
import Text from '../../components/text'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { dateToStr } from "../../utils/date";


import styles from './styles'

import Picker, {showDatePicker} from '../../utils/picker'

export default class Edit extends PureComponent{

    constructor(props) {
        super(props);
        this.richText = createRef()
    }

    state = {
        mood: [],   //日记选择的心情
        time: dateToStr('yyyy-MM-dd',Date.now()),   //日记选择的时间
        initHTML: '', //用户日记html数据
        diaryContent: '',  //用户编写的日记内容
        diaryWords: 0,      //用户编写日记内容的字数
    }


    componentDidMount() {

    }

    //用户选择时间
    onChooseTime(){
        showDatePicker((value)=>{
            this.setState({
                time: value.join('-')
            })
        }).show()
    }

    //用户选择心情
    onChooseMood(){
        let {mood} = this.state
        Picker([
            '愉快',
            '开心',
            '高兴',
            '甜蜜',
            '犹豫',
            '兴奋',
            '失落',
            '难过',
            '失恋',
            '苦闷',
            '烦躁',
            '生气',
            '慨愤',
            '无所谓',
            '不知道',
        ], (data)=>{
            this.setState({
                mood: [...mood, data[0]]
            })
        }).toggle()
    }

    //删除一个心情
    removeMood(index){
        let {mood} = this.state
        mood.splice(index, 1)
        this.setState({
            mood
        })
    }

    //返回按钮
    onBack(){
        this.props.navigation.goBack()
    }


    //富文本注册RichToolbar
    editorInitializedCallback = () => {
        this.richText.current?.registerToolbar(function (items) {
            // console.log('Toolbar click, selected items (insert end callback):', items);
        });
    }

    //富文本输入事件
    handleChange = (data)=>{
        this.setState({
            diaryContent: data,
            diaryWords: data.length
        })
    }


    //富文本添加图片
    onPressAddImage(){

    }

    render() {
        let {mood, time, initHTML, diaryWords} = this.state
        return (
            <SafeAreaView style={{flex:1, justifyContent: 'space-between'}}>
                <Header
                    left={<Icon name="chevron-left" size={16} color="black"/> }
                    onLeftPress={this.onBack.bind(this)}
                    right={<HeaderRight />}
                />


                <ScrollView
                    centerContent={true}
                    ref={r => this.scrollRef = r}
                    style={styles.scrollView}
                >

                    {/*选择心情日期位置等等*/}
                    <View>

                        <TouchableOpacity onPress={this.onChooseMood.bind(this)}>
                            <View style={[styles.listItem, {borderBottomWidth:0.5}]}>
                                <View style={styles.listItem_left}>
                                    <Text style={styles.blodText}>心情：</Text>
                                    {mood.length === 0 && <Text style={{marginLeft: 20}}>请选择</Text>}
                                    {
                                        mood.length > 0 && mood.map((item, index) => {
                                            return (
                                               <TouchableOpacity onPress={this.removeMood.bind(this, index)}>
                                                   <View key={item} style={styles.moodItem}>
                                                       <Text style={{color: 'white'}}>{item}</Text>
                                                       <Icon name='close' size={10} color='white' style={{marginLeft: 5}} />
                                                   </View>
                                               </TouchableOpacity>
                                            )
                                        })

                                    }
                                </View>
                                <View style={styles.listItem_right}>
                                    <Icon name='chevron-right' color='black' size={15} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onChooseTime.bind(this)}>
                            <View style={[styles.listItem]}>
                                <View style={styles.listItem_left}>
                                    <Text style={styles.blodText}>时间：</Text>
                                    <Text style={{marginLeft: 20}}>{time}</Text>
                                </View>
                                <View style={styles.listItem_right}>
                                    <Icon name='chevron-right' color='black' size={15} />
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Input
                            style={{textAlign:'center', fontSize: 26, fontFamily: 'Cold_stone',fontWeight:'700'}}
                            maxLength={18}
                            placeholder='给日记取个标题吧'
                        />
                    </View>

                    <RichEditor
                        ref={this.richText}
                        useContainer={false}
                        style={styles.rich}
                        // initialHeight={400}
                        placeholder='开始写日记吧'
                        initialContentHTML={initHTML}
                        editorInitializedCallback={this.editorInitializedCallback}
                        onChange={this.handleChange}
                        editorStyle={{
                            backgroundColor: 'white',
                            caretColor: '#303F9F',
                            contentCSSText: 'font-size: 16'
                        }}
                        pasteAsPlainText={true}
                    />

                </ScrollView>

                <RichToolbar
                    getEditor={() => this.richText}
                    editor={this.richText}
                    selectedIconTint={'#2095F2'}
                    disabledIconTint={'#bfbfbf'}
                    iconSize={24}
                    style={{backgroundColor: 'white', borderBottomWidth:0.5, borderTopWidth:0.5}}
                />

                <RichToolbar
                    getEditor={() => this.richText}
                    editor={this.richText}
                    selectedIconTint={'#2095F2'}
                    disabledIconTint={'#bfbfbf'}
                    onPressAddImage={this.onPressAddImage}
                    actions={[
                        actions.undo,
                        actions.redo,
                        actions.insertImage,
                        actions.setStrikethrough,
                        actions.checkboxList,
                        actions.insertOrderedList,
                        actions.blockquote,
                        actions.alignLeft,
                        actions.alignCenter,
                        actions.alignRight,
                        actions.code,
                        actions.line,
                    ]}
                    style={{backgroundColor: 'white'}}
                />


                <View style={styles.staticalWord}>
                    <Text>{diaryWords} 字</Text>
                </View>
            </SafeAreaView>
        )
    }
}


function HeaderRight(){

    function save(){

    }

    function release(){

    }

    return (
        <View style={styles.headerRight}>
            <TouchableOpacity onPress={save}>
                <View style={styles.save}>
                    <Text>存草稿</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={release}>
                <View style={styles.release}>
                    <Text style={styles.releaseText}>发布</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}