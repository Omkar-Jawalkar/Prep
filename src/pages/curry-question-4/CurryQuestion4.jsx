const CurryQuestion4 = () => {
    /* *
     *
     * const total = sum(10)(20)(30)(40)()
     *  console.log(total) //
     *
     * NOTE 1 - The sum function should return a function that should print the sum of previous arguments passes
     *          as an integer to it.
     *
     * NOTE 2 - The sum function if called with arguments then it should sum up and give the total sum of arguments passed
     *          if no arguments given the function should print the total sum of arguments before
     *
     *
     *
     *
     *
     */

    const sum = (...args) => {
        const storage = [...args];

        if (args.length === 0) {
            return 0;
        }

        const temp = function (...args2) {
            if (args2.length === 0) {
                return storage.reduce((acc, curr) => acc + curr, 0);
            }
            storage.push(...args2);
            return temp;
        };

        return temp;
    };

    const total = sum(10)();
    console.log(total);
    return <div>CurryQuestion4</div>;
};

export default CurryQuestion4;
