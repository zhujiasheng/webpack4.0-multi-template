#### 枚举
```
enum Color {
  Red,
  Green,
  Blue,
}

let co1 = Color[0]
let co2 = Color[1]
let co3 = Color[2]

let co4: Color = Color['Red']
let co5: Color = Color['Green']
let co6: Color = Color['Blue']

enum Project {
  php = 1,
  java = 2,
  javascript = 3,
}
let phKey = Project['php']
let phValue = Project[1]
```