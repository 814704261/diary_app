import Storage from "./index";

export {
    save,
    read,
    clearAllDataByKey,
    clearAll,
    getBatchDataWithIds,
    getBatchData,
    findAllIdByKey,
    findAllDataByKey,
    deleteOne,
}

/**
 *
 * 保存数据
 * @param key String 保存数据的键
 * @param data Object 要保存的数据
 * @param id Number 使用key和id来保存数据，一般是保存同类别（key）的大量数据。所有这些"key-id"数据共有一个保存上限（无论是否相同key）
 * @param expires Number 指定过期时间，如果不指定过期时间，则会使用defaultExpires参数，如果设为null，则永不过期
 * @return Premise
*/
function save (key, data, id, expires=null){
    return Storage.save({
        key, // 注意:请不要在key中使用_下划线符号!
        data,
        id,
        // 如果不指定过期时间，则会使用defaultExpires参数
        // 如果设为null，则永不过期
        expires,
    })
}

/**
 *
 * 读取数据
 * @param key String 读取数据的键
 * @param id Number 键名的id
 * @param autoSync Object autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
 * @param syncInBackground Boolean syncInBackground(默认为true)意味着如果数据过期，在调用sync方法的同时先返回已经过期的数据。
 * @param syncParams Object 你还可以给sync方法传递额外的参数
 * @return Premise
 */

function read (key, id, autoSync, syncInBackground, syncParams){
    return Storage.load({
            key,
            id,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync, // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            syncInBackground,
            // 你还可以给sync方法传递额外的参数
            syncParams
        })
}

/**
 *
 * 获取某个key下的所有id(仅key-id数据)
 * @param key String 读取数据的键
 * @return Promise
 */

function findAllIdByKey (key){
    // 获取某个key下的所有id(仅key-id数据)
    return Storage.getIdsForKey(key)
}


/**
 *
 * 获取某个key下的所有数据(仅key-id数据)
 * @param key String 读取数据的键
 * @return Promise
 */

function findAllDataByKey (key){
    return Storage.getAllDataForKey(key)
}

/**
 *
 * 清除某个key下的所有数据(仅key-id数据)
 * @param key String 读取数据的键
 * @return Promise
 */
function clearAllDataByKey (key){
    return Storage.clearMapForKey(key);
}

/**
 *
 * // 删除单个数据
 * @param key String 读取数据的键
 * @param id Number id值
 * @return Promise
 */

function deleteOne(key, id){
    if (id) return Storage.remove({key, id})
    return Storage.remove({key})
}



/**
 *
 * 清空map，移除所有"key-id"数据（但会保留只有key的数据）
 */
function clearAll(){
    return Storage.clearMap()
}

/**
 * 使用和load方法一样的参数读取批量数据，但是参数是以数组的方式提供。会在需要时分别调用相应的sync方法，最后统一返回一个有序数组。
 * @param array Array [{ key: 'user', id: '1009' }] or [{ key: 'user' }]
 */

function getBatchData(array){
    return Storage.getBatchData(array)
}

/**
 * //根据key和一个id数组来读取批量数据
 * @param key String
 * @param ids Array
 */

function getBatchDataWithIds (key, ids) {
    return Storage.getBatchDataWithIds({
        key,
        ids
    })
}

