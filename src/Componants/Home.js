import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap';


import Addtask from './AddTask';
import Tasklist from './TaskList';


export default class Home extends React.Component {
    state = {
        showResult : true        
    }
    toggleesult = () => {
        this.setState({
            showResult : !this.state.showResult
        })        
    }
    toggleCompenent = () => {
        if(this.state.showResult) {
            return (
                <Row>
                    <Col sm="8">
                        <Addtask>
                        {this.state.showResult}
                        </Addtask>                         
                    </Col>
                    <Col sm="4">
                        <div className="my-5">
                            <Button outline onClick={this.toggleesult} className="btn bg-success px-5 btn-outline-success post-btn mr-3">Show All Tasks</Button>
                        </div> 
                    </Col>
                </Row>
            )
        }else {
            return (
                <div>
                    <Row>
                        <Col sm="12">
                            <Tasklist />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <div className="mb-5">
                                <Button onClick={this.toggleesult} outline className="btn bg-success px-5 btn-outline-success post-btn mr-3">Back</Button>
                            </div> 
                        </Col>
                    </Row>
                </div>
            )
        }
    } 
    render() {
        return (
            <div>
                 <Container>
                    {
                        this.toggleCompenent()
                    }                   
                </Container>                 
            </div>
        )
    }
}

