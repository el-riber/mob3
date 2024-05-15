import { SimpleLogger, LogMethod, MyReadOnly } from './decorators';

@SimpleLogger
class MyTestClass {
  constructor(public prop1: string, public prop2: number) {}

  @LogMethod
  method1(): void {
    console.log(`Method1 called: prop1 = ${this.prop1}`);
  }

  @LogMethod
  method2(): void {
    console.log(`Method2 called: prop2 = ${this.prop2}`);
  }

  private _prop3: string = 'default';

  @MyReadOnly
  get prop3(): string {
    return this._prop3;
  }
}

export default MyTestClass;


