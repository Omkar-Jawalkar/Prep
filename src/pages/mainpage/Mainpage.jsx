import SearchBar from "../../components/SearchBar/SearchBar";
import { questionData } from "../../constants/Questions";
import { useState, useEffect } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
const Mainpage = () => {
    const [filteredQuestionData, setFilteredQuestionData] =
        useState(questionData);

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <div className="w-full flex space-y-10 flex-col justify-center items-center">
            <SearchBar
                questionData={questionData}
                setFilteredQuestionData={setFilteredQuestionData}
            />

            {/* **********************************************************************************
             *
             *
             *     LIST OF QUESTIONS
             *
             *
             **************************************************************************************/}

            <div className=" flex flex-wrap justify-center items-center gap-6 px-4 py-2 ">
                {console.log(filteredQuestionData)}
                {filteredQuestionData.map((question) => {
                    return <QuestionCard key={question.id} {...question} />;
                })}
            </div>
        </div>
    );
};

export default Mainpage;
