class Singleton {
  private static instance: Singleton
  private x: number = 0

  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  public setX(x: number) {
    this.x = x
  }

  public getX() {
    return this.x
  }
}

const main = () => {
  const s1 = Singleton.getInstance()
  s1.setX(1)
  
  const s2 = Singleton.getInstance()
  console.log(s2.getX())

  console.log(s1 === s2)
}

main()