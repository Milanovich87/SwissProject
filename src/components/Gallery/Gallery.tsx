import WSPGallery from './photos';
let galleryImages: never[] = [];
// class Gallery extends React.Component {


//     importAll(r: any) {
//         return r.keys().map(r);
//     }
//     componentWillMount() {
//         galleryImages = this.importAll(require.context('../../assets/imagesPortfolio/', false, /\.(png|jpe?g|svg)$/));
//     }

//     render() {
//         return (
//             <div className="port">
//                 <br />
//                 <div>
//                     <h2 className='port__title'>PORTFOLIO</h2>
//                 </div>


//                 <WSPGallery
//                     galleryImages={galleryImages}
//                 />
//                 <br />
//                 <h2 className="styling__email">
//                     Contact me <a href="mailto: info@milanovich.ch">info@milanovich.ch</a>
//                 </h2>
//             </div>
//         )
//     };
// }
export const Gallery = () => {

    const importAll = (r: any) => {
        return r.keys().map(r);
    }
    const galleryImages = importAll(require.context('../../assets/imagesPortfolio/', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="port">
            <br />
            <div>
                <h2 className='port__title'>PORTFOLIO</h2>
            </div>
            <WSPGallery
                galleryImages={galleryImages}
            />
            <br />
            <h2 className="styling__email">
                Contact me <a href="mailto: info@milanovich.ch">info@milanovich.ch</a>
            </h2>
        </div>
    )

}

export default Gallery;