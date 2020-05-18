import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    if (this.props.data) {
      var skillsMessage = this.props.data.skillsMessage;
      var toolsMessage = this.props.data.toolsMessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map((skills) => {
        return (
          <div className="three columns">
            <a href={skills.certificationUrl}><img src={skills.imageUrl} alt={skills.name} style={{ width: 100, height: 100, borderRadius:100 }} /></a>
          </div>
        )
      })
      var tools = this.props.data.tools.map((tools) => {
        return (
          <div className="three columns">
            <img src={tools.logo} alt={tools.name} style={{ width: 90, height: 90, margin:10 }} />
          </div>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Educación</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Empleos</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skills">

          <div className="three columns header-col">
            <h1><span>Habilidades</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillsMessage}
            </p>

            <span>
            {skills}
            </span>
          </div>
        </div>

        <div className="row tools">

          <div className="three columns header-col">
            <h1><span>Herramientas</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{toolsMessage}
            </p>

            <div>
            {tools}
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
