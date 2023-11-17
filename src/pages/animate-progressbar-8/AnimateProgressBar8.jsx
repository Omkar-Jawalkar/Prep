import { useEffect, useState } from "react";

const AnimateProgressBar8 = () => {
    const [sec, setSec] = useState(2);
    let count = 0;
    const progressBarCSS = `
        width : 0%;
        height: 10px;
        margin: 10px 0;
        background-color : green;  
          `;

    const progress = (progressBar) => {
        progressBar.style.width = "100%";
    };
    const createProgressBar = () => {
        const ele = document.getElementById("parent");

        const progressBar = document.createElement("div");
        progressBar.style = progressBarCSS;
        progressBar.style.transition = `width ${sec}s ease`;

        setTimeout(() => {
            progress(progressBar);
        }, 100);
        ele.appendChild(progressBar);

        progressBar.addEventListener("transitionend", () => {
            count = count - 1;
            if (count >= 1) {
                createProgressBar();
            }

            console.log("transition count", count);
        });

        progressBar.removeEventListener("transitionend", () => {
            console.log("removed");
        });
    };

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <div className="flex flex-col justify-center items-center ">
            <button
                onClick={() => {
                    if (count === 0) {
                        createProgressBar();
                    }

                    count = count + 1;

                    console.log(count);
                }}
                className="px-2 py-1 bg-green-600  text-white  m-4 rounded-md"
            >
                {" "}
                Start Progress
            </button>
            <input
                value={sec}
                onChange={(e) => {
                    setSec(e.target.value);
                }}
                type="number"
            />
            <div
                style={{
                    width: "100%",
                }}
                id="parent"
            ></div>
        </div>
    );
};

export default AnimateProgressBar8;
