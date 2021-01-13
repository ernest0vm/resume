import React, { Component } from 'react';
import ParticlesBg from "particles-bg";

class Header extends Component {
   render() {

      if (this.props.data) {
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <ParticlesBg type="cobweb" color="#14ffff" bg={true} />

            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                  <li><a className="smoothscroll" href="#about">Acerca de </a></li>
                  <li><a className="smoothscroll" href="#education">Educacion </a></li>
                  <li><a className="smoothscroll" href="#work">Empleos</a></li>
                  <li><a className="smoothscroll" href="#skills">Habilidades</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portafolio</a></li>
                  {/* <li><a className="smoothscroll" href="#contact">Contacto</a></li> */}
               </ul>
            </nav>

            <div className="row banner">

               <div className="banner-text">
                  <h1 className="responsive-headline">{name}</h1>
                  <h2>{description}.</h2>
                  <hr />
                  <ul className="social">
                     <ul className="social-links">
                        {networks}
                     </ul>
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
