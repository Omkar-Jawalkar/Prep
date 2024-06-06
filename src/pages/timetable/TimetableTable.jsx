const TimeTable = ({ data }) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const periods = Array.from({ length: 7 }, (_, i) => i);

    const getCellData = (period, day) => {
        const cellData = data.find(
            (item) =>
                item.hour === period.toString() && item.day === day.toString()
        );
        return cellData || { subject: "", teacher: "" };
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="bg-gray-200 border border-gray-300 px-4 py-2"></th>
                        {days.map((day) => (
                            <th
                                key={day}
                                className="bg-gray-200 border border-gray-300 px-4 py-2"
                            >
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {periods.map((period) => (
                        <tr key={period}>
                            <th className="bg-gray-100 border border-gray-300 px-4 py-2">
                                Period {period + 1}
                            </th>
                            {days.map((day, index) => (
                                <td
                                    key={`${period}-${index}`}
                                    className="border border-gray-300 px-4 py-2"
                                >
                                    <div>
                                        {getCellData(period, index).subject}
                                    </div>
                                    <div>
                                        {getCellData(period, index).teacher}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimeTable;
