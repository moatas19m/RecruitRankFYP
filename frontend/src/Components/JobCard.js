import React from 'react'
import './JobCard.css'
import { Link } from 'react-router-dom'
import ImgAsset from '../public'
import Logo from "./Logo"
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import fiarrowright from "./fiarrowright"
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium"
import MapPin from "./MapPin"
import Property1Full from "./Property1Full"
import Property1Intern from "./Property1Intern"

//import About from './../../pages/About';

const JobCard = () => {
    return (
        <div className='Frame682'>
            <div className='Rectangle1590' />
            <div className='Job'>
                <div className='Heading'>
                    <span className='SeniorUXDesigner'>Senior UX Designer</span>
                    <div className='Frame675'>
                        <Property1Full className='Type' />
                        <span className='Salary2000025000'>Salary: $20,000 - $25,000</span>
                    </div>
                </div>
            </div>
            <div className='Info_3'>
                <span className='GoogleInc'>Google Inc.</span>
                <div className='Loaction'>
                    <MapPin className='MapPin' />
                    <span className='DhakaBangladesh'>Dhaka, Bangladesh</span>
                </div>
            </div>
            <EmployersGoogleSizeMedium className='EmployersLogo' />
        </div>
    )
}

export default JobCard