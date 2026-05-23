import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import NormalMale from '../assets/normalMale.jpg'

class IntroductionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="d-flex flex-column justify-content-start mt-4 align-items-start col-12 text-dark">

                <div style={{ fontSize: '1.2rem', height: '100%' }} className="d-flex col-sm-11 flex-column align-items-start bg-white ">
                    <h3 className="text-info text-monospace" style={{ letterSpacing: 1 }}>Introduction:</h3>
                    <p className="mt-2">Welcome to the QF-PCR online learning module. This module will review some of the basic principles of this laboratory method for the detection of aneuploidy in prenatal and pregnancy loss cases. Select your choices from the menu above to learn about the background, work through a guided practice case, take a quiz to test your knowledge, and try some additional practice cases.</p>
                </div>
                <span className="d-flex flex-column col-sm-11 mt-3 align-items-center">
                    <Image
                        style={{maxWidth:1000,width:"100%"}}
                        src={NormalMale} 
                        alt = 'Normal Male Results'
                    />
                    <h5>An Example of (46, XY) results</h5>
                </span>

            </div>
        )
    }
}

export default IntroductionPage;