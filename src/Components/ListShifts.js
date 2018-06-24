import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import CheckBoxOutOutline from 'material-ui/svg-icons/toggle/check-box-outline-blank'
import CheckBox from 'material-ui/svg-icons/toggle/check-box'

class ListShifts extends Component {
  render(){
    const style = {
      card: {
        maxWidth: "600px",
        margin: "0 auto"
      },
      status : {
        color: "grey",
        height: "19px",
        width: "19px",
        // float: "right"
      },
      row: {
        height: "60px"
      },
      title: {
      fontFamily: "roboto",
      textAlign: "center"
      }
    }
    return(
      <div>
    <h1 style={style.title}>Available Shifts</h1>
    <Card style={style.card} zDepth={2}>
    <Table
      height="80vh"
      fixedHeader={true}
      selectable={true}
      onCellClick={this.handleSelect}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
        enableSelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn>Expiration</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>

        <TableRow name="2" key="1" style={style.row}>
          <TableRowColumn>hi</TableRowColumn>
          <TableRowColumn>ju</TableRowColumn>
        </TableRow>

      </TableBody>
    </Table>
    </Card>
  </div>
    )
  }
}
export default ListShifts;
