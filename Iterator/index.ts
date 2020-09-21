import { Aggregate, Iterator } from './interfaces'

class User {
  constructor(
    private name: string,
    private age: number
  ) {}

  public getName() {
    return this.name
  }

  public getAge() {
    return this.age
  }

  public introduceMyself() {
    return `I am ${this.name}, ${this.age} years old.`
  }
}

class Users implements Aggregate {
  constructor(
    private users: User[] = []
  ) {}

  public getUser(index: number): User {
    return this.users[index]
  }

  public getUsersLength(): number {
    return this.users.length
  }

  public addUser(user: User) {
    this.users.push(user)
  }

  public iterator(isReverse: boolean): Iterator {
    return new UsersIterator(this, isReverse)
  }
}

class UsersIterator implements Iterator {
  constructor(
    private users: Users,
    private isReverse: boolean,
    private index: number = 0
  ) {}

  public hasNext(): boolean {
    return this.index < this.users.getUsersLength()
  }

  public next(): User {
    const user = this.isReverse ? 
                 this.users.getUser(this.users.getUsersLength() - this.index - 1) :
                 this.users.getUser(this.index)
    this.index++
    return user
  }
}

const main = () => {
  const users = new Users()
  users.addUser(new User('Alice', 20))
  users.addUser(new User('Bob', 30))
  users.addUser(new User('Charlie', 40))

  const it = users.iterator(false)
  while (it.hasNext()) {
    console.log(it.next().introduceMyself())
  }

  const reverseIt = users.iterator(true)
  while (reverseIt.hasNext()) {
    console.log(reverseIt.next().introduceMyself())
  }
}

main()