import logo from './logo.svg';
import './App.css';
import Slider from './component/carousel/ImageCarousel';
import ImageCarousel from './component/carousel/ImageCarousel';
import RatingExampleDisabled from './component/rating/star';
import Venue from './component/Card/Venue';
import Banner from './component/banner/banner';
// import HoverRating from './component/rating/star';
// import Cards from './component/banner/banner';


function App() {
  return (
    <div>
      <Banner/>
      {/* < Cards /> */}
      < ImageCarousel/>
      {/* < HoverRating /> */}
      < Venue />
    </div>
  );
}

export default App;
