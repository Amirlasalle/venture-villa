import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Image } from 'react-bootstrap';
import '../App.css'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import foodData from '../components/Jsons/food.json';
import activitiesData from '../components/Jsons/activities.json';


function Restaurants() {

    // const navigate = useNavigate();

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto',
    //     });
    // };


    // const handleNavLinkClick = (url) => {
    //     scrollToTop();
    //     navigate(url);
    // };
    const [backgroundColor, setBackgroundColor] = useState('#f3f2f2');
    const resetColor = useRef(null);

    const changeBgColor = () => {
        setBackgroundColor('#f3f2f2');
    };

    const [data2, setData2] = useState([]);
    const [searchQuery2, setSearchQuery2] = useState('');

    useEffect(() => {

        const searchData2 = [
            ...foodData,
            ...activitiesData
        ];
        setData2(searchData2);
    }, []);


    const searchedData2 = data2.filter((item) => {
        const filteredSearch2 = searchQuery2.trim().toLowerCase();
        const filteredName2 = item.name.toLowerCase().trim();
        return filteredName2.includes(filteredSearch2) || filteredName2 === filteredSearch2;
    });


    return (
        <div className="home mb-5">
            <Container fluid secondary="true" className="d-flex flex-wrap justify-content-around home">


                <div className='w-100 '>
                    <Row className=''>
                        <h2 className="text-center pb-4 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100" >
                        </h2>
                        <h2 className="mb-0 text-center section-divider-r w-100" >
                        </h2>
                    </Row>
                </div>

                <div className='w-100'>
                    <Row className=''>
                        <h2 className="mt-3 pr-5 justify-content-center">
                            Restaurants
                        </h2>
                    </Row>
                </div>


                <div className=''>
                    <Row className='mt-3'>

                        <h4 className="mb-2 pr-5 justify-content-center">
                            Discover the finest culinary experiences in Colombia.
                        </h4>
                        <p className="mt-1 mb-auto pr-5 justify-content-center font-light text-small">
                            From traditional delights to gourmet wonders, our curated guide ensures a delectable journey for every palate. Immerse yourself in Colombian hospitality and savor the unique flavors that await.
                        </p>
                    </Row>
                </div>

                <div className='w-100 mb-5 mt-3'>
                    <div ref={resetColor} variant='light' style={{ backgroundColor }} className='form-div  mx-3 p-3 text-left' onClick={changeBgColor}>
                        <span className='mx-1 '>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className='faMagGlass' />
                        </span>
                        <input
                            className="form-input search-btn-form" placeholder=" Venture Search..."
                            value={searchQuery2}
                            onChange={(e) => setSearchQuery2(e.target.value)}
                        />
                    </div>
                    {searchQuery2 && (
                        <div className="d-flex flex-wrap justify-content-center pt-3 pb-3 cards-bg">
                            {searchedData2.slice(0, 5).map((item) => (
                                <div key={item.name} className='search-data-item p-2'>
                                    <div className='search-data-icon-div'>
                                        <Image src={item.screenShot} alt={item.name} className='search-data-icon' />
                                    </div>
                                    <div className='search-data-text'>
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    

                </div>

            </Container>
        </div>
    );
}



export default Restaurants;