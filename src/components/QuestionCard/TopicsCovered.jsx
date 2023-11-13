import PropTypes from "prop-types";

const TopicsCovered = ({ title }) => {
    return <span className="px-3 m-1 rounded-full bg-white/30">{title}</span>;
};

TopicsCovered.propTypes = {
    title: PropTypes.string,
};

export default TopicsCovered;
