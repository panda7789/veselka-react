import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
var api_url = process.env.REACT_APP_API_URL;

export class Aktuality extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aktuality: []
        };
    }

    componentDidMount() {
        fetch(api_url + '/api/aktuality')
        .then(res => res.json())
        .then((data) => {
            this.setState({ aktuality: data });
        })
        .catch(console.log)
    }

    render() {
        return (
            <>
            <Col sm={8}>
                <div className="content">
                    <h3 class={"display-4"}>Aktuality</h3>
                    <br></br>
                    
                </div>
            </Col>
            <Col sm={4}>
                <div class="right">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375%2F&tabs=timeline%2Cevents&width=340&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1606107826281502"
                        style={{border:'none', overflow:'hidden'}}
                        id="facebook-aktuality"
                        height="1000px"
                        width="340"
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