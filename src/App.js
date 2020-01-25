import React, {Component} from 'react'
import './App.css'
import Membre  from './components/Membre'
import Button from './components/Button'


const famille = {
  membre1: {
    nom: 'Eric',
    age:27,
    profession: 'Instituteur'
  },
  membre2: {
    nom: 'Jane',
    age:25,
    profession: 'Artiste'
  },
  membre3: {
    nom: 'Mocka',
    age: 4,
  },

}

class App extends Component {

  state = {famille, isShow: false}

  handleClick = () => {
    const famille = { ...this.state.famille}
    famille.membre1.age += 1
    this.setState({famille})
  }
  
  handleChange = (event,id)  => {
    const famille = {...this.state.famille}
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({famille})
  }

  cacherNom = id => {
    const famille = {...this.state.famille}
    famille[id].nom = 'X'
    this.setState({famille})
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }


  render() { 
    const {titre} = this.props
    const {famille, isShow} = this.state
    
    let description = null
    if (isShow) {
      description = <strong style={{color:'#AAB5BB'}}>Je suis un chien de race Yorkshire</strong>
    }

    const liste = Object.keys(famille)
    .map(membre => (
      <Membre
      key={membre}
      
      handleChange={event => this.handleChange(event, membre)}
      cacherNom= {() => this.cacherNom(membre)}
      nom={famille[membre].nom}
      age={famille[membre].age} />
    ))
    
  return (
    <div className="App">
      <h1>{titre}</h1>
      {liste } 
      {description }
      <button onClick={this.handleShowDescription}>
          {isShow ? 'Cacher' : 'Découvrir'}
      </button>
      <Button vieillir={this.handleClick}/>
     </div>
  )
 }
}

export default App;
