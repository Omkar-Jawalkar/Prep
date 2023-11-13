import { useState, useRef, useEffect } from "react";

const StartAndStopMethod2 = () => {
    /*
     * Create a start and stop button
     * Counter should start when clicking on start of 1 second.
     * Counter should stop when clicking on stop.
     *
     * Approach -
     * Method 2 -  Using useEffect and setTimeout(()=>{}, delay)
     *
     *
     *
     *
     */

    const [timer, setTimer] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const myTimeoutId = useRef(null);

    const handleStart = () => {
        setStartTimer(true);
    };
    const handleStop = () => {
        setStartTimer(false);
        clearTimeout(myTimeoutId.current);
    };

    useEffect(() => {
        if (startTimer) {
            myTimeoutId.current = setTimeout(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        return () => {
            clearTimeout(myTimeoutId.current);
        };
    }, [startTimer, timer]);

    return (
        /* ****************************************************************************************************
         *
         *
         *  Method 2 -  Using useEffect and setTimeout(()=>{}, delay)
         *
         *
         * **************************************************************************************************** */

        <div>
            <div className="p-2">
                <h1>Timer - {timer}</h1>
            </div>
            <button
                className="bg-green-200 p-2 m-2"
                onClick={() => {
                    handleStart();
                }}
            >
                Start
            </button>
            <button
                className="bg-red-200 p-2 m-2"
                onClick={() => {
                    handleStop();
                }}
            >
                Stop
            </button>
        </div>
    );
};

export default StartAndStopMethod2;
