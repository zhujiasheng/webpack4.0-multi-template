function test(cont: string) {
  const div = document.createElement('div')
  div.innerHTML = cont
  document.body.append(div)
}
test('hello word')
