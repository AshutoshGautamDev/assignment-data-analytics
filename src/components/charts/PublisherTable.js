import React from "react";
import "../../assets/style.css";

const PublisherTable = ({ data }) => {
  return (
    <>
      <div className="publishers">
        <span className="header">Total : {data.length}</span>
        <table>
          <thead>
            <tr>
              <td>Publisher</td>
              <td>Impression offered</td>
            </tr>
          </thead>
          <tbody>
            {data.map(({ publisherId, impressions_offered }) => (
              <tr>
                <td>{publisherId}</td>
                <td>{impressions_offered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PublisherTable;
