import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            Gallery Page
            <div>
                {
                    [1,2,3,4]?.map(img => (
                        <Image key={img} src={`/${img}.png`} alt='name' width={400} height={500} />
                    ))
                }
            </div>
            <Image src="/38fc0c14-129c-4182-934e-919f9cdce6be.jpg" alt="" width={400} height={500} />
        </div>
    );
};

export default GalleryPage;