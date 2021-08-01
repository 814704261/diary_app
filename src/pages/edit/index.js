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
    PixelRatio, TouchableWithoutFeedback, Dimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import Header from "../../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import {RichEditor, RichToolbar, actions} from 'react-native-pell-rich-editor'
import { Input } from 'react-native-elements'
import Text from '../../components/text'
import Picker, {showDatePicker} from '../../utils/picker'


//工具类
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from "../../utils/toast";
import { dateToStr } from "../../utils/date";
import * as Store from '../../store/sync'


//样式
import styles from './styles'

// 常量
const moodData = ['愉快','开心','高兴','甜蜜','犹豫','兴奋','失落','难过','失恋','苦闷','烦躁','生气','慨愤','无所谓','不知道',]
const deviceWidth = Dimensions.get('window').width;
const deviceHeight =Dimensions.get('window').height;
// const regExp = /<img.*?src=["|']?(.*?)["|']?\s.*?>/ig;       //匹配img标签
const regExp2 = /\bsrc\b\s*=\s*['"]?([^'"]*)['"]?/i;      //匹配src属性
const regExp = /<img.*?src=["|']?(.*?)["|']?>/ig;

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
        diaryTitle: '',     //用户编写日记的标题
        diaryWords: 0,      //用户编写日记内容的字数
        images: [],         //用户选择的图片
        isVisibleModal: false, //模态框是否展示（选择拍照或者图库）
    }


    componentDidMount() {

    }

    componentWillUnmount() {
        console.warn('编辑页卸载')
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
        if(mood.length >= 3) return Toast('最多选择3个心情')

        Picker(moodData, (data)=>{
            if(mood.length == 0) {
               return this.setState({
                    mood: [...mood, data[0]]
                })
            }

            mood.forEach(value => {
                if(value == data[0]){
                    return Toast('请不要重复选择')
                }else{
                    this.setState({
                        mood: [...mood, data[0]]
                    })
                }
            })
        }).toggle()
    }

    //删除一个心情
    removeMood(index){
        let {mood} = this.state
        mood.splice(index, 1)
        this.setState({
            mood: [...mood]
        })
    }

    //返回按钮
    onBack(){
        this.props.navigation.goBack()
    }


    //编写日记标题
    onTitleChange = (e) => {
        this.setState({
            diaryTitle: e
        })
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
    onPressAddImage = (type) => {

        this.setState({
            isVisibleModal: false
        })

        if(type){
            return launchImageLibrary({
                mediaType: 'photo',
                includeBase64: true
            }, (data)=>{
                let content = `data:image/${data.assets[0].type};base64,`
                this.richText.current?.insertImage(content + data.assets[0].base64, {height: data.assets[0].height+'px'})
            })
        }


        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "时间沙漏",
                message: "时间沙漏 App needs access to your camera so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
            .then(res => {
                console.log('res',res)
                if(res !== PermissionsAndroid.RESULTS.GRANTED) return Toast('你拒绝了拍照的请求')

                launchCamera({
                    mediaType: 'photo',
                    includeBase64: true
                }, (data) => {
                    // console.log(data.assets[0])
                    let content = `data:image/${data.assets[0].type};base64,`
                    this.richText.current?.insertImage(content + data.assets[0].base64, {height: data.assets[0].height+'px'})
                })
            })
            .catch(err => {
                Toast(err)
            })

    }

    //保存日记
    onSaveDiary = (key) => {
        let {diaryTitle, diaryContent, diaryWords, mood, time, images} = this.state

        if (diaryContent.length === 0){return Toast('你好像还没编辑日记')}

        let imgs = diaryContent.match(regExp)
        imgs?.forEach(img => {
            images.push(img.match(regExp2)[1])
        })

        Store.findAllDataByKey(key)
            .then(res =>{
                console.log(res)
                return Store.save(key, {
                    diaryTitle,
                    diaryContent,
                    diaryWords,
                    mood,
                    time,
                    images,
                    createTime: Date.now()
                }, res.length)
            })
            .then(() => {

            })
            .catch(err => {

            })
    }


    render() {
        let {mood, time, initHTML, diaryWords, isVisibleModal} = this.state
        return (
            <SafeAreaView style={{flex:1}}>
                <Header
                    left={<Icon name="chevron-left" size={16} color="black"/> }
                    onLeftPress={this.onBack.bind(this)}
                    right={<HeaderRight onSaveDiary={this.onSaveDiary} />}
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
                                               <TouchableOpacity key={item} onPress={this.removeMood.bind(this, index)}>
                                                   <View style={styles.moodItem}>
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

                    <View style={{height: 50}}>
                        <TextInput
                            style={styles.textInput}
                            maxLength={20}
                            placeholder='给日记起一个标题吧'
                            onChangeText={this.onTitleChange}
                        />
                    </View>

                    <RichEditor
                        ref={this.richText}
                        useContainer={true}
                        style={styles.rich}
                        // initialHeight={getHeight(1000)}
                        initialHeight={400}
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
                    onPressAddImage={() => this.setState({isVisibleModal: true})}
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


                <Modal
                    isVisible={isVisibleModal}
                    useNativeDriverForBackdrop={true}
                    onBackButtonPress={() => this.setState({isVisibleModal: false})}
                    onBackdropPress={() => this.setState({isVisibleModal: false})}
                    customBackdrop={
                        <TouchableWithoutFeedback onPress={() => this.setState({isVisibleModal: false})}>
                            <View style={{flex: 1}} />
                        </TouchableWithoutFeedback>
                    }
                    deviceHeight={deviceHeight}
                    deviceWidth={deviceWidth}
                >
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={() => this.onPressAddImage(0)}>
                            <View style={styles.modal_takePhoto} >
                                <Text>拍照</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onPressAddImage(1)}>
                            <View style={styles.modal_photos}>
                                <Text>相册</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </SafeAreaView>
        )
    }
}


function HeaderRight(props){

    function save(type){
        props.onSaveDiary && props.onSaveDiary(type)
    }


    return (
        <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => save('sketch')}>
                <View style={styles.save}>
                    <Text>存草稿</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => save('diary')}>
                <View style={styles.release}>
                    <Text style={styles.releaseText}>发布</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}