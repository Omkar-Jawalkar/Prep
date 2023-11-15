const CurryQuestion5 = () => {
    /*
     *
     *
     * function sum (a,b,c,d) {
     * return a + b + c + d;
     * }
     *
     * const curred = curry(sum)
     *
     * console.log(curred(a,b,c,d)); // Should work
     * console.log(curred(a)(b,c)(d)); // Should work
     * console.log(curred(a)(b)(c)(d)); // Should work
     *
     * Note - The curry function takes a function sum as an argument and return a function.
     *          The returned function should be able to take arguments and return check whether they are same arguments as the sum function
     *          if they are equal then execute the sum function and return the value else give the remaining values 0 and create the total
     *
     *
     *
     */

    function sum(a, b, c, d) {
        return a + b + c + d;
    }

    const curry = (fn) => {
        const helper = function (...args) {
            if (args.length >= fn.length) {
                return sum(...args);
            } else {
                const temp = (...args2) => {
                    return helper(...args, ...args2);
                };
                return temp;
            }
        };

        return helper;
    };

    const curred = curry(sum);
    console.log(curred(10, 10, 10, 10, 10));
    // console.log(curred(10)(10, 10)(10, 10));
    // console.log(curred(10)(10)(10)(10));

    return <div>CurryQuestion5</div>;
};

export default CurryQuestion5;
