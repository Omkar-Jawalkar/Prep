const CurryQuestion = () => {
    /* *
     *
     * const sum = curry();
     * sum(1) // 1
     * sum(1) // 2
     * sum(1) // 3
     *
     *
     *
     *
     *
     **/

    const curry = () => {
        let sum = 0;
        return (...args) => {
            const arrSum = args.reduce((acc, curr) => {
                return acc + curr;
            }, 0);
            sum += arrSum;
            console.log(sum);
        };
    };

    const sum = curry();
    sum(2, 3, 3);
    sum(2);
    sum(3);
    sum(4);

    return <div>CurryQuestion</div>;
};

export default CurryQuestion;
