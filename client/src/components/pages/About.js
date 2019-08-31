import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
            <h1>About this App</h1>
            <p className="my-1">
                This is a full stack react app for keeping contacts
            </p>
            <p className="bg-dark p">
                <strong> Version: 1.0.0</strong>
            </p>
        </div>
    )
}

About.propTypes = {

}

export default About
