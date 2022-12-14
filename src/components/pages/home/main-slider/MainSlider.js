import CategoryImage from "./header-slider-item/category-image/CategoryImage";
import HeaderSliderItem from "./header-slider-item/HeaderSliderItem";
import SidebarNav from "./sidebar-nav/SidebarNav";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider() {
    const headerSliderImages = 
    [
        'img/slider-1.jpg',
        'img/slider-2.jpg',
        'img/slider-3.jpg',
    ];

    const categoryImagesCaptions = 
    [
        {image: 'img/category-1.png', caption: 'Here you can fufill all your needs for gaming machine'},
        {image: 'img/category-2.jpg', caption: 'We can offer you good computers for your business'}
    ];

    const sliderSettings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <SidebarNav />
                    <div className="col-md-6">
                        <Slider className="header-slider normal-slider" {...sliderSettings}>
                            {headerSliderImages.map(imageSource =>
                                <HeaderSliderItem key={imageSource} image={imageSource} />
                            )}
                        </Slider>
                    </div>
                    <div className="col-md-3">
                        <div className="header-img">
                            {categoryImagesCaptions.map(imageCaption =>
                                <CategoryImage key={imageCaption.image} {...imageCaption} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}