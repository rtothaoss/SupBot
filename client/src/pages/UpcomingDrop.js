import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";


const style = {
    card: {
        width: "18rem",
        margin: "20px 10px"
    }
}



class UpcomingDrop extends Component {

    state = {
        title: 'hello working title',
        body: 'test test',
        linkURL: 'www.google.com',
        linkName: 'test'
    }


    render() {
        return (
            <Container>
                <Row>
                <Col size="md-4">
                    <Card style={style.card}
                        title={this.state.title}
                        body={this.state.body}
                        linkURL={this.state.linkURL}
                        linkName={this.state.linkName}
                        imageSRC={'https://preview.redd.it/ng5mb64idb401.jpg?width=576&auto=webp&s=afc2a395fc177524d1023bb2892d14fd49710370'}
                    />
                    </Col>
                <Col size="md-4">
                    <Card style={style.card}
                        title={this.state.title}
                        body={this.state.body}
                        linkURL={this.state.linkURL}
                        linkName={this.state.linkName}
                        imageSRC={'https://preview.redd.it/ng5mb64idb401.jpg?width=576&auto=webp&s=afc2a395fc177524d1023bb2892d14fd49710370'}
                    />
                    </Col>
                <Col size="md-4">

                    <Card style={style.card}
                        title={this.state.title}
                        body={this.state.body}
                        linkURL={this.state.linkURL}
                        linkName={this.state.linkName}
                        imageSRC={'https://preview.redd.it/ng5mb64idb401.jpg?width=576&auto=webp&s=afc2a395fc177524d1023bb2892d14fd49710370'}
                    />
                    </Col>
            
                </Row>



            </Container>

        )
    }





}


export default UpcomingDrop;