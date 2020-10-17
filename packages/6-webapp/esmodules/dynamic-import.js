const value = 'bar'
// https://github.com/tc39/proposal-top-level-await
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
;(async () => {
  const module = await import(`./${value}.js`)
  console.warn(module.sayHello())
})()
