import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-2 pb-5">
      <h2 className="text-3xl font-bold text-center text-darkColor dark:text-whiteColor ">
        {heading}
      </h2>
      <p className="text-sm text-center text-secondaryColor dark:text-lightWhiteColor">
        {subHeading}
      </p>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
};

export default SectionHeading;
