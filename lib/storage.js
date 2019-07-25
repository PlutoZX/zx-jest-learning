/**
 * 设置sessionStorage
 * @param {String} key 名称
 * @param {String, Object} value 设置的数据，将被转换为字符串
 */
var setSessionItem = function (key, value) {
  var str = JSON.stringify(value)
  window.sessionStorage[key] = str
}

/**
 * 获取sessionStorage
 * @param {String} key sessionStorage的key值
 */
var getSessionItem = function (key) {
  if (window.sessionStorage[key]) {
    return JSON.parse(window.sessionStorage[key])
  } else {
    return false
  }
}

/**
 * 移除sessionStorage
 * @param {String} key sessionStorage的key值
 */
var removeSessionItem = function (key) {
  if (!window.sessionStorage.getItem(key)) {
    return false
  }
  return !window.sessionStorage.removeItem(key)
}

/**
 * 设置localStorage
 * @param {String} key localStorage的key值
 * @param {String, Object} value 
 */
var setLocalItem = function (key, value) {
  return window.localStorage.setItem(
    key,
    encodeURIComponent(
      typeof value === 'object' ? JSON.stringify(value) : String(value)
    )
  )
}

/**
 * 获取localStorage
 * @param {String} key localStorage的key值
 */
var getLocalItem = function (key) {
  if (decodeURIComponent(window.localStorage.getItem(key)).match(/\{/)) {
    return JSON.parse(decodeURIComponent(window.localStorage.getItem(key)))
  }
  return decodeURIComponent(window.localStorage.getItem(key)) === 'null' ? false : decodeURIComponent(window.localStorage.getItem(key))
}

/**
 * 移除localStorage
 * @param {String} key localStorage的key值
 */
var removeLocalItem = function (key) {
  if (!window.localStorage.getItem(key)) {
    return false
  }
  return !window.localStorage.removeItem(key)
}

export default {
  setSessionItem,
  getSessionItem,
  removeSessionItem,
  setLocalItem,
  getLocalItem,
  removeLocalItem
}
