import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import htmlParse from 'html-react-parser';
import clsx from 'clsx';

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
                        {
                            this.state.aktuality && this.state.aktuality.map(x => { return <Aktualita title={x.title} text={x.text} images={x.images} /> })
                        }
                    </div>
                </Col>
                <Col sm={4}>
                    <div class="right">
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLo%25C5%25A1tick%25C3%25A1-Veselka-111782970262375%2F&tabs=timeline%2Cevents&width=340&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1606107826281502"
                            style={{ border: 'none', overflow: 'hidden' }}
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

class Aktualita extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} className={"article"}>
                    <div class="article-header">
                        <h3>{this.props.title}</h3>
                        <hr />
                    </div>
                    <div class="article-content">
                        <p>{htmlParse(this.props.text)}</p>
                    </div>
                    <div class="article-images">
                        <Images images={this.props.images} />
                    </div>
                </Col>
            </Row>
        )
    }
}

class Images extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            showMoreImagesButton: this.props.images.length > 3
        }

        this.loadAllImages = this.loadAllImages.bind(this);
    }

    componentDidMount() {
        this.setState({ images: this.props.images.slice(0, 3) });
    }
    loadAllImages(){
        this.setState({
            showMoreImagesButton: false,
            images: this.props.images
        });
        
    }
    render() {
        const imageClasses = clsx(
            "thumb-max mx-auto d-block" && this.props.images.length === 1,
            "thumb" && this.props.images.length > 1
        );
        console.log(imageClasses);
        let images = this.state.images.map(img => {
            return (
                <a data-fancybox="gallery" href={img.url}>
                    <img className={this.props.images.length > 1 ? "thumb" : "thumb-max mx-auto d-block"} src={img.urlThumbnail} />
                </a>
            )
        });
        if (!images){
            return "";
        }
        images.push(this.state.showMoreImagesButton && <Button onClick={this.loadAllImages}>Více obrázků</Button>);
        return images;
    }
}