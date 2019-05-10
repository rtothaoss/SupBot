import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Modal from 'react-bootstrap4-modal'


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
        modal: '',
        visible: false,
        summary: '',
        id: '',
        title: '',
        img: ''
    }

    componentDidMount() {
        this.deleteDropList()
        this.scrapeSup();
        setTimeout(() => { this.droplistLoaded() }, 2500)

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
            .catch(() => {
                console.log('error')
            }, () => {
                console.log(this.state.items)
            })

    }

    viewModal = (item) => {
        if(!this.state.visible) {
            console.log(item)
            this.setState({
                visible: true,
                id: item.id,
                summary: item.summary,
                title: item.title,
                img: 'https://www.supremecommunity.com' + item.img
            })
        } else {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron style={styles.jumbotron}>
                <h3>Next drop in: ...</h3>
                <Modal visible={this.state.visible} onClickBackdrop={this.modalBackdropClicked}>
                        <div className="modal-header">
                            <h5 className="modal-title">{this.state.title}</h5>
                        </div>
                        <div className="modal-body">
                        <img src={this.state.img} alt={this.state.title}/>
                            <p>{this.state.summary}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.viewModal}>
                                Close
                        </button>
                        </div>
                    </Modal>
                    <Row>
                        {this.state.items.map(item => (
                            <Col size="md-4">
                                <Card style={styles.card}
                                    key={item._id}
                                    id={item._id}
                                    title={item.title}
                                    img={'https://www.supremecommunity.com' + item.img}
                                    summary={item.summary}
                                    onClick={()=>{this.viewModal(item)}}
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