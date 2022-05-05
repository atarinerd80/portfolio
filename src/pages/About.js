import React from "react";

export class About extends React.Component {
    render() {
        return (
            <>
                <section id="about" className="bg-white pb-0">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                        <div className="col-lg-7 text-center">
                            <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">About Me</h3>
                            <p className="font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase">Just an ordinary guy, who is doing something well.</p>
                            <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <p className="text-medium">I'm Thomas Slagle, a web developer with several years of experience. I have worked positions in both local and international businesses.</p>
                            <p className="text-medium">I began to learn software development in 2013, beginning with basic HTML/CSS, Javascript, and CMS systems, like Joomla. Since then, I have expanded my skills to include multiple front-end frameworks, as well as some working knowledge of back-end development.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-medium">I worked full-time as a software developer until 2017, when I made the switch to freelance work, alongside my career in barbering. I ensured to continue learning about new frameworks and working on projects in order to keep my skills handy.</p>
                            <p className="text-medium">I have now built up my own self-running barber shop, and am excited to make my way back into full time web development.</p>
                        </div>
                        <div className="col-12 mt-4 text-center">
                            <a href="#" className="btn btn-purple btn-small mt-5 shadow">Download Resume <i className="fas fa-download"></i></a>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default About;