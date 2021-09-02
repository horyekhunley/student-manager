import { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./App.css";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import {
  IoSchoolOutline,
  IoMan,
  IoSettings,
  IoWomanOutline,
} from "react-icons/io5";
import Container from "reactstrap/es/Container";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import axios from "axios";
interface MyState {
  students: [];
}

export class Dashboard extends Component<{}, MyState> {
  state: MyState = {
    students: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8080/list").then((res) => {
      const students = res.data;

      this.setState({ students });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <NavbarBrand className="text-white">
            <IoSchoolOutline className="font-size-xxl" />
            <span className="font-size-l ml-3">School Management App</span>
          </NavbarBrand>
        </nav>
        <Container className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  86 Students
                </CardTitle>
                <CardText>Card Text about individual students</CardText>
                <Button>Manage Students</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoSchoolOutline className="font-size-xl" />
                  15 teachers
                </CardTitle>
                <CardText>Card Text about individual teachers</CardText>
                <Button>Manage Teachers</Button>
              </Card>
            </Col>
            <Col sm="4">
              {" "}
              <Card body>
                <CardTitle tag="h5">
                  <IoSettings className="font-size-xl" />8 Staff employees
                </CardTitle>
                <CardText>Card Text about individual employees</CardText>
                <Button>Manage Employees</Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col sm="12">
              <Button block color="success">
                <span className="font-size-l">Add New Student</span>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          {this.state.students.map((student) => renderStudent(student))}
        </Container>
      </div>
    );
  }
}

function renderStudent(st: any) {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle tag="h5">
            <IoMan className="font-size-xl" />{" "}
            {st.firstName + " " + st.lastName}
          </CardTitle>
          <CardBody>
            <Row>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">Class</span>
                <span>Second Year</span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">Age</span>
                <span>{st.age}</span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">Teacher</span>
                <span>{st.teacher}</span>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Row>
              <Col sm-6>
                <Button block outline color="primary">
                  Edit
                </Button>
              </Col>
              <Col sm-6>
                <Button
                  block
                  outline
                  color="danger"
                  onClick={() => deleteStudent(st.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

function deleteStudent(id: any): void {
  axios.post(`http://localhost:8080/delete/${id}`);
}
