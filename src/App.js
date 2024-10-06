import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tbody:[],
      thead:[],
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({tbody:json,thead:Object.keys(json[0])}));
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <table border={20}>
            <thead>
            <tr>
            {this.state.thead.slice(0,4).map((x,z)=>
            <th key={z}>{x}</th>  
            )}
            </tr>
            </thead>
            <tbody>
            {this.state.tbody.slice(0,7).map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                </tr>
              );
            })}
            </tbody>
        </table>
      </>
    );
  }
}
export default App;
