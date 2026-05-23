import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';


class ModuleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {


        return (
            <Card className="col-md-6 col-sm-9 m-2" >
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <hr />
                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Button style={{display:"block",margin:"auto", width:100}} onClick={()=>{this.props.onClick();}} variant="primary">Start</Button>
            </Card.Body>
        </Card>
        )
    }
}

export default ModuleCard;