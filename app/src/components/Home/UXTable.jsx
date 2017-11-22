import React from 'react'
import Service from './Service'
import ServiceExtend from './ServiceExtend'
import Home from './Home.jsx'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';

export default class UXTable extends React.Component {
  constructor(props){
    super(props)
    this.service = ServiceExtend
  }

  componentDidMount(){
    console.log(this.service, this.props.entity, "USED SERVICE")
    this.props.dispatch(this.service.query())
    this.props.dispatch(this.service.count())
  }

  handleChangePage(event, number){
    const page = number
    const rowsPerPage = this.props.entity.limit
    this.props.dispatch({type: `${this.service.name}_PAGE`, param: number})
    this.props.dispatch(this.service.query(null, page))
  }

  handleChangeRowsPerPage(a,b,c){
    console.log(this, a,b,c)
    window.hahaha = this
  }

  handleMainButton(){
    this.props.history.push(`${this.service.name}/add`)
  }

  handleView(id){
    this.props.history.push(`${this.service.name}/view/${id}`, {id: id})
  }

  handleDelete(id){
    const _this = this
    swal({
      title: "Delete",
      text: "Are you sure you want to delete this item ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then(function(confirm){
      if(confirm.value){
        _this.service.delete(id, _this)
      }
    })
  }

  render() {
    window.hahahaService = this
    const _this = this

    const TableHeaders = [
      <TableCell key="index">No</TableCell>
    ]
    this.service.columns.map(function (column, i){
      TableHeaders.push(
        <TableCell key={i}>{column.alias}</TableCell>
      )
    })
    TableHeaders.push(
      <TableCell key="action" style={{width: "100px", textAlign: "center"}}>#</TableCell>
    )

    const TableDatas = []
    this.props.entity.datas.map(function (data, i){
      const TableRows = [
        <TableCell key="index">{i + 1 + (_this.props.entity.limit * _this.props.entity.page)}</TableCell>
      ]
      _this.service.columns.map(function (column, i2){
        TableRows.push(
          <TableCell key={i2}>{data[column.name]}</TableCell>
        )
      })
      TableRows.push(
        <TableCell key={"action" + i}>
          <IconButton onClick={_this.handleView.bind(_this, data.id)}>
            <Icon>visibility</Icon>
          </IconButton> 
         <IconButton onClick={_this.handleDelete.bind(_this, data.id)}>
            <Icon>delete</Icon>
          </IconButton> 
        </TableCell>
      )
      TableDatas.push(
        <TableRow key={i}>{TableRows}</TableRow>   
      )
    })

    return (
      <div className="window vbox">
        <AppBar position="static" className="toolbar">
          <Toolbar>
            <Typography type="title" className="toolbarTitle" >
              {this.service.alias}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content flex">
          <div className="actionButton" onClick={this.handleMainButton.bind(this)}>
            <Button fab color="primary">
              +
            </Button>
          </div>
          <Paper className="contentTable vbox">
            <Table>
              {this.props.entity.datas.length >= 10 &&
              <TableHead>
                <TableRow>
                  <TableCell>
                    {/* Filter | Column Selection */}
                  </TableCell>
                  <TablePagination
                  className="pagination"
                  rowsPerPageOptions={this.service.defaultPage.limitOptions}
                  count={this.props.entity.count}
                  rowsPerPage={this.props.entity.limit}
                  page={this.props.entity.page}
                  onChangePage={this.handleChangePage.bind(this)}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                </TableRow>
              </TableHead>
              }
              <TableHead>
                <TableRow>{TableHeaders}</TableRow>
              </TableHead>
              <TableBody>
                {TableDatas}
                {TableDatas.length == 0 &&
                  <tr>
                    <td colSpan={TableHeaders.length} style={{textAlign: "center", padding: 25}}>No Data to Display</td>
                  </tr> 
                }
              </TableBody>
              {this.props.entity.datas.length >= 10 &&
              <TableHead>
                <TableRow>{TableHeaders}</TableRow>
              </TableHead>
              }
              <TableHead>
                <TableRow>
                  <TableCell>
                    {/* Filter | Column Selection */}
                  </TableCell>
                  <TablePagination
                  className="pagination"
                  rowsPerPageOptions={this.service.defaultPage.limitOptions}
                  count={this.props.entity.count}
                  rowsPerPage={this.props.entity.limit}
                  page={this.props.entity.page}
                  onChangePage={this.handleChangePage.bind(this)}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                />
                </TableRow>
              </TableHead>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}