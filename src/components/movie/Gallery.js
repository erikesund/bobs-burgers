import React, {useState} from "react";
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
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="gallery">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}> 
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
            <div className="change-buttons">
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    Prev
                </button>

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

                <button onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Gallery;