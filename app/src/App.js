import React, { Component } from 'react';
import face from './face.png';
import './App.css';

var applicants_arr = [
    {
        "id": 1,
        "name": "Kathern Machado",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 2,
        "name": "Nick Wenzel",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 3,
        "name": "Brittani Sobus",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 4,
        "name": "Donetta Brubaker",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 5,
        "name": "Coleman Harbert",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 6,
        "name": "Antoine Byerley",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 7,
        "name": "Penney Mccomas",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 8,
        "name": "Lakeshia Callaham",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 9,
        "name": "Efrain Dower",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"},
    {
        "id": 10,
        "name": "Porsche Marko",
        "status": "needs screening",
        "applicationDate": "5/1/2017",
        "location": "new york"}
    ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      applicants: applicants_arr,
    };
  }

  render() {
  	var cards = this.state.applicants.map(function(info, index){
  		return <div key={index} className="info card">
  			<div className="face card-section">
  				<img src={ face } alt="applicant's face"/>
  			</div>
  			<div className="name-info card-section">
  				<h1>{info.name}</h1>
  				<p className="email">{info.name}@nimble.com</p>
  			</div>
  			<div className="status card-section">
  				<p>{info.status}</p>
  			</div>
  			<div className="application-date card-section">
  				<p>{info.applicationDate}</p>
  			</div>
  			<div className="last-action card-section">
  				<p>{info.lastAction || "No Action"}</p>
  			</div>
  			<div className="location card-section">
  				<p>{info.location}</p>
  			</div>
  			<div className="high-needs card-section">
  				<p>{info.highNeeds || "High Needs"}</p>
  			</div>
  		</div>
  	});

    return (
      <div className="App">
        <div className="App-header">
          <h2>Nimble Applications</h2>
        </div>
        <div className="applicants-wrapper">
          { cards }
        </div>
      </div>
    );
  }
}

export default App;
