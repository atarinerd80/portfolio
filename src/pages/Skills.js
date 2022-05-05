import React from "react";

export class Skills extends React.Component {
    render() {
        return (
            <>
                <section id="skills" className="bg-white pb-0">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-7 text-center">
                                <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">Skills</h3>
                                <p className="font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase">I love nature and enjoy learning new skills.</p>
                                <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chart-bar pr-lg-3">
                                    <h4 className="font-alt letter-spacing-2 text-large text-uppercase">Technical Skills</h4>
                                    <span className="bg-pink sep-line"></span>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">HTML &amp; CSS</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">React JS</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">Aurelia JS</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">JavaScript</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">SASS &amp; Less</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="chart-bar pl-lg-3">
                                    <h4 className="font-alt letter-spacing-2 text-large text-uppercase">Personal Skills</h4>
                                    <span className="bg-pink sep-line"></span>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">Communication</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">Critical Thinking</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">Team Work</label>
                                    </div>
                                    <div className="chart-item mt-4">
                                        <label className="font-w-700 letter-spacing-1 text-medium text-uppercase">Organization</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Skills;