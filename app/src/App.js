import React, { Component } from 'react';
import logo from './logo.svg';
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
  		return <div key={index} class="info card">
  			<div class="face">
  				<img src/>
  			</div>
  			<div class="name-info">
  				<h1>{info.name}</h1>
  				<p>{info.name}@nimble.com</p>
  			</div>
  			<div class="status">
  				<h1>{info.status}</h1>
  			</div>
  			<div class="application-date">
  				<h1>{info.applicationDate}</h1>
  			</div>
  			<div class="last-action">
  				<h1>{info.lastAction}</h1>
  			</div>
  			<div class="location">
  				<h1>{info.location}</h1>
  			</div>
  			<div class="high-needs">
  				<h1>{info.highNeeds}</h1>
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
