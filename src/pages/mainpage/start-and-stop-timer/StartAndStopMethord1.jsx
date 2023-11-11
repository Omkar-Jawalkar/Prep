import { useRef, useState } from "react";

const StartAndStopMethord1 = () => {
    /*
     * Create a start and stop button
     * Counter should start when clicking on start of 1 second.
     * Counter should stop when clicking on stop.
     *
     * Approach -
     * Method 1 - Using useRef and setInterval
     *
     *
     *
     *
     */
    const myIntervalId = useRef(null);

    const [timer, setTimer] = useState(0);

    const handleStart = () => {
        myIntervalId.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    };
    const handleStop = () => {
        clearInterval(myIntervalId.current);
    };
    return (
        /* ****************************************************************************************************
         *
         *
         *  Method 1 -  Using useRef and setInterval
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

export default StartAndStopMethord1;
