export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Name</h2>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" style={{ width: "400px", padding: "4px" }} />
      <br /><br />
      <textarea id="wd-assignment-description">
        The assignment is available online.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>PROJECTS</option>
              <option>EXAMS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade">
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td style={{ paddingLeft: "0px" }}>
            Online Entry Options<br />
            <label style={{ display: "block", marginLeft: "0px" }}>
              <input type="checkbox" /> Text Entry
            </label>
            <label style={{ display: "block", marginLeft: "0px" }}>
              <input type="checkbox" /> Website URL
            </label>
            <label style={{ display: "block", marginLeft: "0px" }}>
              <input type="checkbox" /> Media Recordings
            </label>
            <label style={{ display: "block", marginLeft: "0px" }}>
              <input type="checkbox" /> Student Annotations
            </label>
            <label style={{ display: "block", marginLeft: "0px" }}>
              <input type="checkbox" /> File Uploads
            </label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <div style={{ marginBottom: "12px" }}>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" defaultValue="Everyone" />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" />
            </div>
            <div>
              <div style={{ display: "inline-block", marginRight: "16px", textAlign: "left" }}>
                <label htmlFor="wd-available-from">Available from</label><br />
                <input type="date" id="wd-available-from" />
              </div>
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date" id="wd-available-until" />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr style={{ border: ".5px solid black", margin: "8px 0" }} />
      <div style={{ textAlign: "right" }}>
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    </div>
  );
}
