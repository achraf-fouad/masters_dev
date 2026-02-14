import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Story from '../sections/Story';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import ClientForm from '../sections/ClientForm';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Story />
                <About />
                <Projects />
                <Services />
                {/*<Testimonials />*/}
                <ClientForm />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;
