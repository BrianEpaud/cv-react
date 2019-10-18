import React, { Component } from 'react';

const Educ = ({ education }) => {
  return (
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">{education.subject}</h3>
        <div class="subheading mb-3">{education.degree}</div>
        <div>{education.school}</div>
        <p>{education.city}</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{education.dates}</span>
      </div>
    </div>
  )
}

const educations = [
  {
    school: 'ARINFO',
    degree: "Titre professionnel Bac+2",
    subject: "Développeur Web et Web mobile",
    city: 'La Roche sur Yon',
    dates: 'Novembre 2018 - Septembre 2019'
  },
  {
    school: 'Université de Nantes',
    degree: "Licence",
    subject: "Sciences de l'Éducation",
    city: 'Nantes',
    dates: 'Septembre 2008 - Juin 2009'
  },
  {
    school: 'Université de Nantes',
    degree: 'Licence',
    subject: 'Psychologie et Sciences Humaines',
    city: 'Nantes',
    dates: 'Septembre 2004 - Juin 2007'
  }
]

export default class Education extends Component {
  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div class="w-100">
          {educations.map(educ => {
            return (<Educ education={educ} />)
          })}
        </div>
      </section>
    )
  }
}
