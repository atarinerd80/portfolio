import React from 'react';
import WorkHistory from '../components/WorkHistory';
import JobHistoryList from '../data/JobHistoryList';

export class Experience extends React.Component {
    render() {
        return (
            <>
                <section id="experience" className="bg-white pb-0">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-7 text-center">
                                <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">9 Years Experience</h3>
                                <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="timeline-vertical pb-5">
                                    <div className="timeline-item timeline-start mb-5">
                                        <div className="timeline-content border-pink p-3 p-lg-4 triangle-purple">
                                            <h4 className="font-alt letter-spacing-1 mb-0 text-small text-uppercase">Graduated from Somerset Community College</h4>
                                            <i className="fas fa-graduation-cap bg-pink"></i>
                                        </div>
                                    </div>
                                    {JobHistoryList.jobHistory.map((job, i) => (
                                        <WorkHistory key={'job_' + i} job={job} index={i}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Experience;