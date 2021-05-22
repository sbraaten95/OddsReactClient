import "./Question.css";

function Question() {
  const [occurrenceTypes, setOccurrenceTypes] = useState([]);
  return (
    <div className="Question">
      <form>
        <h1>What type of occurrence would you like to report?</h1>
        <select></select>
        <h3>If you can't find the right type above, add a new one here: </h3>
        <input type="text" name="occurrenceType" id="newOccurrenceType" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Question;
