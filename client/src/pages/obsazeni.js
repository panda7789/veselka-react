import React, { useState } from 'react';
import { Col, Card, Row, Accordion } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Obsazeni() {
  const [activeKey, setActiveKey] = useState(0);
  return (
    <Col sm={12}>
      <div className="content">
        <h3>Obsazení</h3>
        <br></br>
        <Accordion onSelect={e => setActiveKey(e)} defaultActiveKey={0}>
          <CardCollapse title='Zpěvy' names={['Soňa Rifflerová','Markéta Tichá','Pavel Braun']} id={0} activeKey={activeKey} />
          <CardCollapse title='Křídlovky' names={['Milan Novák','Pavel Braun','Tomáš Braun','Jiří Šimek']} id={1} activeKey={activeKey} />
          <CardCollapse title='Tenor' names={['Jaroslava Jašková']} id={2} activeKey={activeKey} />
          <CardCollapse title='Baryton' names={['Stanislav Veselý']} id={3} activeKey={activeKey} />
          <CardCollapse title='Klarinety' names={['Eva Nejedlá','Zdeněk Nejedlý']} id={4}activeKey={activeKey}/>
          <CardCollapse title='Tuba' names={['Radoslav Tichý']} id={5} activeKey={activeKey} />
          <CardCollapse title='Bicí' names={['František Nejedlý']} id={6} activeKey={activeKey} />
          <CardCollapse title='Doprovodná sekce' names={['Lukáš Linhart','Pavel Kozák']} id={7} activeKey={activeKey} />
        </Accordion>
      </div>
    </Col>
  );
}


class CardCollapse extends React.Component {
  render() {
    var componentsWithNames = this.props.names.map((name, i) => {
      return <MyCard cardName={name} key={i} />
    });

    var iconClassNames = (this.props.activeKey === this.props.id) ? "fa-chevron-down" : "fa-chevron-left";

    return (
      
      <Card>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={this.props.id} onClick={this.clickHandler}>
        <i className={iconClassNames + " fa float-right"}></i>
          <h5>
            {this.props.title}
          </h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            <Row>
              {componentsWithNames}
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}

CardCollapse.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.string)
};

class MyCard extends React.Component {
  render() {
    return (
      <Col sm={3}>
        <Card>
          <Card.Body>
            <h5 className="card-title">{this.props.cardName}</h5>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
