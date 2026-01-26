export default function Modules() {
  return (
    <div>
      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish-all">
        <option value="publish">Publish All</option>
        <option value="unpublish">Unpublish All</option>
      </select>
      <button id="wd-add-module">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Lecture 1 - Building React User Interfaces</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">What is Web Development?</li>
                <li className="wd-content-item">Setting up the Development Environment</li>
                <li className="wd-content-item">Creating a React Application</li>
                <li className="wd-content-item">Getting started with the Assignment 1</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Installing Node.js</li>
                <li className="wd-content-item">Creating a Next.js React Application</li>
                <li className="wd-content-item">Commit your source to GitHub.com</li>
                <li className="wd-content-item">Deploying to Vercel</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Lecture 2</div> </li>
        <li className="wd-module">
          <div className="wd-title">Lecture 3</div> </li>
      </ul>
    </div>
  );
}
