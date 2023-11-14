import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ questionData, setFilteredQuestionData }) => {
    // !TODO - complete search bar functionality
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        if (searchText.length > 0) {
            const filteredQuestionData = questionData.filter((question) => {
                return question.questionName
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
            });
            setFilteredQuestionData(filteredQuestionData);
        } else {
            setFilteredQuestionData(questionData);
        }

        return () => {};
    }, [searchText]);

    return (
        <div className="p-4 w-full flex justify-center items-center gap-2">
            {/* <label htmlFor="search-bar">Search Bar</label> */}
            <input
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                id="search-bar"
                type="search"
                placeholder="Search for a question..."
                className="px-4 py-2 w-1/5 shadow-lg rounded-md focus:ring-1 outline-none focus:ring-orange-800 focus:ring-inset "
            />
        </div>
    );
};

SearchBar.propTypes = {
    questionData: PropTypes.array.isRequired,
    setFilteredQuestionData: PropTypes.func.isRequired,
};

export default SearchBar;
