import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
export class Exercise5 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filterData: null,
      columnDefs: [{
        headerName: "FirstName", field: "firstName", sortable: true, filter: true, checkboxSelection: true, resizable: true, editable: true
      }, {
        headerName: "LastName", field: "lastName", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Branch", field: "branch", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "DateOfBirth", field: "dateOfBirth", sortable: true, filter: true, resizable: true, editable: true
      }, {

        headerName: "Contact", field: "contact", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Email", field: "email", sortable: true, filter: true, resizable: true, editable: true
      }, {
        headerName: "Action", field: "actions", cellRenderer: function () {
          return (
            ' <button class="action" onClick={this.delete}><i class="medium material-icons" style="color:red">delete</i></button> '
          )
        }
      }],
 
      rowData: [{
        firstName: "Nanda",
        lastName: "kishore",
        branch: "cse",
        dateOfBirth: "31-12-1998",
        contact: 8112273231,
        email: "nanda.gujar@rapidops.com"
      },
      {
        firstName: "jaymin",
        lastName: "Shah",
        branch: "Cse",
        dateOfBirth: "05-08-1997",
        contact: 7845693214,
        email: "jaymin.shah@rapidops.com"
      },
      {
        firstName: "sarang",
        lastName: "jain",
        branch: "IT",
        dateOfBirth: "17-11-1996",
        contact: 7895412358,
        email: "sarang.jain@gmail.com"
      },
      {
        firstName: "omendra",
        lastName: "Singh",
        branch: "IT",
        dateOfBirth: "03-05-1996",
        contact: 9874562548,
        email: "omi.singh@gmail.com"
      },
      {
        firstName: "Ravi",
        lastName: "Pathekar",
        branch: "Cse",
        dateOfBirth: "09-12-1999",
        contact: 9745863254,
        email: "ravi.parhekargmail.com"
      },
    ],
 };
     }

  componentDidMount() {
    this.setState({
      filterData: this.state.rowData
    })
  }
  onGridReady = (params) => {
    this.api = params.api;
  }
  onButtonClick = e => {
    const selectedNodes = this.api.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(a => a.firstName + ' ' + a.lastName + ' From ' + a.branch).join('\n ')

    alert(`Selected nodes: ${'\n'}${selectedDataStringPresentation}`)
  }
  searchData = (e) => {
    let updateList = this.state.rowData;
    updateList = updateList.filter(item => {
      return item.firstName.toLowerCase().search(
        e.target.value.toLowerCase()
      )
    })
   }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '68vh',
          width: '55%'
        }}
      >
        <h1 className="bg-secondary text-light" >Table</h1>
       
        <input className="p-2 m-2 " type="text" onChange={this.searchData} placeholder="Search the name " />
       
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.filterData}
          onGridReady={this.onGridReady}
          rowSelection="multiple"
          pagination="true"> 
          
          </AgGridReact>
       
        <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected data info</button>

      </div>
    );
  }
}

export default Exercise5