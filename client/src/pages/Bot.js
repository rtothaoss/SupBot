import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import Modal from 'react-bootstrap4-modal'
import { ShirtDropdown, PantsizeDropdown, ShoeDropdown} from "../components/Dropdown";



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
        BASE_URL: 'https://www.supremenewyork.com/shop/all/accessories',
        CHECKOUT: 'https://www.supremenewyork.com/checkout',
        itemList1: 'Supreme®/Hanes® Tagless Tees (3 Pack)',
        name: 'Ross Carmack',
        email: "test@gmail.com",
        telephone: "2142846049",
        address: '111 Test Drive',
        zipcode: '75075',
        city: 'Plano',
        cc: '1111111111111111',
        ccMonth: '11',
        ccYear: '2021',
        CVV: '111',
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
        visible: false,
        summary: '',
        id: '',
        title: '',
        img: '',
        category: '',
        authenticated: false,
        user: {},
        card1cart: '',
        card2cart: '',
        size1: '',
        size2: '',

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


    componentDidMount() {
        this.droplistLoaded();
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

    viewModal = (item) => {
        if (!this.state.visible) {
            console.log(item)
            this.setState({
                visible: true,
                id: item.id,
                summary: item.summary,
                title: item.title,
                category: item.category,
                img: 'https://www.supremecommunity.com' + item.img
            })
        } else {
            this.setState({
                visible: false
            })
        }
    }

    dropDownSelection() {
        switch(this.state.category) {
            case 'shoes':
            return <ShoeDropdown></ShoeDropdown>
            
            
            case 'jackets':
            return <ShirtDropdown></ShirtDropdown>
           
            
            case 'sweatshirts':
            return <ShirtDropdown></ShirtDropdown>
           

            case 'tops-sweaters':
            return <ShirtDropdown></ShirtDropdown>
            

            case 'shirts':
            return <ShirtDropdown></ShirtDropdown>
          
            case 'shorts':
            return <PantsizeDropdown></PantsizeDropdown>
           

            case 'pants':
            return <PantsizeDropdown></PantsizeDropdown>
            
            case 'accessories':
            return null

            case 'hats':
            return null

            default: 
            return null

        }
    } 

    _handleNotAuthenticated = () => {
        this.setState({ authenticated: false });
      };

    //   _handleSignInClick = () => {
    //     window.open("http://localhost:3002/auth/google")
    //     this.setState({
    //         authenticated: true
    //     })
    //   };

      _handleSignInClick = () => {
        API.login()
        .then(res => {
            this.setState({
                authenticated: true
            })
        })
        .catch(() => {
            console.log('error')
        })
      }


      bot1 = () => {
          API.bot1() 
          .then(res => console.log('firing bot'))
          .catch(err => console.log(err))
      }

      bot2 = () => {
          API.bot2()
          .then(res => console.log('firing bot'))
          .catch(err => console.log(err))
      }

      addToCard1 = () => {
          console.log(this.state.title)
          this.setState({
            card1cart: this.state.title,
          })
      }

      addToCard2 = () => {
        console.log(this.state.title)
        this.setState({
          card2cart: this.state.title
        })
    }

    render() {
        return (
            <>
                <Row>
                    <Col size="md-10">
                        {/* <Jumbotron> 
                        {this.state.authenticated ? (console.log(this.state.authenticated)) : (console.log(this.state.authenticated))}
                            <button onClick={this._handleSignInClick}>Login</button>
                            </Jumbotron> */}

                        <Jumbotron style={styles.topJumbotron}>
                            <h1>How it works</h1>
                            <p>How card information is stored</p>
                            <p>Why two cards are used</p>
                            <p>Risks of adding multiple items to each card</p>

                            <Modal visible={this.state.visible} onClickBackdrop={this.modalBackdropClicked}>
                                <div className="modal-header">
                                    <h5 className="modal-title">{this.state.title}</h5>
                                </div>
                                <div className="modal-body">
                                    <img src={this.state.img} alt={this.state.title} />

                                    
                                </div>
                                <div className="modal-footer">
                                     {this.dropDownSelection()}
                                    <button type="button" className="btn btn-primary" onClick={this.addToCard1}>
                                        Add to Card 1
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={this.addToCard2}>
                                        Add to Card 2
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={this.viewModal}>
                                        Close
                                    </button>
                                </div>
                            </Modal>
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
                                            category={item.category}
                                            onClick={() => { this.viewModal(item) }}
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
                            <p>{this.state.card1cart}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button>Add Selection</button>
                            <br></br>
                            <br></br>
                            <h3>Card 2</h3>
                            <p>{this.state.card2cart}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button>Add Selection</button>
                            <br></br>
                            <br></br>
                            <h3>Bot Functions</h3>
                            <button onClick={this.droplistLoaded}>Test</button>
                            <button onClick={this.bot1}>Run Bot Card#1</button>
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
