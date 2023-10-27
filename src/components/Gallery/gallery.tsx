'use client';
import React from 'react'
import { useEffect } from 'react'
import Splitting from 'splitting';

const Gallery = () => {
    useEffect(() => {
        console.clear();
        const res = Splitting({
            target: '.tiler',
            by: 'cells',
            rows: 3,
            columns: 3,
            image: true,
        });
        console.log(res);
    }, []);


    return (
        <>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>
            <div className="tiler">
                <img src="/testImage1.jpg" alt='' />
            </div>

            <div className="tiler">
                <img src="/testImage2.jpg" alt='' />
            </div>

            <div className="tiler">
                <img src="/testImage3.jpg" alt='' />
            </div>
        </>
    )
}

export default Gallery