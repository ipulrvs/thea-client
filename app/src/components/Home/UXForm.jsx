import React from 'react'
import Service from './Service'
import ServiceExtend from './ServiceExtend'
import Home from './Home.jsx'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';

import connect from 'redux-connect-decorator'
@connect(store => ({ 
  global: store.global,
  entity: store.entity
}))
export default class UXForm extends React.Component {
  constructor(props){
    super(props)
    this.service = ServiceExtend
    this.state = {
      formData: {},
      formValidation: {},
      formSet: "Add"
    }
  }

  componentDidMount(){
    var id = this.props.match.params.id
    if(id){
      this.setState({ formSet: "View" })
      this.props.dispatch(this.service.get(id))
    } else {
      this.setState({ formSet: "Add" })
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.entity.formData != nextProps.entity.formData){
      this.setState({formData: nextProps.entity.formData})
    }
  }

  handleInput(field, evt){
    console.log(field, evt.target.value)
    var formData = this.state.formData
    formData[field] = evt.target.value
    this.setState({formData: formData})
    console.log(formData)
  }

  handleValidation(){
    var formData = this.state.formData
    var formValidation = this.state.formValidation
    this.service.columns.map(function(item, index){
      var inputField = item.form
      if(inputField.validation){
        if(inputField.validation == "required"){
          var checkValue = "";
          if(formData[item.name]){
            checkValue = formData[item.name]
          }
          console.log(checkValue)
          if(checkValue == "" || checkValue == null || checkValue == undefined){
            formValidation[item.name] = "This field is required"
          } else {
            delete formValidation[item.name]
          }
        }
      }
    })
    this.setState({formValidation: formValidation})
    return formValidation
  }

  handleSave(trigger){
    var valid  = this.handleValidation()
    var valids = Object.keys(valid)
    if(valids.length == 0){
      var formData = this.state.formData
      if(trigger == "Edit"){
        this.service.update(formData, this)
      } else {
        this.service.create(formData, this)
      } 
    } else {
      swal({
        title: "",
        text : "Please fill requirement fields to complete form",
        type : "info"
      })
    }
  }
  
  handleEdit(trigger){
    if(trigger){
      this.setState({ formSet: "Edit" })
    } else {
      this.setState({ formSet: "View" })
    }
  }

  render() {
    const _this = this

    console.log(this.props.entity.formData, "FUCK U")
    console.log(this.state.formData)

    var formFields = []
    this.service.columns.map(function(item, index){
      var inputField = item.form
      var inputFieldDisable = false
      if(_this.state.formSet == "View"){
        inputFieldDisable = true
      } 
      if(_this.state.formSet == "Edit" && !inputField.disabled){ 
        inputFieldDisable = false
      } else {
        inputFieldDisable = true
      }
      if(_this.state.formSet == "Add"){ 
        inputFieldDisable = inputField.disabled
      }
      console.log(inputField, item)
      var error = false
      if(_this.state.formValidation[item.name]){
        error = true
      }
      if(item.skipL > 0){
        formFields.push(<div className={"col-"+inputField.skipL}></div>)
      }
      if(inputField.type == "text"){
        formFields.push(
          <div className={"col-"+inputField.width} key={index}>
            <TextField
              error={error}
              id={item.name}
              label={item.alias}
              margin="normal"
              fullWidth={true}
              disabled={inputFieldDisable}
              value={_this.state.formData[item.name]}
              onChange={_this.handleInput.bind(_this, item.name)}
              helperText={_this.state.formValidation[item.name]}
            />
          </div>
        )
      }
      if(inputField.type == "number"){
        formFields.push(
          <div className={"col-"+inputField.width} key={index}>
            <TextField
              error={error}
              id={item.name}
              label={item.alias}
              margin="normal"
              fullWidth={true}
              disabled={inputFieldDisable}
              value={_this.state.formData[item.name]}
              onChange={_this.handleInput.bind(_this, item.name)}
              helperText={_this.state.formValidation[item.name]}
            />
          </div>
        )
      }
      if(inputField.type == "textarea"){
        formFields.push(
          <div className={"col-"+inputField.width} key={index}>
            <TextField
              error={error}
              id={item.name}
              label={item.alias}
              margin="normal"
              multiline
              rows="4"
              fullWidth={true}
              disabled={inputFieldDisable}
              value={_this.state.formData[item.name]}
              onChange={_this.handleInput.bind(_this, item.name)}
            />
          </div>
        )
      }
      if(item.skipR > 0){
        formFields.push(<div className={"col-"+inputField.skipR}></div>)
      }
    })

    return (
      <div className="window vbox">
        <AppBar position="static" className="toolbar">
          <Toolbar>
            <Typography type="title" className="toolbarTitle" >
              {this.service.alias + " " + this.state.formSet + " Form"}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content flex">
          {
            this.state.formSet == "Add" &&
            <div className="actionButton">
              <Button fab color="primary" onClick={this.handleSave.bind(this)}>
                <Icon>save</Icon>
              </Button>
            </div>
          }
          {
            this.state.formSet == "Edit" &&
            <div className="actionButton2">
              <Button fab color="primary" onClick={this.handleEdit.bind(this, false)}>
                <Icon>close</Icon>
              </Button>
            </div>
          }
          {
            this.state.formSet == "Edit" &&
            <div className="actionButton">
              <Button fab color="primary" onClick={this.handleSave.bind(this, "Edit")}>
                <Icon>save</Icon>
              </Button>
            </div>
          }
          {
            this.state.formSet == "View" &&
            <div className="actionButton">
              <Button fab color="primary" onClick={this.handleEdit.bind(this, true)}>
                <Icon>edit</Icon>
              </Button>
            </div>
          }
          <Paper className="contentForm">
            <div className="row">
              {formFields}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}