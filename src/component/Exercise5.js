import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '@elastic/eui/dist/eui_theme_light.css'
import { EuiIcon, EuiButtonIcon, EuiPopover, EuiSwitch, EuiSpacer } from '@elastic/eui';

let api = '';
export class Exercise5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPopoverOpen: false,
            isFirstName: true,
            IsFirstNameDisplay: true,
            isLastName: true,
            isBranch: true,
            isDob: true,
            isConatct: true,
            isEmail: true,
            isAction: true,
            isTags: true,
            filterData: null,
            columnDefs: [{
                headerName: "FirstName", field: "firstName", checkboxSelection: true, hide: false,
            }, {
                headerName: "LastName", field: "lastName",
            }, {
                headerName: "Branch", field: "branch",
            }, {
                headerName: "DateOfBirth", field: "dateOfBirth",
            }, {
                headerName: "Contact", field: "contact",
            }, {
                headerName: "Email", field: "email",
            }, {
                headerName: "Actions", field: "action",
                cellRendererFramework: function (params) {
                    const deleteRow = () => {
                        const selectedData = api.getSelectedRows();
                        api.updateRowData({ remove: selectedData });
                    }
                    return (
                        <>
                            <EuiIcon type="trash" onClick={deleteRow} />
                        </>
                    )
                } },
            ],
            defaultColDef: {
                width: 150,
                height: 100,
                editable: true,
                resizable: true,
                sortable: true,
                filter: true,
                colResizeDefault: 'shift',
                autoHeight: true,
                rowHeight: 500
            },
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
        this.searchData = this.searchData.bind(this);
        this.rowHeight = 200;
    }
    componentDidMount() {
        this.setState({
            filterData: this.state.rowData

        })
    }
    onGridReady = params => {
        api = params.api;
        this.columnApi = params.columnApi;
    }
    onButtonClick = e => {
        const selectedNodes = api.getSelectedNodes()
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
        this.setState({
            filterData: updateList
        })
    }
    closePopover() {
        this.setState({
            isPopoverOpen: false,
        });
    }S
    manage = () => {
        this.setState({
            isPopoverOpen: !this.state.isPopoverOpen,
        });
    }
    display(value, col, set) {
        this.setState({
            [set]: value,
        })
        this.columnApi.setColumnVisible(col, value)
    }

    update(e) {
      

        this.setState({
            isFirstName: this.columnApi.getColumn('firstName').visible

        })

    }

    render() {
        const button = (
            <EuiButtonIcon
                iconType="managementApp"
                iconSize="original"
                onClick={this.manage.bind(this)}
            >
            </EuiButtonIcon>
        );
        const { columnDefs, defaultColDef, filterData, isFirstName, isLastName,
            isAction, isBranch, isConatct, isDob, isEmail, isTags, } = this.state
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '45vh',
                    width: '100%'
                }}
            >
                <h2 className="bg-dark display-4 text-light" >Table</h2>
               
                <input className="p-2 m-2 " type="text" onChange={this.searchData} placeholder="Search" />
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={filterData}
                    defaultColDef={defaultColDef}
                    onGridReady={this.onGridReady}
                    rowSelection="multiple"
                    enableCellChangeFlash={true}
                    onDragStopped={e => this.update(e)}

                >
                </AgGridReact>
          
                <button className=" btn btn-primary p-2 m-2 " onClick={this.onButtonClick}>Get selected rows</button>

            </div >
        );
    }
}

export default Exercise5