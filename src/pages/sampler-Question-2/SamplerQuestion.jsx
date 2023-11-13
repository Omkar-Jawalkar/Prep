const SamplerQuestion = () => {
    /*
     *
            function message(){
                console.log("heyy")
            }

     * const sample = sampler(message, 4)
     * sample() //1
     * sample() //2
     * sample() //3
     * sample() // 4 message should be displayed
     * sample()
     * sample()
     * sample()
     * sample() // message should be displayed
     *
     *
     *
     */

    const message = (args) => {
        console.log(args);
    };

    const sampler = (callback, countDelay) => {
        let count = 0;

        return (...args) => {
            count += 1;
            if (count === countDelay) {
                count = 0;
                callback(...args);
            }
        };
    };

    const sample = sampler(message, 2);
    sample("1");
    sample("2");
    sample("3");
    sample("4");
    sample("5");
    sample("6");
    sample("7");
    sample("8");

    return <div>SamplerQuestion</div>;
};

export default SamplerQuestion;
