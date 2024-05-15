"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLogger = void 0;
function SimpleLogger(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log('SimpleLogger: Creating instance of', constructor.name);
            super(...args);
        }
    };
}
exports.SimpleLogger = SimpleLogger;
