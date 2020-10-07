let a: string[] = ['', 'rise']

//元组
let b: [number, string, object][] = [
  [1, 'rise', []],
  [2, 'js', [1, 2, 3]],
]
console.log(b, 'b')


type first = {
  name: string
  age: number
}

interface second {
  name: string
  age: number
}

class thrid {
  name: string
  age: number
}

const a: first[] = [{ name: 'rise', age: 1 }]
const b: second[] = [{ name: 'rise2', age: 2 }]
const c: thrid[] = [{ name: 'rise3', age: 3 }]
