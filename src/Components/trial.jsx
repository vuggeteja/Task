import React, { Component } from 'react';

class Datatable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = Array(1000).fill(null);
    for (let i = 0; i < 1000; i++) {
      data[i] = [i, i * 2, i * 3, i * 4];
    }
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;
    const divs = data.map((row, i) => (
      <div key={i}>
        <div>Column 1: {row[0]}</div>
        <div>Column 2: {row[1]}</div>
        <div>Column 3: {row[2]}</div>
        <div>Column 4: {row[3]}</div>
      </div>
    ));

    const width = divs.reduce((acc, div) => Math.max(acc, div.clientWidth), 0);
    return (
      <div style={{ width: width, overflow: 'scroll' }}>
        {divs}
      </div>
    );
  }
}

export default Datatable;
