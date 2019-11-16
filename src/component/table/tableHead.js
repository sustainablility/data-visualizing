import React from 'react';
import TableTh from "./tableTh";

class TableHead extends React.Component{
    render() {
        let renderList = [];
        for (let tableTitle of this.props.values) {
            renderList.push(<TableTh value={tableTitle}/>)
        }
        return(<tr>{renderList}</tr>)
    }
}
export default TableHead;