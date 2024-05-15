"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = exports.LogMethod = exports.SimpleLogger = void 0;
// SimpleLogger decorator
function SimpleLogger(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log('SimpleLogger: Creating instance of', constructor.name);
            super(...args);
        }
    };
}
exports.SimpleLogger = SimpleLogger;
// LogMethod decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`LogMethod: Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}
exports.LogMethod = LogMethod;
// MyReadOnly decorator
function MyReadOnly(target, propertyKey, descriptor) {
    descriptor.set = function () {
        throw new Error(`Cannot set property ${propertyKey}`);
    };
}
exports.MyReadOnly = MyReadOnly;
