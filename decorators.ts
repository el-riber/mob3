// SimpleLogger decorator
export function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        console.log('SimpleLogger: Creating instance of', constructor.name);
        super(...args);
      }
    };
  }
  
  // LogMethod decorator
  export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`LogMethod: Calling ${propertyKey} with`, args);
      return originalMethod.apply(this, args);
    };
  }
  
  // MyReadOnly decorator
  export function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    descriptor.set = function () {
      throw new Error(`Cannot set property ${propertyKey}`);
    };
  }
  
  