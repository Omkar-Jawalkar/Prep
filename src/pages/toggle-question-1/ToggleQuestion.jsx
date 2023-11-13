const ToggleQuestion = () => {
    /*
     *
     *  Toggle Question
     *
     * const displayToggle = toggle("args1", "args2", "args3")
     * displayToggle() // args1
     * displayToggle() // args2
     * displayToggle() // args3
     *
     * NOTE 1 - displayToggle() is a function that prints the arguments passed to it in sequence
     *
     * NOTE 2 - if Only one argument is passes it will only print that argument
     *
     */

    const toggle = (...data) => {
        let printIndex = 0;
        return () => {
            if (data.length > 0) {
                console.log(data[printIndex++]);

                if (printIndex >= data.length) {
                    printIndex = 0;
                }
            }
        };
    };

    const printToggleValues = toggle("helo", "Mummy");
    printToggleValues();
    printToggleValues();

    return (
        <div>
            <button
                onClick={() => {
                    toggle();
                }}
            >
                CLICK to toggle
            </button>
        </div>
    );
};

export default ToggleQuestion;
