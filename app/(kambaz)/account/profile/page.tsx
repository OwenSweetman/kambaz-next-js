import { FormControl, Button } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4">Profile</h1>
      <FormControl defaultValue="alice"
                   className="mb-2" />
      <FormControl type="password"
                   defaultValue="123"
                   className="mb-2" />
      <FormControl defaultValue="Alice"
                   className="mb-2" />
      <FormControl defaultValue="Wonderland"
                   className="mb-3" />
      <Button variant="danger"
              className="w-100">
        Sign out
      </Button>
    </div>
  );
}