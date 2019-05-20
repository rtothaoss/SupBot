import React, {Component} from 'react'
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

const style = {
    jumbotron: {
        marginTop: "40px"
    }
}


class ContactUs extends Component {

    state = {
        name: '',
        email: '',
        text: '',
        data: '',
        "_replyto": ''
    }

    handleInputChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
       this.setState({
           data: {
               name: this.state.name,
               email: this.state.email,
               text: this.state.text
           }
       }, () => {
           console.log(this.state.data)
       })
      };




render() {
    return (
        <Container>
            <Jumbotron style={style.jumbotron}>
            <form action="https://formspree.io/rtothaoss@gmail.com" method="POST">
                <Input 
                    type = 'text'
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.handleInputChange}
                    placeholder = 'Full Name'
                />

                <Input 
                    type = 'email'
                    name = "_replyto"
                    value = {this.state._replyto}
                    onChange = {this.handleInputChange}
                    placeholder = 'Email'
                />

                <TextArea 
                     name = "text"
                    value = {this.state.text}
                    onChange = {this.handleInputChange}
                    placeholder = 'Drop your question here'
                />

                <FormBtn
                    // onClick = {this.handleFormSubmit}
                    type='submit'
                    value='Send'
                 >Submit
                 </FormBtn>
                 </form>

            </Jumbotron>
        </Container>

    )
}
}
export default ContactUs;