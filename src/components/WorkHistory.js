import React from "react";

export class WorkHistory extends React.Component {
    render() {
        const sectionClass = (this.props.index % 2 === 0 ? 'timeline-item mt-5 mt-lg-2' : 'timeline-item timeline-inverted mt-5 mt-lg-2');

        return (
            <>
                <div className={sectionClass}>
                    <div className="timeline-year mb-4 mb-lg-0">
                        <span className="bg-pink font-alt font-w-700 letter-spacing-1 shadow text-small text-uppercase text-white">{this.props.job.years}</span>
                    </div>
                    <i className="bg-white far fa-dot-circle fa-2x text-purple"></i>
                    <div className="timeline-content p-3 p-lg-4 triangle-yellow">
                        <span className="font-w-700 letter-spacing-1 text-small text-uppercase">{this.props.job.title}</span> 
                        <h4 className="font-alt letter-spacing-1 mb-0 text-medium text-uppercase">{this.props.job.company}</h4>
                        <div className="bg-gray-100 mt-3 p-3 rounded">
                            <p className="mb-0 text-medium">{this.props.job.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default WorkHistory;