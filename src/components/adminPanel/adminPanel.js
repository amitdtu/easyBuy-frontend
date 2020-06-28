import React, { useState } from "react";
import { Tabs, Tab, Container, Table, Button } from "react-bootstrap";

export default function AdminPanel() {
  const [key, setKey] = useState("tab-1");

  return (
    <Container className="h-100 mt-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="tab-1" title="Pending">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "5rem" }}>S No.</th>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Address</th>
                <th style={{ width: "15rem" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Delivered
                  </Button>
                  <Button size="sm" variant="danger">
                    Not Delivered
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Delivered
                  </Button>
                  <Button size="sm" variant="danger">
                    Not Delivered
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Delivered
                  </Button>
                  <Button size="sm" variant="danger">
                    Not Delivered
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="tab-2" title="Delivered">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "5rem" }}>S No.</th>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="tab-3" title="Not Delivered">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "5rem" }}>S No.</th>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Address</th>
                <th style={{ width: "15rem" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Try Again
                  </Button>
                  <Button size="sm" variant="danger">
                    Cancel
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Try Again
                  </Button>
                  <Button size="sm" variant="danger">
                    Cancel
                  </Button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Toy</td>
                <td>Amit</td>
                <td>
                  <p className="mb-1">T Block, House No. 507, Mangol Puri</p>
                  <p className="mb-1">Delhi-110083</p>
                  <p className="mb-1 ">
                    <span className="font-weight-bold">Phone No:-</span>{" "}
                    8846687413
                  </p>
                </td>
                <td>
                  <Button size="sm" variant="primary" className="mr-2">
                    Try Again
                  </Button>
                  <Button size="sm" variant="danger">
                    Cancel
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
}
