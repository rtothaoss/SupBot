import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";


const styles = {
    jumbotron: {
        marginTop: "40px"
    }
}


class Bot extends Component {

    state = {
        card1: {
            name: '',
            email: '',
            telephone: '',
            address: '',
            zipcode: '',
            city: '',
            cc: '',
            ccMonth: '',
            ccYear: '',
            CVV: ''
        },
        card2: {
            name: '',
            email: '',
            telephone: '',
            address: '',
            zipcode: '',
            city: '',
            cc: '',
            ccMonth: '',
            ccYear: '',
            CVV: ''
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmitCard1 = event => {
        event.preventDefault();
        this.setState({
            card1: {
                name: this.state.name,
                email: this.state.email,
                telephone: this.state.telephone,
                address: this.state.address,
                zipcode: this.state.zipcode,
                city: this.state.city,
                cc: this.state.cc,
                ccMonth: this.state.ccMonth,
                ccYear: this.state.ccYear,
                CVV: this.state.CVV
            }
        }, () => {
            console.log(this.state.card1)
        })
    };


    handleFormSubmitCard2 = event => {
        event.preventDefault();
        this.setState({
            card2: {
                name: this.state.name,
                email: this.state.email,
                telephone: this.state.telephone,
                address: this.state.address,
                zipcode: this.state.zipcode,
                city: this.state.city,
                cc: this.state.cc,
                ccMonth: this.state.ccMonth,
                ccYear: this.state.ccYear,
                CVV: this.state.CVV
            }
        }, () => {
            console.log(this.state.card2)
        })
    };

    render() {
        return (
            <Container>
                <Jumbotron style={styles.jumbotron}>
                    <h1>How it works</h1>
                    <p>How card information is stored</p>
                    <p>Why two cards are used</p>
                    <p>Risks of adding multiple items to each card</p>
                </Jumbotron>
                <Jumbotron>
                    <h1>Choose your items and choose which card to put them on</h1>
                    <p>Collapsible</p>
                </Jumbotron>
                <Jumbotron>
                    <h1>CC info here</h1>
                    <p>Collapsible</p>
                    <Row>
                        <Input
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder='Full Name'
                        />

                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder='Email'
                        />

                        <Input
                            name="telephone"
                            value={this.state.telephone}
                            onChange={this.handleInputChange}
                            placeholder='Telephone'
                        />
                    </Row>
                    <Row>
                        <Input
                            name="address"
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            placeholder='Address'
                        />

                        <Input
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.handleInputChange}
                            placeholder='Zipcode'
                        />
                        <Input
                            name="city"
                            value={this.state.city}
                            onChange={this.handleInputChange}
                            placeholder='City'
                        />
                    </Row>
                    <Row>
                        <Input
                            name="cc"
                            value={this.state.cc}
                            onChange={this.handleInputChange}
                            placeholder='cc'
                        />
                        <Input
                            name="CVV"
                            value={this.state.CVV}
                            onChange={this.handleInputChange}
                            placeholder='CVV'
                        />
                        <Input
                            name="ccMonth"
                            value={this.state.ccMonth}
                            onChange={this.handleInputChange}
                            placeholder='ccMonth'
                        />
                        <Input
                            name="ccYear"
                            value={this.state.ccYear}
                            onChange={this.handleInputChange}
                            placeholder='ccYear'
                        />
                    </Row>

                    <FormBtn
                        onClick={this.handleFormSubmitCard1}
                        type='success'
                    >Search
                 </FormBtn>
                </Jumbotron>
                <Jumbotron>
                    <h1>Start bot right here and let CRON take over when to fire it off. Leave browser open.</h1>
                </Jumbotron>
            </Container>
        )
    }


}



export default Bot;