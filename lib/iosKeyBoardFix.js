function ioskeyBoardFix () {
  var u = window.navigator.userAgent
  var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (!isIos) {
    return false
  }
  window.scrollTo({
    top: 1,
    behavior: 'smooth'
  })
}
export default ioskeyBoardFix