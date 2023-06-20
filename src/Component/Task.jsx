import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class Task extends React.Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center p-3">
          <div className="logo">Logo</div>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="buttons">
            <button className="btn btn-primary">
              <i className="bi bi-gear"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-bell"></i>
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-person"></i>
            </button>
          </div>
        </header>

        {/* Article Section */}
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Local Body Details
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {/* Sectional part for Local Body Details */}
                Details of Local Body Details accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Permit & Occupancy Details
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {/* Sectional part for Permit & Occupancy Details */}
                Details of Permit & Occupancy Details accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Survey
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {/* Sectional part for Survey */}
                Details of Survey accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Owner
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {/* Sectional part for Owner */}
                Details of Owner accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Assess
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {/* Sectional part for Assess */}
                Details of Assess accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Area
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                {/* Sectional part for Area */}
                Details of Area accordion category.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

// export default Task