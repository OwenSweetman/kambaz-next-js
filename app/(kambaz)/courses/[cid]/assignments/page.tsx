import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "../modules/GreenCheckmark";
import Link from "next/link";
export default function Assignments() {
  return (
    <div id="wd-assignments-screen" className="p-3">
      <div className="mb-3">
        <Button variant="danger"
          className="float-end ms-2"
          id="wd-add-assignment-btn">
          <FaPlus className="me-2" />
          Assignment
        </Button>
        <Button variant="secondary"
          className="float-end"
          id="wd-add-group-btn">
          <FaPlus className="me-2" />
          Group
        </Button>
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            id="wd-search-assignment"
            placeholder="Search for Assignment" />
        </InputGroup>
      </div>
      <div className="clearfix"></div>
      <ListGroup className="rounded-0">
        <ListGroup.Item className="border-start border-4 border-success">
          <GreenCheckmark />
          <Link href="/kambaz/courses/1234/assignments/1"
            className="fw-bold text-decoration-none text-dark ms-2">
            A1 - HTML
          </Link>
          <div className="text-muted small ms-4">
            Multiple Modules | <span className="text-danger">Not available until</span> May 6 at 12:00am |
            <span className="text-success"> Due</span> May 13 at 11:59pm | 100 pts
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="border-start border-4 border-success">
          <GreenCheckmark />
          <Link href="/kambaz/courses/1234/assignments/2"
            className="fw-bold text-decoration-none text-dark ms-2">
            A2 - CSS
          </Link>
          <div className="text-muted small ms-4">
            Multiple Modules | <span className="text-success">Due</span> May 20 at 11:59pm | 100 pts
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}