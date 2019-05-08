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
        },
        items: [],
        success: false
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

    scrapeSup = () => {
        API.scrape()
          .then(res =>
            this.setState({
              success: true,
            }))
          .catch(() => this.setState({
            books: [],
            message: "No books found! Try Again!"
          }, () => {
              console.log(this.state.success)
          })
          )
      }

      componentDidMount() {
        this.droplistLoaded();
    }

    droplistLoaded = () => {
        API.loadDroplist()
            .then(res =>
                this.setState({
                    items: res.data
                }))
            .catch(() => {console.log('error')
            }, () => {
                console.log(this.state.items)
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
                    <h1>Choose your items and choose which card to put them on</h1>
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
                        <button onClick={this.handleFormSubmit}>Test</button>
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
                            value={this.state.ccYear}
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