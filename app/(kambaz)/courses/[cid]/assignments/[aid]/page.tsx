import { Button, Form } from "react-bootstrap";
export default function EditAssignment() {
  return (
    <div id="wd-edit-assignment-screen" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text"
            defaultValue="A1 - HTML" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea"
            rows={6}
            defaultValue="Assignment description here..." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number"
            defaultValue={100} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <div className="text-end">
          <Button variant="secondary"
            className="me-2">
            Cancel
          </Button>
          <Button variant="danger">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}