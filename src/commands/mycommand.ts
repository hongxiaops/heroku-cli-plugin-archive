import {Command} from '@oclif/command'

export default class MyCommand extends Command {
  static description = 'This is my specific command'

  async run() {
    this.log(`Hello from my specific plugin command`)
  }
}
