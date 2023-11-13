import { useNavigate } from "react-router-dom";
import TopicsCovered from "./TopicsCovered";
import PropTypes from "prop-types";

const QuestionCard = (props) => {
    const { id, questionName, url, topics } = props;
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
                {topics.map((topic, index) => {
                    return <TopicsCovered key={index} title={topic} />;
                })}
            </div>
        </div>
    );
};

QuestionCard.propTypes = {
    id: PropTypes.string,
    questionName: PropTypes.string,
    url: PropTypes.string,
    topics: PropTypes.array,
};

export default QuestionCard;
