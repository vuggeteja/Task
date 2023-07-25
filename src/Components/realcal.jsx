import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  // State to handle the selected date
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={6}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
