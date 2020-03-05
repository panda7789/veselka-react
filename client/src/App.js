import React from 'react';
import { Container, Row, } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HeadImage from './components/head_image';
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';

const App = () => {
    return (
        <Container>
            <div className="box-shadow">
                <Row>
                    <HeadImage />
                </Row>
                <Row>
                    <Menu />
                </Row>
                <Row>
                    <Content />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </div>
        </Container>
    )
};

export default App;