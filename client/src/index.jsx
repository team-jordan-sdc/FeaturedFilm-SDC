import React from 'react';
import ReactDOM from 'react-dom';
import BackgroundImage from './component/background.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    }
    this.fetchRandFeaturedFilm = this.fetchRandFeaturedFilm.bind(this);
  }

  componentDidMount(){
    console.log('fetch random film');
    this.fetchRandFeaturedFilm();
  }

  fetchRandFeaturedFilm(){
    fetch('/api/rand')
    .then(res =>res.json());
    .then((res) => {
      this.setState({film: res[0]});
    });
  }


  render(){
    return(
      <div>
        <BackgroundImage film={this.state.film}/>
      </div>
    );
  }



}

ReactDOM.render(<App />, document.getElementById('test'));
