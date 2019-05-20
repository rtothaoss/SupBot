import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import Modal from 'react-bootstrap4-modal'
import { ShirtDropdown, PantsizeDropdown, ShoeDropdown } from "../components/Dropdown";
import './botStyle.css'
import moment from 'moment-timezone';
import Clock from 'react-live-clock';




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
    howItWorksJumbo: {
        marginTop: "40px",
        marginLeft: "15px",
        textAlign: "left"
    }

}

class Bot extends Component {

    state = {
        BASE_URL: 'https://www.supremenewyork.com/shop/all/',
        CHECKOUT: 'https://www.supremenewyork.com/checkout',
        itemList1: 'Supreme®/Hanes® Tagless Tees (3 Pack)',
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
        visible: false,
        summary: '',
        id: '',
        title: '',
        img: '',
        category: '',
        authenticated: false,
        error: null,
        user: {},
        card1cart: '',
        card2cart: '',
        size: '',
        size1selection: '',
        size2selection: '',
        categoryBot1: '',
        categoryBot2: '',
        currentDate: new Date(),
        day: '',
        time: ''

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmitCard1 = () => {

        this.setState({
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
        alert('Card 1 data updated')
    };


    handleFormSubmitCard2 = () => {

        this.setState({
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
        alert('Card 2 data updated')
    };


    componentDidMount() {
        // API.login()
        // .then(res => window.location.assign(res.request.responseURL))
        // .catch(err => console.log(err))
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
        switch (this.state.category) {
            case 'shoes':
                return <ShoeDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></ShoeDropdown>


            case 'jackets':
                return <ShirtDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></ShirtDropdown>


            case 'sweatshirts':
                return <ShirtDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></ShirtDropdown>


            case 'tops-sweaters':
                return <ShirtDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></ShirtDropdown>


            case 'shirts':
                return <ShirtDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></ShirtDropdown>

            case 'shorts':
                return <PantsizeDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></PantsizeDropdown>


            case 'pants':
                return <PantsizeDropdown name="size" value={this.state.size} onChange={this.handleInputChange}></PantsizeDropdown>

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


    _handleSignInClick = () => {
        API.login()
            .then(res => window.location.assign(res.request.responseURL))
            .catch(err => console.log(err))
    }

    buttonTest = () => {
     
    }

    accessoryBot1 = () => {
        API.accessoryBot1({
            BASE_URL: 'https://www.supremenewyork.com/shop/all/' + this.state.categoryBot1,
            CHECKOUT: 'https://www.supremenewyork.com/checkout',
            item1: this.state.card1cart,
            name: this.state.name,
            email: this.state.email,
            telephone: this.state.telephone,
            address: this.state.address,
            zipcode: this.state.zipcode,
            city: this.state.city,
            cc: this.state.cc,
            ccMonth: this.state.ccMonth,
            ccYear: this.state.ccYear,
            CVV: this.state.CVV,
        })
            .then(res => console.log('firing bot'))
            .catch(err => console.log(err))
    }

    accessoryBot2 = () => {
        API.accessoryBot2({
            BASE_URL: 'https://www.supremenewyork.com/shop/all/' + this.state.categoryBot2,
            CHECKOUT: 'https://www.supremenewyork.com/checkout',
            item2: this.state.card2cart,
            name2: this.state.name2,
            email2: this.state.email2,
            telephone2: this.state.telephone2,
            address2: this.state.address2,
            zipcode2: this.state.zipcode2,
            city2: this.state.city2,
            cc2: this.state.cc2,
            ccMonth2: this.state.ccMonth2,
            ccYear2: this.state.ccYear2,
            CVV2: this.state.CVV2,
        })
            .then(res => console.log('firing bot'))
            .catch(err => console.log(err))
    }



    botWithSize1 = () => {
        API.botWithSize1({
            BASE_URL: 'https://www.supremenewyork.com/shop/all/' + this.state.categoryBot1,
            CHECKOUT: 'https://www.supremenewyork.com/checkout',
            item1: this.state.card1cart,
            itemSize1: this.state.size1selection,
            name: this.state.name,
            email: this.state.email,
            telephone: this.state.telephone,
            address: this.state.address,
            zipcode: this.state.zipcode,
            city: this.state.city,
            cc: this.state.cc,
            ccMonth: this.state.ccMonth,
            ccYear: this.state.ccYear,
            CVV: this.state.CVV,
        })
            .then(res => console.log('firing bot'))
            .catch(err => console.log(err))
    }


    botWithSize2 = () => {
        API.botWithSize2({
            BASE_URL: 'https://www.supremenewyork.com/shop/all/' + this.state.categoryBot2,
            CHECKOUT: 'https://www.supremenewyork.com/checkout',
            item2: this.state.card2cart,
            itemSize1: this.state.size2selection,
            name2: this.state.name2,
            email2: this.state.email2,
            telephone2: this.state.telephone2,
            address2: this.state.address2,
            zipcode2: this.state.zipcode2,
            city2: this.state.city2,
            cc2: this.state.cc2,
            ccMonth2: this.state.ccMonth2,
            ccYear2: this.state.ccYear2,
            CVV2: this.state.CVV2,
        })
            .then(res => console.log('firing bot'))
            .catch(err => console.log(err))
    }



    testBot = () => {
        API.tester({
            BASE_URL: 'https://www.supremenewyork.com/shop/all/accessories',
            CHECKOUT: 'https://www.supremenewyork.com/checkout',
            item: 'Supreme®/Hanes® Tagless Tees (3 Pack)',
            name: this.state.name,
            email: this.state.email,
            telephone: this.state.telephone,
            address: this.state.address,
            zipcode: this.state.zipcode,
            city: this.state.city,
            cc: this.state.cc,
            ccMonth: this.state.ccMonth,
            ccYear: this.state.ccYear,
            CVV: this.state.CVV,
        })
    }

    addToCard1 = () => {
        console.log(this.state.title)
        this.setState({
            card1cart: this.state.title,
            categoryBot1: this.state.category,
            size1selection: this.state.size
        })
    }

    addToCard2 = () => {
        console.log(this.state.title)
        this.setState({
            card2cart: this.state.title,
            categoryBot2: this.state.category,
            size2selection: this.state.size
        })
    }

    deleteSelectionCard1 = () => {
        this.setState({
            card1cart: ''
        })
    }

    deleteSelectionCard2 = () => {
        this.setState({
            card2cart: ''
        })
    }

    whichBotToFire1 = () => {
        if(this.state.categoryBot1 === 'accessories') {
            this.accessoryBot1()
        }  else if(this.state.categoryBot2 === 'tops-sweaters') {
            this.setState({
                categoryBot1: 'tops_sweaters'
            }, ()=> {
                this.botWithSize1();
            })
        } else {
            this.botWithSize1()
        }
    }

    whichBotToFire2 = () => {
        if(this.state.categoryBot2 === 'accessories') {
            this.accessoryBot2()
        } else if(this.state.categoryBot2 === 'tops-sweaters') {
            this.setState({
                categoryBot2: 'tops_sweaters'
            }, ()=> {
                this.botWithSize2();
            })
        } else {
            this.botWithSize2()
        }
    }

 

    render() {
        const today = this.state.currentDate;
        var time = moment(today).tz('America/New_York').format('hh:mm a z')
        const day = moment(today).format("dddd");  


      
        
        return (
            <>
                <Row>
                    <Col size="md-10">
                        {/* <Jumbotron> 
                            <button onClick={this._handleSignInClick}>Login</button>
                            </Jumbotron> */}

                        <Jumbotron style={styles.howItWorksJumbo}>
                            <h1>How it works</h1>
                            <ul>
                                <li>Choose an item from the list below and add it to "Card 1" or "Card 2". Don't worry you do not have to use two cards.</li>
                                <li>You can fire off the card 1 bot seperately from the card 2 bot.</li>
                                <li>Two cards are used because Supreme does not allow you to go back and keep purchasing items with the same card on that drop day.</li>
                                <li>The bots can only take in one item a piece at this very moment. Future code will allow multiple items to be bought with the bot.</li>
                                <li>Enter in your credit card information for bot you plan on using. If you are only using the first bot then add credit card information for that bot.</li>
                                <li>The drop happens every <b>Thursday at 11am Eastern.</b> You will need to have all this information filled out before then so the bot will launch with all the correct information.</li>
                                <li>Try and do this 30 mins before the drop and leave the page open so you see the bot at work.</li>
                            </ul>


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
                            
                            {day} <Clock format={'h:mm:ss a z'} ticking={true} timezone={'US/Eastern'} />
                            
                            <h3><u>Card 1</u></h3>
                            <p>{this.state.card1cart}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button type='button' class='btn btn-dark' onClick={this.deleteSelectionCard1}>Delete Selection</button>
                            <br></br>
                            <br></br>
                            <h3><u>Card 2</u></h3>
                            <p>{this.state.card2cart}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button type='button' class='btn btn-dark' onClick={this.deleteSelectionCard2}>Delete Selection</button>
                            </Jumbotron>
                            <Jumbotron style={styles.checkout}>
                            <h1>Bot Functions</h1>
                            <div><button type='button' class='btn btn-dark' onClick={this.whichBotToFire1}>Run Bot Card#1</button></div>
                            <div><button type='button' class='btn btn-dark' onClick={this.whichBotToFire2} >Run Bot Card#2</button></div>
                            <div><button type='button' class='btn btn-dark' onClick={this.testBot}>Test Bot #1</button></div>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-5'>
                        <Jumbotron style={styles.jumbotron}>
                            <h1>CC#1 info here</h1>
                           
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    placeholder='Full Name'
                                />

                                <Input
                                    className = 'ccUserInfo'
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    placeholder='Email'
                                />
                            
                                <Input
                                    className = 'ccUserInfo'
                                    name="telephone"
                                    value={this.state.telephone}
                                    onChange={this.handleInputChange}
                                    placeholder='Telephone'
                                />
                                </Row>
                                <Input
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    placeholder='Address'
                                />
                            <Row>
                                <Input
                                className = 'ccUserInfo'
                                    name="zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleInputChange}
                                    placeholder='Zipcode'
                                />
                                <Input
                                className = 'ccUserInfo'
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    placeholder='City'
                                />
                            </Row>
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="cc"
                                    value={this.state.cc}
                                    onChange={this.handleInputChange}
                                    placeholder='Credit Card Number'
                                />
                                <Input
                                    className = 'ccUserInfo'
                                    name="CVV"
                                    value={this.state.CVV}
                                    onChange={this.handleInputChange}
                                    placeholder='CVV(3 digit code)'
                                />
                            </Row>
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="ccMonth"
                                    value={this.state.ccMonth}
                                    onChange={this.handleInputChange}
                                    placeholder='Exp Month (2 digits)'
                                />
                                <Input
                                    className = 'ccUserInfo'
                                    name="ccYear"
                                    value={this.state.card1ccYear}
                                    onChange={this.handleInputChange}
                                    placeholder='Exp. Year (4 Digits)'
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
                            
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="name2"
                                    value={this.state.name2}
                                    onChange={this.handleInputChange}
                                    placeholder='Full Name'
                                />

                                <Input
                                    className = 'ccUserInfo'
                                    name="email2"
                                    value={this.state.email2}
                                    onChange={this.handleInputChange}
                                    placeholder='Email'
                                />

                                <Input
                                    className = 'ccUserInfo'
                                    name="telephone2"
                                    value={this.state.telephone2}
                                    onChange={this.handleInputChange}
                                    placeholder='Telephone'
                                />
                            </Row>
                                <Input
                                    name="address2"
                                    value={this.state.address2}
                                    onChange={this.handleInputChange}
                                    placeholder='Address'
                                />
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="zipcode2"
                                    value={this.state.zipcode2}
                                    onChange={this.handleInputChange}
                                    placeholder='Zipcode'
                                />
                                <Input
                                    className = 'ccUserInfo'
                                    name="city2"
                                    value={this.state.city2}
                                    onChange={this.handleInputChange}
                                    placeholder='City'
                                />
                            </Row>
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="cc2"
                                    value={this.state.cc2}
                                    onChange={this.handleInputChange}
                                    placeholder='Credit Card Number'
                                />
                                <Input
                                    className = 'ccUserInfo'
                                    name="CVV2"
                                    value={this.state.CVV2}
                                    onChange={this.handleInputChange}
                                    placeholder='CVV(3 digit code)'
                                />
                            </Row>
                            <Row>
                                <Input
                                    className = 'ccUserInfo'
                                    name="ccMonth2"
                                    value={this.state.ccMonth2}
                                    onChange={this.handleInputChange}
                                    placeholder='Exp Month (2 digits)'
                                />
                                <Input
                                    className = 'ccUserInfo'
                                    name="ccYear2"
                                    value={this.state.ccYear2}
                                    onChange={this.handleInputChange}
                                    placeholder='Exp. Year (4 Digits)'
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
