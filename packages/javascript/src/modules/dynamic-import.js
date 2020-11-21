const value = 'bar'
// https://github.com/tc39/proposal-top-level-await
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
;(async () => {
  const module = await import(`./${value}.js`)
  const module2 = await import(`./${value}.js`)
  const module3 = await import(`./${value}.js`)
  console.warn(module.sayHello())
})()

function foo() {
  return new Promise(resolve => {
    resolve(3)
  })
}

foo().then(console.log)
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
