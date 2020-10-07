#### 基础类型 
```
let vname: string = 'rise'
let vage: number = 100
let vsex: string = 'boy'

let nul: null = null
let und: undefined = undefined
let sym: symbol = Symbol('rise')

let obj: {
  user: string
  age: number
  sex: string
} = {
  user: 'rise',
  age: 12,
  sex: 'boy',
}

let arr: string[] = ['apply', 'pipe', 'dog']
let arr2: number[] = [1, 2, 3]

let arr3: Array<string> = ['rise', '100', 'boy']
console.log(arr3, 'arr3')

//函数定义
let fn: () => 12
let fn2: () => {}
let fn3: () => string = () => ''

//类
class pc {}
let pj: pc = new Date()
let pj2: pc = new pc()

//any
let an1: any = ''
let an2: any = []
let an3: Array<any> = ['rise', 100, true, {}]
console.log(an3)

//never
function initLook(): never {
  while (true) {}
}
function error(message: string): never {
  throw new Error(message)
}

//类型转换
let someValue: any = 100
let s1: string = someValue as string
let s2: string = <string>someValue

//类型推断
let some1 = 'rise'
let some2 = 100
let some3 = {}
```