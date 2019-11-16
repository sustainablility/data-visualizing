import React from 'react';
import './generalStyle.scss'
import loadDataFromServer from "./communicateToServer/loadData";
import GetRequestParams from "./lib/getRequestParameters";
import DisplayTable from "./component/table/table";


class App extends React.Component{
  state = {
    loaded: false,
    data: null
  };

  componentDidMount() {
    if (!this.state.loaded) {
      this.loadData();
      return null;
    }

  }

  async loadData() {
    let params = GetRequestParams();
    if (params.url === undefined) {
      return null;
    }
    let data = await loadDataFromServer(params.url);
    this.setState({
      loaded: true,
      data: data
    });
  }

  render() {
    if (!this.state.loaded) {
      return (
          <div>Loading</div>
      );
    }
    return (
        <DisplayTable data={this.state.data}/>
    );
  }
}

export default App;
