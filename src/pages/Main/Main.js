import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,   Education, Experience, Contacts, Projects } from '../../components'


function Main() {
    return (
        <div>
            
            <Helmet>
                <title>Ayush Ghiya</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
