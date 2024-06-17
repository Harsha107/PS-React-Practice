import React, { useState, useEffect } from 'react';
import './ProdPageStyles.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Data = [
    {
        id: 0,
        mainImage: 'https://files.cults3d.com/uploaders/14248337/illustration-file/925e99a8-cc00-415e-b687-28ea50718acd/Face-A.png',
        thumbnail: 'https://files.cults3d.com/uploaders/14248337/illustration-file/925e99a8-cc00-415e-b687-28ea50718acd/Face-A.png',
    },
    {
        id: 1,
        mainImage: 'https://files.cults3d.com/uploaders/14248337/illustration-file/0c27f47f-7267-4030-8956-63c3648de144/Face-B.png',
        thumbnail: 'https://files.cults3d.com/uploaders/14248337/illustration-file/0c27f47f-7267-4030-8956-63c3648de144/Face-B.png',
    },
    {
        id: 2,
        mainImage: 'https://files.cults3d.com/uploaders/14248337/illustration-file/7627df84-19cd-476c-b861-f05885cd80a2/Face-D.png',
        thumbnail: 'https://files.cults3d.com/uploaders/14248337/illustration-file/7627df84-19cd-476c-b861-f05885cd80a2/Face-D.png',
    },
];

const descData = [
    {
        id: 0,
        mainName: 'Description',
        content: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 1,
        mainName: 'Reviews',
        content: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        id: 2,
        mainName: 'Similar Items',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    }
]

const ProdPage = () => {

    const [value, setValue] = useState(0);
    const [products] = useState(Data);
    const {mainImage} = products[value];
    const [desc] = useState(descData);
    const [descValue, setDescValue] = useState(0);
    const [getWidth, setGetWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setGetWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if(getWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [getWidth]);

    return (
        <div className='prod-page-container'>
            <section className='pp-title-container'>
                <h1 className='pp-title'>Batman JL</h1>
            </section>
            <div style={{display:"flex",justifyContent:"center"}}>
                <section className='images-container'>
                    <div className='main-img-container'>
                    <img className='main-img' src={mainImage} alt="" />
                    </div>
                    <div className='sub-img-container'>
                        {products.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li onClick={() => setValue(item.id)}>
                                        <img src={item.thumbnail} alt="" className='sub-img' style={{opacity: index===value ? 1 : 0.5}}/>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </section>
                <div style={{marginLeft: "10px"}}>
                    <section className='pp-btn-container'>
                        <a href='/' target='' className='pp-btn'>Download</a>
                    </section>
                    <div className='pp-description-container'>
                        <section>
                            {desc.map((item, index) => {
                                return (
                                    <>
                                        <h1 className='pp-desc-select' 
                                            onClick={() => setDescValue(item.id)}
                                            style={{opacity: index === descValue ? 1 : 0.5, 
                                                transition: 'all 0.3s ease-in-out', 
                                                textDecoration: index === descValue ? 'underline' : 'none' }}>{item.mainName}</h1>
                                        <p style={{display: index === descValue ? 'inline' : 'none'}}>{item.content}</p>
                                    </>
                                )
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdPage;