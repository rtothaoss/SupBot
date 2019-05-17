import React, { Fragment } from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import './aboutStyle.css'
import '../images/supremelogo.png'

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
            {/* <img className="supremeImage" src={require("../images/supremelogo.png")}/> */}
                <h3>What is Supreme?</h3>
                <p>Supreme is a skateboard company based in New York City that was founded in 1994. Over the years Supreme has gained notoriety thanks to its collaborations with companies like Louis Vuitton, Commes Des Garcons, VANS, Bape, The North Face, and Gucci. It's gained more and more popularity over the years and their redbox logo has become so recognized that even people who aren't hypebeasts will have at least seen that logo. That same logo has been reused all over for other peoples brands and clothing.</p>
                <h3>Why the bot?</h3> 
                <p>Supreme is very popular and for that reason people have made it their job to resell items for higher prices than Supreme charges. The fact that Supreme is very limited and there's so many people that want their items has led to more and more people relying on bots to buy their products online.
                The image below is from a drop in London and as you can see there's a ton of people in line. Imagine 10 times the amount of people for online drops and you can see why people have turned to bots.</p>
                <img src='https://upload-assets.vice.com/files/2016/07/19/1468923638supreme3.gif?resize=1575:*' alt='supremeVice'></img>
                <p className='credit'>Courtesy of VICE</p>
                <h3>How the bot works?</h3>
                <p>You will be prompted with a selection of upcoming items for the next drop which is every <b>Thursday at 11am Eastern.</b> Don't worry if you don't see any new items just yet, the site relies on information passed down by another site. It is guaranteed that you will see new items the day of the release or even the night before. When you select an item you will be prompted if you want to add this item to card 1 or card 2. Simply put this allows for multiple transactions. It's better to choose a single item for each cart and get those items quickly rather than firing off a bot that will have to cart 5-10 items and not guarantee a successful purchase. Below the item selection are two input forms for those cards. Don't worry none of that information is sent over the internet anywhere. This data is all stored on your computers browser. After those steps are taken just hit 'Run Bot Card#1' and 'Run Bot Card#2'. You don't have to use two cards or two bots if you dont want to. Just make sure your card data matches up with the correct bot. Also there is a test bot below those buttons that will fire off a test purchase but will not actually purchase the item. This just shows that you have everything inputted correctly. Leave your page open and watch the bot work and Happy Botting!</p>
            </div>
           
        </Jumbotron>

        </Container>
    )
}

export default About;

