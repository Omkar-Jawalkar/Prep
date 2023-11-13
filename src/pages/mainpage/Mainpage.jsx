import SearchBar from "../../components/SearchBar/SearchBar";
import { questionData } from "../../constants/Questions";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
const Mainpage = () => {
    return (
        <div className="w-full flex space-y-10 flex-col justify-center items-center">
            <SearchBar />

            {/* **********************************************************************************
             *
             *
             *     LIST OF QUESTIONS
             *
             *
             **************************************************************************************/}

            <div className=" flex flex-wrap gap-6 px-4 py-2 ">
                {questionData.map((question) => {
                    return <QuestionCard key={question.id} {...question} />;
                })}
            </div>
        </div>
    );
};

export default Mainpage;
