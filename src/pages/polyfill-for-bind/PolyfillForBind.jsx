import { useEffect } from "react";

let obj = {
    firstName: "Omkar",
    lastName: "Jawalkar",
};

const printName = function (city, state) {
    console.log(
        this.firstName + " " + this.lastName + " " + city + " " + state
    );
};

Function.prototype.myBind = function (...args) {
    let obj = this;
    console.log(args);
    let params = args.slice(1);
    console.log(params);
    return (...args2) => {
        obj.apply(args[0], [...params, ...args2]);
    };
};

const PolyfillForBind = () => {
    /*
     *
     *
     *
     * Create Duplicate methord like Bind, which can be executed on each function
     *
     */

    useEffect(() => {
        const printName2 = printName.myBind(obj, "Latur");
        printName2("Maharashta");
    }, []);

    return <div>PolyfillForBind</div>;
};

export default PolyfillForBind;
