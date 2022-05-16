import React from "react";

export class Footer extends React.Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="bg-gray-100 py-0 section">
                    <div className="container">
                        <div className="row pb-4 pb-lg-3 pt-5">
                        <div className="col-lg-8">
                            <ul className="list-inline text-center text-lg-left text-medium text-md-large">
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="Behance"><i className="fab fa-behance"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="Google Plus"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="row border-top py-5">
                        <div className="col-12 text-center">
                            <p className="mb-0 text-medium">&copy; Thomas Slagle All rights reserved {currentYear}.</p>
                        </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
export default Footer;