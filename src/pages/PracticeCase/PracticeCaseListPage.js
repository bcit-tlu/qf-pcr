import React, { Component } from 'react';
import { Container, Card,ListGroup } from 'react-bootstrap';


class PracticeCaseListPage extends Component {

    constructor(props) {
        super(props);
        this.cases = {"Prenatal RAD":[
                {
                    title:"Practice Case #1",
                    description:"",
                    route:"practice/prenatalrad/1",
                },
                {
                    title:"Practice Case #2",
                    description:"",
                    route:"practice/prenatalrad/2"
                },
                {
                    title:"Practice Case #3",
                    description:"",
                    route:"practice/prenatalrad/3"
                },
                {
                    title:"Practice Case #4",
                    description:"",
                    route:"practice/prenatalrad/4"
                }
                ,                {
                    title:"Practice Case #5",
                    description:"",
                    route:"practice/prenatalrad/5"
                }
            ],
            "Pregnancy Loss":[
                {
                    title:"Practice Case #1",
                    description:"",
                    route:"practice/pregnancyloss/1",
                },
                {
                    title:"Practice Case #2",
                    description:"",
                    route:"practice/pregnancyloss/2"
                },
                {
                    title:"Practice Case #3",
                    description:"",
                    route:"practice/pregnancyloss/3"
                },
                {
                    title:"Practice Case #4",
                    description:"",
                    route:"practice/pregnancyloss/4"
                }
                ,                {
                    title:"Practice Case #5",
                    description:"",
                    route:"practice/pregnancyloss/5"
                }
            ]
        }
        this.createListGroupItems = this.createListGroupItems.bind(this);
    }
    createListGroupItems(key){
        var list = [];
        for (var arrayItem of this.cases[key]){
            list.push(<ListGroup.Item><a href={`#${arrayItem.route}`}>{arrayItem.title}</a></ListGroup.Item>)
        }
        if (list.length < 1){
            list.push(<ListGroup.Item className="text-secondary">No practice cases available</ListGroup.Item>)
        }
        return list;
    }


    render() {
        return (
            <Container>
                <h2 className='my-3 text-info text-monospace'>Practice Cases</h2>
                <div className="px-5 py-4">
                    {Object.keys(this.cases).map((key)=>{
                        return (
                            <div>
                                <h5 className='mb-3 text-info'>{key}</h5>
                                <ListGroup className="mb-3">
                                    {this.createListGroupItems(key)}
                                </ListGroup>
                            </div>
                        )
                    })}
                </div>
            </Container>
        )
    }
}

export default PracticeCaseListPage;