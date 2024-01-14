import React from "react";

class ScrollToTop extends React.Component {
    render() {
        return (
            <div className="scroltop-progress scroltop-primary">
                <svg width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        )
    }
}

export default ScrollToTop