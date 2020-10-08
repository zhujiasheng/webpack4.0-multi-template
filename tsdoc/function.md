//函数
function showMess(): void {}

function showMess2(name: string, age: number): any {
  return name + age
}

function showMess3(v: Object[]) {
  return v
}

type parmasObj = {
  name?: string
  age?: number | string | object
  propname?: any
}

function showMess4(v: parmasObj) {
  return v
}

function showMess5({ first, second }: { first: number; second?: any }) {
  return first + '-' + second
}

function showMess6(name: string, age: number, sex: string): string[] {
  return []
}
