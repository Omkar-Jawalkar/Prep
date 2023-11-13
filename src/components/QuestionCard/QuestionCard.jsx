import { useNavigate } from "react-router-dom";
import TopicsCovered from "./TopicsCovered";

const QuestionCard = ({ id, questionName, url, topics }) => {
    // !TODO - COMPLETE the UI with link(react) as top order tag

    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(`/${url}`);
            }}
            className=" border-white/30 border-2    backdrop-blur-sm bg-white/30  hover:skew-x-3 hover:duration-300  p-4 gap-3 cursor-pointer  flex flex-col rounded-xl shadow-lg "
        >
            <h1 className="text-md">Question No - {id}</h1>
            <h2 className="text-xl font-bold"> {questionName}</h2>
            <div className="flex flex-wrap">
                {topics.map((topic) => {
                    return <TopicsCovered title={topic} />;
                })}
            </div>
        </div>
    );
};

export default QuestionCard;
