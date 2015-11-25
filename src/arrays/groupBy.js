'use strict';

if (!Array.prototype.groupBy) {
    /**
     * @param {Function} callback
     * @param {*} [context]
     * @return {{}}
     */
    Array.prototype.groupBy = function(callback, context) {
        if (typeof callback !== 'function') {
            throw new Error(callback + " is not a function");
        }
        let result = {};
        for (let i = 0; i < this.length; i++) {
            let value = this[i];
            let key = callback.call(context || this, value, i, this);
            if (key != null) {
                if (key in result)
                    result[key].push(value);
                else
                    result[key] = [value];
            }
        }
        return result;
    };
}

export default Array.prototype.groupBy;
