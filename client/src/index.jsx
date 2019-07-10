import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundImage from './component/background.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    }

    //this.fetchFilm = this.fetchFilm.bind(this);
  }

  componentDidMount(){
    console.log('fetch random film')
  }

  render(){
    return(
      <div>
        <BackgroundImage />
        <div>test</div>
      </div>
    );
  }



}

ReactDOM.render(<App />, document.getElementById('test'));
