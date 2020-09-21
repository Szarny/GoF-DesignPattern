// Abstract Class
abstract class Decorate {
  constructor(
    protected s: string
  ) {}

  // Template Method
  protected abstract showDecoration(): string

  public show() {
    console.log(this.showDecoration())
    console.log(this.s)
    console.log(this.showDecoration())
  }
}

// Concrete Class
class DecorateWithSharp extends Decorate {
  constructor(
    protected s: string
  ) {
    super(s)
  }

  protected showDecoration() {
    return '###'
  }
}

// Concrete Class
class DecorateWithAster extends Decorate {
  constructor(
    protected s: string
  ) {
    super(s)
  }

  protected showDecoration() {
    return '***'
  }
}

const main = () => {
  const d1: Decorate = new DecorateWithSharp('Sharp')
  const d2: Decorate = new DecorateWithAster('Aster')

  d1.show()
  d2.show()
}

main()