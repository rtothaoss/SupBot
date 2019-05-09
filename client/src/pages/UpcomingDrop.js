import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Modal from "../components/Modal";


const styles = {
    card: {
        width: "18rem",
        margin: "20px 10px",
        minHeight: "400px"
    },
    jumbotron: {
        marginTop: '40px'
    },
    img: {
        width: '150px',
        height: '150px'
    },
}



class UpcomingDrop extends Component {

    state = {
        items: [],
        modal: ''
    }

    componentDidMount() {
        this.deleteDropList()
        this.scrapeSup();
        setTimeout(() => {this.droplistLoaded()}, 2500)
  
    }

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


    render() {
        return (
            <Container>
            <Jumbotron style={styles.jumbotron}>
                <h3>Next drop in: ...</h3>
            </Jumbotron>
            <Jumbotron>
            </Jumbotron>
                <Jumbotron style={styles.jumbotron}>
                    <Row>
                    {this.state.items.map(item => (
                        <Col size="md-4">
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
            </Container>

        )
    }





}


export default UpcomingDrop;