import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { createAktuality, getOneAktuality, updateAktuality } from '../models/aktuality';


export class AktualityAddEditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            text: '',
            images: [],
            showAlertOk: false,
            showAlertFail: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        if (this.props.match.params.id){
            getOneAktuality(this.props.match.params.id, (res) => {
                this.setState({
                    title: res.title,
                    text: res.text,
                    images: res.images
                });
            });
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({[event.target.name]: value});
    }
    handleSubmit(event) {
        var obj = {
            title: this.state.title,
            text: this.state.text,
            images: this.state.images
        }
        if (this.props.match.params.id){
            updateAktuality(this.props.match.params.id, obj, (res) => {
                this.setState({
                    showAlertOk: res,
                    showAlertFail: !res,
                });
                setTimeout(() => { 
                    this.setState({
                        showAlertOk: false,
                        showAlertFail: false}) }
                , 3000);
            });
        }
        else{
            createAktuality(obj, (res) => {
                this.setState({
                    showAlertOk: res,
                    showAlertFail: !res,
                });
                setTimeout(() => { 
                    this.setState({
                        showAlertOk: false,
                        showAlertFail: false}) }
                , 3000);
            });
        }

        event.preventDefault();
    }

    render() {
        return (
            <>
            <h1>{this.props.match && this.props.match.params.id ? "Úprava aktuality" : "Přidání aktuality"}</h1>
            <Alert variant="success" show={this.state.showAlertOk}>
                <Alert.Heading>Aktualita byla úspěšně přidána</Alert.Heading>
            </Alert>
            <Alert variant="danger" show={this.state.showAlertFail}>
                <Alert.Heading>Přidání aktuality skončilo chybou</Alert.Heading>
            </Alert>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="a">
                    <Form.Label>Nadpis</Form.Label>
                    <Form.Control name="title" value={this.state.title} onChange={this.handleChange} type="text" />
                </Form.Group>
                <Form.Group controlId="b">
                    <Form.Label>Text</Form.Label>
                    <Form.Control name="text" value={this.state.text} onChange={this.handleChange} type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {this.props.match && this.props.match.params.id ? "Upravit" : "Přidat"}
                </Button>
            </Form>
            </>
        )
    }
}