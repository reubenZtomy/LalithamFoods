import React from "react";

class LoadingScreen extends React.Component {
    render() {
        return (
            <div className="load-text">
                <span data-text="L" className="text-load">L</span>
                <span data-text="A" className="text-load">A</span>
                <span data-text="L" className="text-load">L</span>
                <span data-text="I" className="text-load">I</span>
                <span data-text="T" className="text-load">T</span>
                <span data-text="H" className="text-load">H</span>
                <span data-text="A" className="text-load">A</span>
                <span data-text="M" className="text-load">M</span>
            </div>
        )
    }
}

export default LoadingScreen;
