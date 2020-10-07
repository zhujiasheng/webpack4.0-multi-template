#### get set 形式写法
```
class Xiaojiejie {
  private _age: number = 1
  get age() {
    return this._age
  }
  set age(value) {
    this._age = value
  }
}

let aa = new Xiaojiejie()
aa.age = 100
console.log(aa.age, 'aa')
```


#### coustructor
```
class Parent {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getInfo() {
    return this.name
  }
}
```

#### static
```
class Parent2 {
  name: string = 'rise'
  age: number
  sex: string

  static getInfo() {
    return this.name
  }
}
```

#### public protected private
```
class Parent {
  public name: string = 'rise'
  protected age: number = 12
  private sex: string = 'boy'

  getInfo() {
    console.log(this.name)
    console.log(this.age)
    console.log(this.sex)
  }
}

class Person extends Parent {
  constructor() {
    super()
  }

  getInfo() {
    console.log(this.name)
    console.log(this.age)
    console.log(this.sex)
  }
}

var r = new Parent()
r.getInfo()
```

#### readonly
```
class Parent {
  public readonly _name: string = 'rise'
  readonly _age: number = 12
  readonly _sex: string = 'boy'

  constructor() {
    console.log(this._name)
    console.log(this._age)
    console.log(this._sex)
  }

  setInfo(){
    this._name = 'rise' //error
  }

  getInfo(){
    return this._name
  }
}

let result = new Parent()
```

#### abstract
```
abstract class Parent {
  name: string
  abstract getName(): string
  age: number
  abstract getAge(): number
  sex: string
  abstract getSex(): string
  getInfo() {
    return this.name + '-' + this.age + this.sex
  }
}

class Parent2 extends Parent {
  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getSex() {
    return this.sex
  }

  setName(name: string): void {
    this.name = name
  }
}

let pp = new Parent2()
console.log(pp.getName())
pp.setName('rise')
console.log(pp.getName())
```