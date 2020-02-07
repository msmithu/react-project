import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPaperclip } from '@fortawesome/free-solid-svg-icons';


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            changeName :"Kolkata",
            myName:"",
            dropdownOpen:false,
            description : ""
        }
    }

    description = (e) => {
        let descriptionText = e.target.value;
        this.setState({
            description : descriptionText
        })
    }

    changeNewName = (e) => {
        this.setState({
            changeName : this.state.myName,
            descriptionText : this.state.description
        })
    }

    toggle = () =>{
        this.setState({dropdownOpen:!this.state.dropdownOpen})
    }
    updateName = (e) => {
        let updatedName = e.target.value;
        console.log(updatedName)
        this.setState({
            myName: updatedName
        })
        
    }
    render() {
        return (
            <div>                
                <div className="add-task-wrap p-3 my-5">
                    {/* <h2 className="text-left mb-4">aDD Task</h2>                             */}
                    <h2 className="text-left mb-4">{this.props.children}</h2>                            
                    <Form>
                        <FormGroup>
                            <div className="d-flex justify-content-between">
                                <div className="text-white">                                
                                    <FontAwesomeIcon className="super-crazy-colors bg-success p-2 green-icon" icon={faUser} size="1x" />
                                </div>
                                <Input id="new-task" onChange={this.updateName} value={this.state.text} className="mx-3" type="text" name="tasktitle" placeholder="Task Title" />
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret className="btn-success" style={{'borderRadius':'30px'}}>
                                        Select Category
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>React</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Angular</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Git</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Javascript</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </FormGroup>
                        <FormGroup className="pl-5 ml-2">
                            <Input onChange={this.description} value={this.state.text} type="textarea" name="taskdescription" id="taskdescription" />
                        </FormGroup>
                        <FormGroup>
                            <div className="d-flex justify-content-end">
                                <div className="file-attach bg-success p-2 mr-3 text-white">
                                    <FontAwesomeIcon className="paperclip" icon={faPaperclip} size="1x" />
                                    <Input type="file" name="file" id="exampleFile" />
                                </div>                                       
                                <Button onClick={this.changeNewName} outline className="btn bg-success px-5 btn-outline-success post-btn">Post</Button>                                        
                            </div>
                            <p>Hello World {this.state.changeName} This is my location : {this.state.descriptionText} </p>
                        </FormGroup>
                    </Form>                        
                </div>      
            </div>
        )
    }
}

