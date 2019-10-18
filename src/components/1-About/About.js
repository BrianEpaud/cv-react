import React, {Component} from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Brian',
      lastName:'EPAUD',
      adress:"17,impasse Théodore Géricault, 85180 Les Sables d'Olonne",
      phone:"06.23.02.56.63",
      email:'epaud.brian@gmail.com',
      bio:"Je suis un gentil développeur! J'aime le code et plus si affinité! Le Design, le marketing et la relation clientèle. ",
      socials:{
        linkedin:'https://www.linkedin.com/in/brianepaud/',
        twitter:'https://twitter.com/BrianEpaud',
        facebook:'https://www.facebook.com/brian.epaud',
        github:'https://github.com/BrianEpaud'
      }
    }
  }
    render() {
        return(  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id='about'>
        <div className="w-100">
          <h1 className="mb-0">{this.state.firstName} 
        <span className="text-primary"> {this.state.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.state.adress} · {this.state.phone} · 
        <a href={`mailto:${this.state.email}`}>{this.state.email}</a>
          </div>
          <p classNameName="lead mb-5">{this.state.bio}</p>
          <div className="social-icons">
            <a target='_blank' rel='noopener noreferrer' href={`${this.state.socials.linkedin}`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={`${this.state.socials.github}`}>
              <i className="fab fa-github"></i>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={`${this.state.socials.twitter}`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={`${this.state.socials.facebook}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>)
    }
}