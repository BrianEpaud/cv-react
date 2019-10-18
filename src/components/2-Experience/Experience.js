import React, { Component } from 'react';

const Exp = ({exp}) => {
  return (
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">{exp.title}</h3>
        <div class="subheading mb-3">{exp.heading}</div>
        <p>{exp.description}</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{exp.dates}</span>
      </div>
    </div>
  )
}
const experiences = [
  {
    title: 'Développeur Web',
    heading: 'Mission Locale Vendée Atlantique',
    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ",
    dates: "Septembre 2019 - Aujourd'hui"
  },
  {
    title: 'Chargé des Relations Entreprises',
    heading: 'Mission Locale Vendée Atlantique',
    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ",
    dates: "Avril 2013 - Aujourd'hui"
  },
  {
    title: 'Conseiller en Insertion Professionnelle',
    heading: 'Mission Locale de Nantes',
    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. ",
    dates: 'Juillet 2010 - Juin 2012'
  }
  
]

export default class Experience extends Component {
  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">
          {experiences.map(exp => {
            return (<Exp exp={exp} />)
          })}
        </div>
      </section>
      )
  }
}
