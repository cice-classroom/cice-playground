export function loadJavascript() {
  var value = prompt('Which file should I load? (a, b or c)')
  import('./' + value + '.js')
}
