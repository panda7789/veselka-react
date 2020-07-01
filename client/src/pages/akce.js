import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
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
            <>
            <Col sm={8}>
                <div className="content">
                    <h3 class={"display-4"}>Plánované akce</h3>
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
            <Col sm={4}>
                <div class="right">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375&tabs=events&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1606107826281502"
                        width="340"
                        height="400"
                        style={{border:'none', overflow:'hidden'}}
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media">
                    </iframe>
                </div>
            </Col>
            </>
        )
    }
}