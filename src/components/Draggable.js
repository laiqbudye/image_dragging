import React, { useRef, useEffect } from 'react';
import image from './team.jpg';

export const Draggable = ({ x, y, canedit, onMove, showControls }) => {
    let diff_X = 0;
    let diff_Y = 0;
    const _ref = useRef();
    const _imageContainerRef = useRef();

    // useEffect which will act like componentDidUpdate
    useEffect(() => {
        _ref.current.style.transform = `translate(${x}px, ${y}px)`;
    }, [x, y]);

    // getting data from localstorage on componentDidMount
    useEffect(() => {
        let xpos = Number(localStorage.getItem('xpos'));
        let ypos = Number(localStorage.getItem('ypos'));
        onMove(xpos, ypos);
    }, []);



    const _onMouseDown = (e) => {
        if (e.button !== 0) {   // only allows dragging by right click of mouse
            return;
        } else if (!canedit) {
            return;
        }

    
        const { left, top } = _ref.current.getBoundingClientRect();
        diff_X = e.pageX - left; 
        diff_Y = e.pageY - top;   // TO DO: can be done in more better way
       
        document.addEventListener('mousemove', _onMouseMove);  // TO DO: can attach to _imageContainerRef.current
        document.addEventListener('mouseup', _onMouseUp);
        e.preventDefault();
    };

    const _onMouseMove = (e) => {
        onMove(
            e.pageX - diff_X,
            e.pageY - diff_Y
        );
        e.preventDefault();
    };

    const _onMouseUp = (e) => {
        document.removeEventListener('mousemove', _onMouseMove);
        document.removeEventListener('mouseup', _onMouseUp);
        e.preventDefault();
    };

    // const logo = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    return (
        <div className='imageContainer' ref={_imageContainerRef}>
            <img src={image} ref={_ref} onMouseDown={_onMouseDown}></img>
            {showControls && <div className="text-block">
                <p>Click & Move cursor</p>
            </div>}
        </div>
    )
}
