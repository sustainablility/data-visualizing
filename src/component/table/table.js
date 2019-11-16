import React from 'react';
import TableTr from "./tableTr";
import TableHead from "./tableHead";
class DisplayTable extends React.Component {
    render() {
        let renderList = [];
        renderList.push(<TableHead values={Object.keys(this.props.data[0])}/>);
        for (let row of this.props.data) {
            renderList.push(<TableTr values={row}/>)
        }
        return (<table>{renderList}</table>)
    }
}

export default DisplayTable;