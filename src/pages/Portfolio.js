import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PortfolioItem from '../components/PortfolioItem';
import PortfolioList from '../data/PortfolioList';

export class Portfolio extends React.Component {
    render() {
        return (
            <>
                <section id="portfolio" className="bg-white">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-7 text-center">
                                <h3 className="font-alt letter-spacing-3 mb-0 text-extra-large-2 text-uppercase">Portfolio</h3>
                                <span className="bg-pink mt-1 mx-auto sep-line-medium-thick"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="gallery-wrapper">
                                    <div className="gallery-grid grid-col-2 gutter-wide">
                                        <ResponsiveMasonry columnsCountBreakPoints={{750: 1, 900: 2}}>
                                            <Masonry>  
                                                {PortfolioList.portfolio.map((item, i) => (
                                                    <PortfolioItem key={'item_' + i} item={item} />
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
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
export default Portfolio;