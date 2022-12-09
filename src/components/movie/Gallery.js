import React, {useEffect, useState} from "react";
import "../../css/movie/gallery.css"

export const GalleryItem = ({children, width}) => {
    return (
        <div className="gallery-item" style={{ width: width}}>
            {children}
        </div>
    );
};

function Gallery ({children}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex =  React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 20000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}> 
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
            <div className="change-buttons">
                <i class="icon-arrow-left" 
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}/>

                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                        className={`${index === activeIndex ? "active" : ""}`}
                        onClick={() => {
                            updateIndex(index)
                        }}>
                            {index + 1}
                        </button>)
                })}
                <i class="icon-arrow-right"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}/>
            </div>
        </div>
    );
};

export default Gallery;