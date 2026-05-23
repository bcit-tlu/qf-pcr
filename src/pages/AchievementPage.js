import React, { Component } from 'react';
import { Image, Button, Row, Card } from 'react-bootstrap';
import Award from "../assets/winner.png"
class AchievementPage extends Component {

    constructor(props) {
        super(props);
        var completed_modules = localStorage.getItem("completed_modules");
        if (completed_modules!=null){
            completed_modules = JSON.parse(completed_modules);
        }
        else{
            completed_modules = {};
        }
        this.state = {
            completed_modules: completed_modules
        }
    }
    render() {


        return (
            <div style={{ height: '100%', minHeight: '100vh' }} className="col-12 d-flex border-2 flex-column justify-content-start mt-5 align-items-start col-12 h-100 text-dark">

                <h4 className="text-info" style={{ letterSpacing: 1, width:"100%",textAlign:"center" }}>Achievements</h4>
                <Row style={{ fontSize: '1.2rem', height: '100%'}} className="d-flex col-4 mx-auto flex-row justify-content-around align-items-center bg-white p-3 ">
                {
                    Object.keys(this.state.completed_modules).length>0?
                        Object.keys(this.state.completed_modules).map(x=>{
                            return (
                                this.state.completed_modules[x]?
                                <Card className="col-md-5 col-sm-9 mb-3" style={{ minWidth:220, height:230 }} >
                                    <Card.Body className="text-center">
                                        <Card.Title>{x}</Card.Title>
                                        <Image height={100} src={Award}></Image>
                                        <Card.Text>Complete</Card.Text>
                                    </Card.Body>
                                </Card>:null
                            )
                        })
                        :
                        <p>No achievements to display yet.</p>
                        
                }
                </Row>
            </div>
        )
    }
}

export default AchievementPage;