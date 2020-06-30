import React, { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
var api_url = process.env.REACT_APP_API_URL;


export class Akce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            akce: []
        };
    }

    componentDidMount() {
        fetch(api_url + '/api/akce')
        .then(res => res.json())
        .then((data) => {
            this.setState({ akce: data });
        })
        .catch(console.log)
    }

    render() {
        return (
            <Col sm={8}>
                <div className="content">
                    <h3>Plánované akce</h3>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Datum konání</th>
                            <th>Název akce</th>
                            <th>Místo konání</th>
                            <th>Typ akce</th>
                        </tr>
                        </thead>
                        { this.state.akce && this.state.akce.map((akc) => (
                        <tbody>
                            <td>{new Date(akc.datum).toLocaleDateString('cs-cz')}</td>
                            <td>{akc.nazev}</td>
                            <td>{akc.misto}</td>
                            <td>{akc.typ}</td>
                        </tbody>
                        ))}
                    </Table>
                </div>
            </Col>
        )
    }
}