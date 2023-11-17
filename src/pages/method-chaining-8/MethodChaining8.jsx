const MethodChaining8 = () => {
    /*
     *
     *
     * const totalAmount = computeAmount().lack(7).crore(10).thousand(12).value();
     *
     *  Note - There is a computeAmount() which initializes the total amount and it has other methods to calculate like lack, crore, thousand
     *          The  method returns the total summed amount and terminates the function.
     *
     */

    const computeAmount = () => {
        let totalAmount = 0;

        const amountObject = {
            lacs: function (num) {
                console.log("mythis ", this);
                totalAmount += num * 100000;
                return this;
            },
            crore: function (num) {
                totalAmount += num * 10000000;
                return this;
            },
            thousand: function (num) {
                totalAmount += num * 1000;
                return this;
            },
            value: function () {
                let finalAmount = totalAmount;
                totalAmount = 0;
                return finalAmount;
            },
        };
        return amountObject;
    };

    const totalAmount = computeAmount()
        .lacs(15)
        .crore(5)
        .crore(2)
        .lacs(20)
        .thousand(45)
        .crore(7)
        .lacs(15)
        .value();

    const totalAmount2 = computeAmount()
        .lacs(115)
        .crore(5)
        .crore(2)
        .lacs(20)
        .thousand(45)
        .crore(7)
        .lacs(15)
        .value();
    console.log(totalAmount);
    console.log(totalAmount2);

    return <div>MEthod Chaining</div>;
};

export default MethodChaining8;
