/* eslint react/prop-types: 0 */
import React from "react";

export const BreadCrumb = ({ data }) => {
  return (
    <div className="bread-crumb">
      {data.map((crumb) => {
        return (
          <>
            <span>{crumb.name}</span>
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="8"
            >
              <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
            </svg>
          </>
        );
      })}
    </div>
  );
};
