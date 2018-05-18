import React, { Component } from 'react'

class Panel extends React.Component {
  render () {
    return (
      <div className="paged3">
      <div classname="container">
      <div className="row">
      <div className="col-md-4">
        <h1>Profils</h1>
        <br></br>
        <p>Nom d'utilisateur: "nom d'utilisateur"</p>
          <br></br>
        <p>Personnage incarnée: "name"</p>
          <br></br>
        <img src={'http://via.placeholder.com/350x150'} alt=""/>
          <br></br>
        <p>Taille: "height"</p>
          <br></br>
        <p>Poids: "mass"</p>
          <br></br>
        <p>Date de naissance: "born"</p>
        <br></br>
        <p>Affiliations: "affiliations"</p>
          <br></br>
      </div>
      <div className="col-md-4">
      <h1>Match</h1>
      <img src={'http://via.placeholder.com/350x300'} alt=""/>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default Panel;
