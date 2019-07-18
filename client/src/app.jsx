import React from 'react';
import BackgroundImage from './component/background.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
    }
    this.fetchFeaturedFilm = this.fetchFeaturedFilm.bind(this);
  }

  componentDidMount(){
    let urlQuery = new URLSearchParams(window.location.search);
    let id = urlQuery.get('id');
    if(id){
      this.fetchFeaturedFilm(id);
    } else {
      this.fetchFeaturedFilm(1);
    }

  }

  fetchFeaturedFilm(id){
    fetch(`/api/featured?id=${id}`)
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
