import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './App.css';


class AgeFormsAndInputs extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: '',
            sex: '',
        }
        this.inputAgeRef = React.createRef()
        this.inputSexRef = React.createRef()
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        // console.log(this.inputFullNameRef.current.value)
        console.log("Final data is", data)
        // Here we'd pass it back to the Flask backend
    }
    
  render () {
      const {age} = this.state
      const {sex} = this.state
      return (
        <Container className="App">
          <h2>Contact Information</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="21"
                  value={ age }
                  onChange={ (e) => {
                              this.handleChange(e)
                            } }
                />
                <FormText>Don't worry about your birthday... how old do you feel?</FormText>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="sex">Sex</Label>
                <Input
                  type="text"
                  name="sex"
                  id="sex"
                  placeholder="Female"
                  value={ sex }
                  onChange={ (e) => this.handleChange(e) }
              />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
        </Form>
        </Container>
      );
  }
}

export default AgeFormsAndInputs