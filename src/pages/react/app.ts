interface pc {
  name?: string
  list: object
}

function test<T extends pc>(value: T[]) {
  let rec = []
}

test([
  {
    name: 'rise',
    list: [1, 2, 3],
  },
])
