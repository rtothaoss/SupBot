import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";



const styles = {
    jumbotron: {
        marginLeft: "15px",
    },
    checkout: {
        marginTop: "40px",
        marginRight: "10px"
    },
    topJumbotron: {
        marginTop: "40px",
        marginLeft: "15px",
    },
    cardInput: {
        marginLeft: "100px",
    },
    card: {
        width: "18rem",
        margin: "20px 10px",
        minHeight: '500px'
    },

}




class Bot extends Component {

    state = {
        name: '',
        email: '',
        telephone: '',
        address: '',
        zipcode: '',
        city: '',
        cc: '',
        ccMonth: '',
        ccYear: '',
        CVV: '',
        name2: '',
        email2: '',
        telephone2: '',
        address2: '',
        zipcode2: '',
        city2: '',
        cc2: '',
        ccMonth2: '',
        ccYear2: '',
        CVV2: '',
        items: [],
        success: false,

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmitCard1 = event => {

        API.createCard1({
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
        })
            .then(() => alert('card 1 saved'))
            .catch(err => console.log(err));
    };


    handleFormSubmitCard2 = event => {

        API.createCard2({
            name2: this.state.name2,
            email2: this.state.email2,
            telephone2: this.state.telephone2,
            address2: this.state.address2,
            zipcode2: this.state.zipcode2,
            city2: this.state.city2,
            cc2: this.state.cc2,
            ccMonth2: this.state.ccMonth2,
            ccYear2: this.state.ccYear2,
            CVV2: this.state.CVV2
        })
            .then(() => alert('card 2 saved'))
            .catch(err => console.log(err));
    };

    scrapeSup = () => {
        API.scrape()
            .then(res => console.log('scrape success'))
            .catch(() => {
                console.log('error')
            })

    }

    deleteDropList = () => {
        API.deleteList()
            .then(res => console.log('scrape success'))
            .catch(() => {
                console.log('error')
            })

    }

    componentDidMount() {
        this.deleteDropList()
        this.scrapeSup();
        setTimeout(() => {this.droplistLoaded()}, 2500)
    }

    droplistLoaded = () => {
        API.loadDroplist()
            .then(res =>
                this.setState({
                    items: res.data
                }))
            .catch(() => {
                console.log('error')
            })

    }

    handleFormSubmit = event => {

        API.card1picks({
            category: 'accessories',
            title: "Diamond Plate Zippo",
            itemColor: "Black",
            itemSize: "Large"
        })
            .then(res => console.log('it worked!'))
            .catch(err => console.log(err));
    };

    render() {
        return (
           <>
                <Row>
                    <Col size="md-10">
                        <Jumbotron style={styles.topJumbotron}>
                            <h1>How it works</h1>
                            <p>How card information is stored</p>
                            <p>Why two cards are used</p>
                            <p>Risks of adding multiple items to each card</p>

                        </Jumbotron>


                        <Jumbotron style={styles.jumbotron}>
                     
                                        <Row>
                                        {this.state.items.map(item => (
                                            <Col size="md-3">
                                                <Card style={styles.card}
                                                    key={item._id}
                                                    title={item.title}
                                                    img={'https://www.supremecommunity.com' + item.img}
                                                    summary={item.summary}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                
                </Jumbotron>
                </Col>
                            <Col size="md-2">
                                <Jumbotron style={styles.checkout}>
                                    <h1>Checkout</h1>
                                    <h3>Card 1</h3>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <button>Add Selection</button>
                                    <br></br>
                                    <br></br>
                                    <h3>Card 2</h3>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <button>Add Selection</button>
                                    <br></br>
                                    <br></br>
                                    <h3>Bot Functions</h3>
                                    <button onClick={this.droplistLoaded}>Test</button>
                                    <button>Run Bot Card#1</button>
                                    <button>Run Bot Card#2</button>
                                </Jumbotron>
                            </Col>
                </Row>
                        <Row>
                            <Col size='md-5'>
                                <Jumbotron style={styles.jumbotron}>
                                    <h1>CC#1 info here</h1>
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
                                            value={this.state.card1ccYear}
                                            onChange={this.handleInputChange}
                                            placeholder='ccYear'
                                        />
                                    </Row>

                                    <FormBtn
                                        onClick={this.handleFormSubmitCard1}
                                        type='success'
                                    >Submit
                 </FormBtn>
                                </Jumbotron>
                            </Col>
                            <Col size='md-5'>
                                <Jumbotron style={styles.jumbotron}>
                                    <h1>CC#2 info here</h1>
                                    <p>Collapsible</p>
                                    <Row>
                                        <Input
                                            name="name2"
                                            value={this.state.name2}
                                            onChange={this.handleInputChange}
                                            placeholder='Full Name'
                                        />

                                        <Input
                                            name="email2"
                                            value={this.state.email2}
                                            onChange={this.handleInputChange}
                                            placeholder='Email'
                                        />

                                        <Input
                                            name="telephone2"
                                            value={this.state.telephone2}
                                            onChange={this.handleInputChange}
                                            placeholder='Telephone'
                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            name="address2"
                                            value={this.state.address2}
                                            onChange={this.handleInputChange}
                                            placeholder='Address'
                                        />

                                        <Input
                                            name="zipcode2"
                                            value={this.state.zipcode2}
                                            onChange={this.handleInputChange}
                                            placeholder='Zipcode'
                                        />
                                        <Input
                                            name="city2"
                                            value={this.state.city2}
                                            onChange={this.handleInputChange}
                                            placeholder='City'
                                        />
                                    </Row>
                                    <Row>
                                        <Input
                                            name="cc2"
                                            value={this.state.cc2}
                                            onChange={this.handleInputChange}
                                            placeholder='cc'
                                        />
                                        <Input
                                            name="CVV2"
                                            value={this.state.CVV2}
                                            onChange={this.handleInputChange}
                                            placeholder='CVV'
                                        />
                                        <Input
                                            name="ccMonth2"
                                            value={this.state.ccMonth2}
                                            onChange={this.handleInputChange}
                                            placeholder='ccMonth'
                                        />
                                        <Input
                                            name="ccYear2"
                                            value={this.state.ccYear2}
                                            onChange={this.handleInputChange}
                                            placeholder='ccYear'
                                        />
                                    </Row>

                                    <FormBtn
                                        onClick={this.handleFormSubmitCard2}
                                        type='success'
                                    >Submit
                 </FormBtn>
                                </Jumbotron>
                            </Col>
                        </Row>
                
           </>
                    )
                }
            
            
            }
            
            
            
export default Bot;