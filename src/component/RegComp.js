import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        console.log("regular")
        return (
            <div>
              REgular Component  {this.props.name}
            </div>
        )
    }
}

export default RegComp
