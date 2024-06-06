import { useState, useEffect } from "react";
import axiosInstance from "../../axios/axiosInstance";
import TimetableTable from "./TimetableTable";

const Timetable = () => {
    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(null);
    const [timetable, setTimetable] = useState(null);

    const createEntry = () => {
        setLoading(true);
        axiosInstance
            .post("createEntry/", {
                timetableData: data,
                schoolId: 1,
            })
            .then((res) => {
                setTimetable(res.data.timetable);
                setDone(true);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setDone(false);
                setLoading(false);
            });
    };

    const generateTimetable = async () => {
        await axiosInstance
            .get("getTimetable/?schoolId=1")
            .then((res) => {
                setTimetable(res?.data?.timetableData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log(timetable);
    }, [timetable]);

    const handleFileChange = () => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const csv = e.target.result;
            const lines = csv.split("\n");
            const headers = lines[0].split(",");
            const parsedData = [];

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(",");
                if (values.length === headers.length) {
                    const obj = {};
                    for (let j = 0; j < headers.length; j++) {
                        obj[headers[j].trim()] = values[j].trim();
                    }
                    parsedData.push(obj);
                }
            }

            console.log("parsedData", parsedData);
            setData(parsedData);
        };

        reader.readAsText(file);
        createEntry();
    };

    return (
        <div>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".csv"
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleFileChange()}
            >
                {loading ? "Saving..." : "Save"}
            </button>

            {done !== null && (
                <h1 className="">{done ? "Sucessfully" : "Failed"}</h1>
            )}

            <div className="p-4 text-center">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => generateTimetable()}
                >
                    {loading ? "Generating.." : "Generate Timetable"}
                </button>
            </div>

            {timetable !== null && (
                <div className="p-5">
                    {Object.keys(timetable).map((key) => (
                        <div className="p-4" key={key}>
                            <h1>{key}</h1>
                            <TimetableTable data={timetable[key]} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timetable;
