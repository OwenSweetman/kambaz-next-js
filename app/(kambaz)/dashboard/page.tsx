"use client";
import Link from "next/link";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS2345 Node JS
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Backend development fundamentals
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS3456 Databases
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    SQL and data modeling
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS4567 Algorithms
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Problem solving and complexity
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS5678 Software Eng
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    Agile and system design
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/courses/1234/home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.png" height={160} />
                <CardBody>
                  <CardTitle className="text-nowrap overflow-hidden">
                    CS6789 Cloud Computing
                  </CardTitle>
                  <CardText style={{ height: "100px" }} className="overflow-hidden">
                    AWS and distributed systems
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
