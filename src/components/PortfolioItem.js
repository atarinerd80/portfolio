import React from "react";
import { FaSearch, FaLink } from "react-icons/fa";

export class PortfolioItem extends React.Component {
    render() {
        return (
            <>
            <div className="gallery-item">
                <figure>
                    <img src={this.props.item.image} alt="" className="img-fluid" />
                    <div className="figure-link">
                        <a href={this.props.item.website} className="zoom bg-pink text-white" target="_blank">
                            <FaLink />
                        </a>
                        <a href={this.props.item.image} className="bg-purple text-white" target="_blank">
                            <FaSearch />
                        </a>
                    </div>
                </figure>
                <div className="figure-caption py-3">
                    <span className="font-w-700 letter-spacing-1 text-medium text-pink text-uppercase">{this.props.item.tech}</span>
                    <h4 className="font-alt mb-0 mt-2 text-dark text-large text-lg-extra-large">{this.props.item.title}</h4>
                </div>
            </div>
            </>
        );
    }
}
export default PortfolioItem;