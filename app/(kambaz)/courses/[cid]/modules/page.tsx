import { ListGroup } from "react-bootstrap";
import { FaEllipsisV } from "react-icons/fa";
import ModulesControls from "./modulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br />
      <ListGroup id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <FaEllipsisV className="me-2 fs-4" />
            Lecture 1 - Building React User Interfaces
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <FaEllipsisV className="me-2 fs-4" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <FaEllipsisV className="me-2 fs-4" />
              READING
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <FaEllipsisV className="me-2 fs-4" />
              SLIDES
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-3 mb-5 fs-5 border-gray bg-secondary">
          <FaEllipsisV className="me-2 fs-4" />
          Lecture 2
          <ModuleControlButtons />
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-3 mb-5 fs-5 border-gray bg-secondary">
          <FaEllipsisV className="me-2 fs-4" />
          Lecture 3
          <ModuleControlButtons />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
