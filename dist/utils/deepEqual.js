export function deepEqual(obj1, obj2) {
    // Если типы объектов не совпадают, они точно различны
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    // Если объекты являются примитивами или null, сравниваем их по значению
    if (obj1 === null ||
        typeof obj1 === 'boolean' ||
        typeof obj1 === 'number' ||
        typeof obj1 === 'string' ||
        typeof obj2 === 'boolean' ||
        typeof obj2 === 'number' ||
        typeof obj2 === 'string') {
        return obj1 === obj2;
    }
    // Если объекты являются массивами, сравниваем их элементы рекурсивно
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }
    // Если объекты являются объектами, сравниваем их свойства рекурсивно
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
    // Все остальные случаи считаем различными
    return false;
}
