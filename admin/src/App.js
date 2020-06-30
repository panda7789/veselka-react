import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from './components/sidebar';
import { Switch, Route } from 'react-router-dom';
import { Aktuality } from './pages/aktuality';
import { AkceListPage } from './pages/akce_list';
import { AkceAddEditPage } from './pages/akce_add_edit';
//import { LoginModal } from './components/loginModal';
import './styles/dashboard.css'

class Menu extends React.Component {
  render() {
    return (
      <>
         <Container fluid>
                <Row>
                    <Col xs={3}  id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col xs={9} id="page-content-wrapper">
                      <Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path='/aktuality' component={Aktuality} />
                          <Route exact path='/akce' component={AkceListPage} />
                          <Route exact path='/akce_add' component={AkceAddEditPage} />
                          <Route path='/akce_edit/:id' component={AkceAddEditPage} />
                          <Route render={function (path) {
                              return <p>aaa</p>
                          }} />
                      </Switch>
                    </Col> 
                </Row>
            </Container>
            {/*<LoginModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}
        </>
    )
  }
}

export default () => {
  return (
    <Menu/>
  )
};

export const Home = (props) => (
  <h1>Default page</h1>
);