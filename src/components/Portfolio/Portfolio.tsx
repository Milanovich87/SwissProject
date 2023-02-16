
import React from 'react';

import './Portfolio.scss'
var listOfImages: any[] = [];

class Portfolio extends React.Component {
    importAll(r: any) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../../assets/imagesPortfolio/', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (
            <>
                <h1 className='port__title'>PORTFOLIO</h1>
                <div className='portfolio'>

                    {
                        listOfImages.map(
                            (image, index) => <div className="portfolio__photo"><img className='photo' key={index} src={image} alt="info"></img></div>
                        )
                    }
                </div>
            </>
        )
    }
}
export default Portfolio;