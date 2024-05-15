### TypeScript Decorators Example

This project demonstrates the use of decorators in TypeScript to modify and enhance class behavior.

## Features

- **Class Decorator**: `SimpleLogger` logs the instantiation of a class.
- **Method Decorator**: `LogMethod` logs method calls and their arguments.
- **Accessor Decorator**: `MyReadOnly` makes a property read-only.

## Setup and Installation

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd typescript-decorators
```

2. **Install dependencies:**

```bash
npm install
```

3. **Build the project:**

```bash
npm run build
```

4. **Run the project:**

```bash
npm start
```

## Project Structure

- **src**: Contains the source TypeScript files.
  - `MyTestClass.ts`: Contains the `MyTestClass` class with applied decorators.
  - `decorators.ts`: Contains the `SimpleLogger`, `LogMethod`, and `MyReadOnly` decorators.
  - `index.ts`: Entry point for testing the decorators.
- **dist**: Contains the compiled JavaScript files.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project configuration and dependencies.

## Example Usage

### Class Decorator

Logs when an instance of `MyTestClass` is created:

```typescript
@SimpleLogger
class MyTestClass {
  // class implementation
}
```

### Method Decorator

Logs method calls and arguments:

```typescript
@LogMethod
method1(): void {
  console.log(`Method1 called: prop1 = ${this.prop1}`);
}
```

### Accessor Decorator

Prevents modification of a property:

```typescript
@MyReadOnly
get prop3(): string {
  return this._prop3;
}
```

## Testing Decorators

In the `src/index.ts` file, we test the decorators by creating instances and calling methods/accessors.

```typescript
import MyTestClass from './MyTestClass';

const instance = new MyTestClass('test', 42);
instance.method1();
instance.method2();

console.log(`Property prop3: ${instance.prop3}`);
try {
  (instance as any).prop3 = 'new value';  // This should throw an error
} catch (e) {
  if (e instanceof Error) {
    console.error('Error:', e.message);  // This should log the error message
  } else {
    console.error('An unknown error occurred');
  }
}

const anotherInstance = new MyTestClass('anotherTest', 99);
anotherInstance.method1();
anotherInstance.method2();

console.log(`Property prop3: ${anotherInstance.prop3}`);
```

## Expected Output

You should see logs similar to:

```
SimpleLogger: Creating instance of MyTestClass
Calling method1:
LogMethod: Calling method1 with []
Method1 called: prop1 = test
Calling method2:
LogMethod: Calling method2 with []
Method2 called: prop2 = 42
Accessing prop3:
default
Trying to modify prop3:
Error: Cannot set property prop3
Creating a new instance of MyTestClass:
SimpleLogger: Creating instance of MyTestClass
Calling method1 on anotherInstance:
LogMethod: Calling method1 with []
Method1 called: prop1 = anotherTest
Calling method2 on anotherInstance:
LogMethod: Calling method2 with []
Method2 called: prop2 = 99
Accessing prop3 on anotherInstance:
default
```

This output confirms that the decorators are working as expected, logging method calls, preventing property modification, and logging class instantiation.

## License

This project is licensed under the ISC License.
