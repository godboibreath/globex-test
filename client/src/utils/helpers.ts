export const debounce: Utils.Debounce = (callback, delay) => {
    let timerId: ReturnType<typeof setTimeout>, savedArgs: unknown[];
    const debouncedFunction = (...args: unknown[]) => {
        savedArgs = args;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...savedArgs);
        }, delay);
    };

    return debouncedFunction;
};
