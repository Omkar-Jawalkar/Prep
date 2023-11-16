const MemoizeQuestion6 = () => {
    /*
     *
     *
     * const memoized = memoize(function)
     * const slow = memoized(param) // slow
     * const fast = memoized(param) // fast
     *
     *
     * Note - Memoize Function is used to cache the results and when called the function with same arguments
     *   should return the cached results instead of recomputing the results.
     *
     * Note  - Memoization can be performed on Pure functions, whose result don't change for same arguments passed.
     *
     */

    const pureFunction = (x) => {
        return x + 1;
    };

    const memoize = (fn) => {
        let cache = {};
        const memoized = (...args) => {
            const key = JSON.stringify(args);
            if (cache[key]) {
                return cache[key];
            } else {
                console.log("Recomputing");
                cache[key] = fn(...args);
                return cache[key];
            }
        };
        return memoized;
    };

    const memoized = memoize(pureFunction);
    console.log(memoized(10));
    console.log(memoized(11));
    console.log(memoized(10));

    return <div>MemoizeQuestion6</div>;
};

export default MemoizeQuestion6;
