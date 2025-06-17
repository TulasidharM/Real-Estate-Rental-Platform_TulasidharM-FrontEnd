// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CountDown from "../components/functions/CountDown";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import "../property-cards.css";
import { useState } from 'react';
import PropertyFilter from '../components/PropertyFilter';
import '../components/PropertyFilter.css';

function Properties() {
    // Remove activeCategory state since we're using filters now
    const [properties] = useState([
        {
            id: 1,
            title: "Cottage «Forrest 1»",
            type: "Cottage",
            agency: "@Red Oak Realty",
            image: "picture-of-a-wooden-building-in-the-forest.webp",
            price: "29.71",
            countdown: { h: 9, m: 45, s: 8 }
        },
        {
            id: 2,
            title: "Freshness",
            type: "Penthouse",
            agency: "@US California Real Estate",
            image: "pexels-stan-krotov-12737424 1.webp",
            price: "14.81",
            countdown: { h: 29, m: 15, s: 10 }
        },
        {
            id: 3,
            title: "Wish house",
            type: "Farmhouse",
            agency: "@Norway estate agency",
            image: "pexels-rachel-claire-8112843 1.webp",
            price: "16.62",
            countdown: { h: 23, m: 6, s: 1 }
        },
        {
            id: 4,
            title: "Spruce",
            type: "Cottage",
            agency: "@Dream House",
            image: "david-kovalenko-9-qFzV9a2Zc-unsplash.webp",
            price: "17.01",
            countdown: { h: 10, m: 30, s: 58 }
        },
        {
            id: 5,
            title: "Residence Rybna",
            type: "Manor",
            agency: "@Ukraine estate agency",
            image: "house_big-1.webp",
            price: "29.71",
            countdown: { h: 18, m: 21, s: 8 }
        },
        {
            id: 6,
            title: "Blue Sky",
            type: "Chalet",
            agency: "@US New York Real Estate",
            image: "house_big.webp",
            price: "17.31",
            countdown: { h: 23, m: 16, s: 11 }
        }
    ]);

    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        propertyType: 'All'
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    function like(e) {
        return e.target.classList.value === "fa-regular fa-heart like"
            ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
            : (e.target.classList.value = "fa-regular fa-heart like");
    }

    // Update filtered properties to only use filter state
    const filteredProperties = properties.filter(property => {
        const matchesType = filters.propertyType === 'All' || property.type === filters.propertyType;
        const matchesMinPrice = !filters.minPrice || parseFloat(property.price) >= parseFloat(filters.minPrice);
        const matchesMaxPrice = !filters.maxPrice || parseFloat(property.price) <= parseFloat(filters.maxPrice);
        
        return matchesType && matchesMinPrice && matchesMaxPrice;
    });

    return (
        // Start properties
        <div className="properties">
            <Container>
                <AnimationTitles
                    className="title mx-auto"
                    title="Discover more properties"
                />
                
                {/* Add the filter component after the title */}
                <PropertyFilter onFilterChange={handleFilterChange} />
                
                {/* Remove the entire tabs section with Swiper category buttons */}
                
                {/* Start cards */}
                <motion.div
                    initial={{ x: -80 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={15}
                        grabCursor={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            520: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper mt-4"
                    >
                        {filteredProperties.map((property) => (
                            <SwiperSlide key={property.id}>
                                <Card className="property-card bg-black-100 rounded">
                                    <Card.Body className="p-2">
                                        <div className="property-image-container rounded overflow-hidden position-relative">
                                            <Card.Img
                                                className="property-image"
                                                variant="top"
                                                alt={property.title}
                                                src={require(`../images/properties/${property.image}`)}
                                            />
                                            <i
                                                className="fa-regular fa-heart like"
                                                onClick={like}
                                            ></i>
                                        </div>
                                        <div className="property-content">
                                            <h5 className="mt-2 text-white fw-normal">
                                                {property.title}
                                            </h5>
                                            <p className="gray-90">{property.agency}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="me-3">
                                                    <CountDown {...property.countdown} />
                                                    <span className="gray-90">
                                                        Remaining Time
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="eth-amount d-flex align-items-center justify-content-end">
                                                        <i className="fa-brands fa-ethereum me-2"></i>
                                                        {property.price} ETH
                                                    </h6>
                                                    <span className="gray-90">
                                                        Current Bid
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                {/* End cards */}
            </Container>
        </div>
        // End properties
    );
}

export default Properties;
