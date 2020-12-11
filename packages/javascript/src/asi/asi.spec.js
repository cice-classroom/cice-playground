describe('automatic semicolon insertion', () => {
  it('should add semicolons in special cases', () => {
    ;[1].map(x => x)
    ;(() => {})()
  })
})
