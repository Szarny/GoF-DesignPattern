// Target
interface HasSuccessor {
  successor(a: number): number
}

// Adaptee
class Calc {
  public add(a: number, b: number) {
    return a + b
  }

  public sub(a: number, b: number) {
    return a - b
  }
}

// Adapter
class Successor extends Calc implements HasSuccessor {
  public successor(a: number) {
    return this.add(a, 1)
  }
}

const main = () => {
  const h: HasSuccessor = new Successor()
  console.log(h.successor(1))
}

main()