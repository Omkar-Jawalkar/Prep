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
        <div className="p-4 flex justify-center items-center gap-2">
            <label htmlFor="search-bar">Search Bar</label>
            <input
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                id="search-bar"
                type="search"
                className=" "
            />
        </div>
    );
};

SearchBar.propTypes = {
    questionData: PropTypes.array.isRequired,
    setFilteredQuestionData: PropTypes.func.isRequired,
};

export default SearchBar;
