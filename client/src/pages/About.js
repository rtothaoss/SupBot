import React, { Fragment } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import './aboutStyle.css'

const styles = {
    background: {
        marginTop: 20,
        backgroundColor: "white",
        color: "black"
    }
}


const About = () => {
    return (
     <Container>
       
        <Jumbotron className='supBackground' style={styles.background}>
     
            <div className='container'>
                <h3>What is Supreme?</h3>
                <p>Supreme is a skateboard company based in New York City that was founded in 1994. Over the years Supreme has gained notoriety thanks to its collaborations with companies like Louis Vuitton, Commes Des Garcons, VANS, Bape, The North Face, and Gucci. </p>
                <h3>Why the bot?</h3> 
                <p>Supreme is very popular and for that reason people have made it their job to resell items for higher prices than Supreme charges. The fact that Supreme is very limited and there's so many people that want their items has led to more and more people relying on bots to buy their products online.
                The image below is from a drop in London and as you can see there's a ton of people in line. Imagine 10 times the amount of people for online drops and you can see why people have turned to bots.</p>
                <img src='https://upload-assets.vice.com/files/2016/07/19/1468923638supreme3.gif?resize=1575:*' alt='supremeVice'></img>
                <p className='credit'>Courtesy of VICE</p>
                <h3>How the bot works?</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
           
        </Jumbotron>

        </Container>
    )
}

export default About;

