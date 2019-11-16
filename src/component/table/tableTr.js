import React from 'react';
import TableTd from "./tableTd";

class TableTr extends React.Component{
    render() {
        let renderList = [];
        let tableValues = this.props.values;
        for (let tag in tableValues) {
            if (typeof tableValues[tag] === "string") {
                renderList.push(<TableTd value={tableValues[tag]}/>);
            } else if (tableValues[tag] === null){
                renderList.push(<TableTd value={""}/>);
            } else {
                renderList.push(<TableTd value={JSON.stringify(tableValues[tag])}/>);
            }
        }
        return(<tr>{renderList}</tr>)
    }
}
export default TableTr;