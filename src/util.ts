import { log } from 'console'

export class Util {
  static greet(v: string): string {
    return `Hello ${v}`
  }

  static print(v: string): void {
    log(v)
  }

  static helloWorld(): string {
    return 'Chintu World'
  }
}
