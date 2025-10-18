import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <outlet></outlet>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;