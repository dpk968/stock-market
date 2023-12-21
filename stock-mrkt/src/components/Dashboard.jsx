import React,{ useEffect } from 'react';
import Highcharts from 'highcharts'
import { Container, Row, Col, Table } from 'react-bootstrap';

const Dashboard = () =>{

    useEffect(() => {
        Highcharts.chart('ch',{
            title: {
              text: 'Line Chart'
            },
           
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
              title: {
                text: 'Value'
              }
            },
            series: [{
              name: 'Series 1',
              data: [10, 20, 25, 20, 50, 30, 70, 80, 10, 110, 110, 120]
            }]
          });
      
    }, []);
    return (
        <>
        <div className="dashboard-container">
        <Container>
      <Row>
        <Col>
          <h1 className="text-left">Left Heading</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered className="rounded">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Col 1</td>
                <td>Row 1, Col 2</td>
              </tr>
              <tr>
                <td>Row 2, Col 1</td>
                <td>Row 2, Col 2</td>
              </tr>
              <tr>
                <td>Row 3, Col 1</td>
                <td>Row 3, Col 2</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table striped bordered className="rounded">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Col 1</td>
                <td>Row 1, Col 2</td>
              </tr>
              <tr>
                <td>Row 2, Col 1</td>
                <td>Row 2, Col 2</td>
              </tr>
              <tr>
                <td>Row 3, Col 1</td>
                <td>Row 3, Col 2</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table striped bordered className="rounded-table-corner">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Col 1</td>
                <td>Row 1, Col 2</td>
              </tr>
              <tr>
                <td>Row 2, Col 1</td>
                <td>Row 2, Col 2</td>
              </tr>
              <tr>
                <td>Row 3, Col 1</td>
                <td>Row 3, Col 2</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
            {/* <div className="upper-body">
                <h1>Utique Enterprises Ltd</h1>
            </div>
            <div className="lower-table"></div> */}
        </div>
            <div id="ch" style={{width:'100%',height:'50%'}}></div>
        </>
    );
}

export default Dashboard;