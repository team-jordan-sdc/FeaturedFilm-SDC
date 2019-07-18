import React from 'react';
import BackgroundImage from './component/background.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    }
    this.fetchRandFeaturedFilm = this.fetchRandFeaturedFilm.bind(this);
    this.fetchFeaturedFilm = this.fetchFeaturedFilm.bind(this);
  }

  componentDidMount(){
    let urlQuery = new URLSearchParams(window.location.search);
    let index = urlQuery.get('index');
    if(index){
      this.fetchFeaturedFilm(index);
    } else {
      this.fetchRandFeaturedFilm();
    }

  }

  fetchFeaturedFilm(index){
    fetch(`/api/featured?index=${index}`)
    .then(res => res.json())
    .then((res) => {
      this.setState({film: res[0]});
    });
  }

  fetchRandFeaturedFilm(){
    fetch('/api/rand')
    .then(res => res.json())
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

export default App;
