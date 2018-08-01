import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      pamain: {}
    }
  }
  
  componentDidMount(){
    axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal')
      .then((x) => {

        console.log(x.data.strCutout);
        this.setState({
          pemain: x.data
        })

      })
  }

  render() {
    var mapping = this.state.pemain.map((item, index) => {
        return(
          <div class="card" key={index}>
            <div class="card-header">
              {item.strPlayer}
            </div>
            <div class="card-body">
              <div class="row">
                <div class="column">
                {item.strCutout}
                </div>

                <div class="column">
                {item.DescriptionEN}
                </div>
              </div>
            </div>
          </div>
        )
      }
    )
    
    return(
  
      <div>
        <center>
          <h2> Daftar Pemain </h2>
          <input type="text" ref="search"/>
          <button> cari </button>

          <div class="container">
            {mapping}
          </div>
          </center>
      </div>



          
      


    );
  }
}

export default App;
