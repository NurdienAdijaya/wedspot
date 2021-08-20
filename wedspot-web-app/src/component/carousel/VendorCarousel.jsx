import React,{useState, useEffect} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import axios from 'axios';
import img1 from '../asset/Arista.png';
import { textAlign } from '@material-ui/system';

const SimpleSlider = () => {
    const [data, setData] = useState ([])
    const getData = () => {
        axios
        .get("http://localhost:3002/data")
        .then((res) => {
            console.log(res);
            setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData()
    }, [])
return(
    <Slider autoplay={3000}>
        {data.map((data, index) => (
            <div
                key={index}
                // style={{background: `url('${data.image_poster}') no-repeat center center` }}
            >
                <div className="center" style={{textAlign:"center", backgroundColor:"yellow"}}>
                    {/* <h1>{data.title}</h1> */}
                    <img src={img1} alt=""></img>
                    {/* <p>{item.description}</p> */}
                    {/* <button>{item.button}</button> */}
                </div>
            </div>
        ))}
    </Slider>
);

}

export default SimpleSlider;