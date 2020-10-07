```
interface info {
  name2: string
  age: number
  getInfo(): any
  [propname: string]: any
}

function pc(first: info): object {
  return first
}

var result = pc({
  name2: 'rise',
  age: 12,
  getInfo() {
    return 'jiasheng'
  },
})

interface info2 extends info {
  getInfo2?(): string
  getInfo3(): null
}

function pc2(second: info2): object {
  return second
}

console.log(
  pc2({
    name2: 'rise',
    age: 12,
    getInfo() {
      return 'jiasheng'
    },
    getInfo3() {
      return null
    },
  }),
)
```

```
interface info {
  name2: string
  age: number
  getInfo(): any
  [propname: string]: any
}

class Person implements info {
  name2 = 'rise'
  age = 12
  getInfo() {
    return this.name2 + '-' + this.age
  }
}

let pc = new Person()
console.log(pc.getInfo())
```