import React from "react";

export class Home extends React.Component {
    render() {
        const person = {
            name: 'Thomas Alexander Slagle',
            age: 29,
            nationality: 'United States',
            location: 'Bronston, KY',
            email: 'tom.slagle@gmail.com',
            phone: '(606) 875-8906',
            interests: 'Video Games, Dungeons & Dragons, Horror Movies'
        };

        return (
            <>
                <section id="home" className="bg-img-cover pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="profile-card">
                                    <div className="profile-card-body bg-white p-4 p-sm-5 rounded-top shadow-lg">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="ml-lg-2 ml-xl-3">
                                                    <div className="border-bottom pt-4 pt-sm-0">
                                                        <h3 className="font-alt letter-spacing-1 mb-0 text-extra-large-2 text-uppercase">I'm Thomas Slagle</h3>
                                                        <p className="mt-1 font-w-700 letter-spacing-1 text-gray-600 text-medium text-uppercase">An independent front-end web developer from Somerset, KY</p>
                                                    </div>
                                                    <ul className="list-unstyled mt-4 text-medium">
                                                        <li><span>Full Name:</span> {person.name}</li>
                                                        <li><span>Age:</span> {person.age}</li>
                                                        <li><span>Nationality:</span> {person.nationality}</li>
                                                        <li><span>Location:</span> {person.location}</li>
                                                        <li><span>Email: </span> {person.email}</li>
                                                        <li><span>Phone</span> {person.phone}</li>
                                                        <li><span>My Interests:</span> {person.interests}</li>
                                                    </ul>
                                                    <a href="#about" className="btn btn-pink btn-small mt-4 page-scroll shadow">Full Bio Here</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 mt-5 mt-lg-0 order-lg-first">
                                                <img src="images/profile-card.jpg" alt="" className="img-fluid shadow"/>
                                            </div>
                                        </div>
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
export default Home;