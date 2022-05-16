import React from 'react';
import PaginatedProducts from '../components/PaginatedProducts';

export class Ecommerce extends React.Component {
    render() {
        return (
            <>
                <section id="ecommerce">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-7 text-center">
                                <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">Mock Ecommerce Component</h3>
                                <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p>This component was built to show use of APIs and pagination to create a mock e-commerce widget. The API used is created by DummyJSON and provides an API full of mock product information.</p>
                                <p>The API is used with two different calls, one to get a list of all products, and another to search. Each set of results is paginated, with calculation of the offset of results for each page figured out using JavaScript.</p>
                                <p>The thumbnail images passed through the API are also different sizes. The CSS accounts for this in resizing images to appear the same size, giving a much cleaner look.</p>
                            </div>
                        </div>                        
                        <PaginatedProducts />
                    </div>
                </section>
            </>
        );
    }
}
export default Ecommerce;