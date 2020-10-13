"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static log(message) {
        if (process.env.NODE_ENV !== 'test') {
            if (Array.isArray(message)) {
                console.log('APP School', ...message);
                // message = ["a", "b", "c"]
                // ...message   "a", "b", "c"
            }
            else if (typeof message === 'string') {
                console.log('APP School', message);
            }
            else {
                console.log('APP School', JSON.stringify(message));
            }
        }
    }
}
exports.default = default_1;
