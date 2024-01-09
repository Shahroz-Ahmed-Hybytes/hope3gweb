import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewCard from './ReviewCard';
import hopeLogo from "../images/hopeLogo.png";

const reviews = [
    {
        image: hopeLogo,
        name: "Matt",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
    {
        image: hopeLogo,
        name: "Mohamed",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
    {
        image: hopeLogo,
        name: "Ishan",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
    {
        image: hopeLogo,
        name: "Jubeen",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
    {
        image: hopeLogo,
        name: "Darren",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
    {
        image: hopeLogo,
        name: "Karl",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi asperiores exercitationem enim, nobis in est nihil quia tempora repudiandae saepe."
    },
]

const Carousel = () => {
    return (
        <>
        <h5 className="display-5" style={{textAlign: "center"}}>Customer Reviews</h5>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            {reviews.map(rev => {
                return(
                    <div>
                        <ReviewCard image={rev.image} name={rev.name} review={rev.review}/>
                    </div>
                )
            })}
            {/* <div>
                <ReviewCard/>
            </div>
            <div>
                <ReviewCard/>
            </div>
            <div>
                <ReviewCard/>
            </div>
            <div>
                <ReviewCard/>
            </div>
            <div>
                <ReviewCard/>
            </div>
            <div>
                <ReviewCard/>
            </div> */}
            
        </OwlCarousel>
        </>
    );
};

export default Carousel;