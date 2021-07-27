import Picker from 'react-native-picker';

//创建日期数据结构
function _createDateData(){
    let date = [];
    let currDate = new Date()
    let year = currDate.getFullYear()
    let month = currDate.getMonth()+1
    for(let i=1970;i<=year;i++){
        let month = [];
        for(let j = 1;j<13;j++){
            let day = [];
            if(j === 2){
                for(let k=1;k<29;k++){
                    day.push(k);
                }
                //Leap day for years that are divisible by 4, such as 2000, 2004
                if(i%4 === 0){
                    day.push(29);
                }
            }
            else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                for(let k=1;k<32;k++){
                    day.push(k);
                }
            }
            else{
                for(let k=1;k<31;k++){
                    day.push(k);
                }
            }
            let _month = {};
            _month[j] = day;
            month.push(_month);
        }
        let _date = {};
        _date[i] = month;
        date.push(_date);
    }
    return date;
}


//打开日期选择 视图
function showDatePicker(onPickerConfirm, onPickerCancel, onPickerSelect) {
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    let day = currentDate.getDate()



    Picker.init({
        pickerTitleText: '选择时间',
        pickerCancelBtnText: '取消',
        pickerConfirmBtnText: '确定',
        selectedValue: [year, month, day],
        pickerBg: [255, 255, 255, 1],
        pickerData: _createDateData(),
        pickerFontColor: [33, 33, 33, 1],
        onPickerConfirm: (pickedValue, pickedIndex) => {
            onPickerConfirm && onPickerConfirm(pickedValue, pickedIndex)
        },
        onPickerCancel: (pickedValue, pickedIndex) => {
            onPickerCancel && onPickerCancel(pickedValue, pickedIndex)
        },
        onPickerSelect: (pickedValue, pickedIndex) => {
            onPickerSelect && onPickerSelect(pickedValue, pickedIndex)
        }
    })
    return Picker
}


function _picker(data, succeed, fail, select){
    Picker.init({
        pickerTitleText: '选择心情',
        pickerData: data,
        pickerCancelBtnText: '取消',
        pickerConfirmBtnText: '确定',
        selectedValue: [],
        onPickerConfirm: data => {
            succeed && succeed(data)
        },
        onPickerCancel: data => {
            fail && fail(data)
        },
        onPickerSelect: data => {
            select && select(data)
        }
    })
    return Picker
}

export default _picker

export {
    showDatePicker
}