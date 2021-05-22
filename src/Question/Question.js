import React, { useEffect, useState } from "react";

import HandleQuestion from "../HandleQuestion/HandleQuestion";

import config from "../config";

import "./Question.css";

function Question() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      occurrenceType,
      occurrenceDescription,
      occurrenceBeginning,
      occurrenceEnding,
      occurrenceBeginningTime,
      occurrenceEndingTime,
    } = e.target;

    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        oT: occurrenceType.value,
        oD: occurrenceDescription.value,
        oB: occurrenceBeginning.value,
        oE: occurrenceEnding.value,
        oBT: occurrenceBeginningTime.value,
        oET: occurrenceEndingTime.value,
      }),
    });
  };
  return (
    <div className="Question">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <h1>{query}</h1> */}
        {/* <select></select>
        <h3>If you can't find the right type above, add a new one here: </h3>
        <input type="text" name="occurrenceType" id="newOccurrenceType" />
        <input type="submit" value="Add" /> */}
        {/* Temporary Code to start setting up DB */}
        Type: <input type="text" name="occurrenceType" />
        Description: <input type="text" name="occurrenceDescription" />
        Cause of Origin: <input type="text" name="occurrenceBeginning" />
        Cause of Cessation: <input type="text" name="occurrenceEnding" />
        Time Begun:
        <input type="datetime-local" name="occurrenceBeginningTime" />
        Time Ended: <input type="datetime-local" name="occurrenceEndingTime" />
        <input type="submit" value="enter" />
      </form>
    </div>
  );
}

export default Question;
