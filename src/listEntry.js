import React from 'react'

class ListEntry extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const message = this.props.message;

        return (
            <div>{message}</div>
        );
    }

}

export default ListEntry;
