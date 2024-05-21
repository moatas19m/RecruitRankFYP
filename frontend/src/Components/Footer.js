import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import ImgAsset from '../public'
import Logo from "./Logo"
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import fiarrowright from "./fiarrowright"
//import About from './../../pages/About';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_1'>
                <div className='Jendo'>
                    <Logo className='Logo' />
                    <div className='Frame7'>
                        <div className='PhoneNumber'>
                            <span className='Callnow'>Call now:</span>
                            <span className='_3195550115'> (319) 555-0115</span>
                        </div>
                        <span className='_6391ElginStCelinaDelaware10299NewYorkUnitedStatesofAmerica'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</span>
                    </div>
                </div>
                <div className='Com'>
                    <span className='QuickLink'>Quick Link</span>
                    <div className='Link'>
                        <div className='FooterLink'>
                            <fiarrowright className='fiarrowright' />
                            <span className='FooterLink_1'>About</span>
                        </div>
                        <div className='FooterLink_2'>
                            <fiarrowright className='fiarrowright_1' />
                            <span className='Contact'>Contact</span>
                        </div>
                        <div className='FooterLink_3'>
                            <fiarrowright className='fiarrowright_2' />
                            <span className='FooterLink_4'>Pricing</span>
                        </div>
                        <div className='FooterLink_5'>
                            <fiarrowright className='fiarrowright_3' />
                            <span className='FooterLink_6'>Blog</span>
                        </div>
                    </div>
                </div>
                <div className='Candidate'>
                    <span className='Candidate_1'>Candidate</span>
                    <div className='Link_1'>
                        <div className='FooterLink_7'>
                            <fiarrowright className='fiarrowright_4' />
                            <span className='FooterLink_8'>Browse Jobs</span>
                        </div>
                        <div className='FooterLink_9'>
                            <fiarrowright className='fiarrowright_5' />
                            <span className='FooterLink_10'>Browse Employers</span>
                        </div>
                        <div className='FooterLink_11'>
                            <fiarrowright className='fiarrowright_6' />
                            <span className='FooterLink_12'>Candidate Dashboard</span>
                        </div>
                        <div className='FooterLink_13'>
                            <fiarrowright className='fiarrowright_7' />
                            <span className='FooterLink_14'>Saved Jobs</span>
                        </div>
                    </div>
                </div>
                <div className='Employers'>
                    <span className='Employers_1'>Employers</span>
                    <div className='Link_2'>
                        <div className='FooterLink_15'>
                            <fiarrowright className='fiarrowright_8' />
                            <span className='FooterLink_16'>Post a Job</span>
                        </div>
                        <div className='FooterLink_17'>
                            <fiarrowright className='fiarrowright_9' />
                            <span className='FooterLink_18'>Browse Candidates</span>
                        </div>
                        <div className='FooterLink_19'>
                            <fiarrowright className='fiarrowright_10' />
                            <span className='EmployersDashboard'>Employers Dashboard</span>
                        </div>
                        <div className='FooterLink_20'>
                            <fiarrowright className='fiarrowright_11' />
                            <span className='FooterLink_21'>Applications</span>
                        </div>
                    </div>
                </div>
                <div className='Support'>
                    <span className='Support_1'>Support</span>
                    <div className='Link_3'>
                        <div className='FooterLink_22'>
                            <fiarrowright className='fiarrowright_12' />
                            <span className='FooterLink_23'>Faqs</span>
                        </div>
                        <div className='FooterLink_24'>
                            <fiarrowright className='fiarrowright_13' />
                            <span className='FooterLink_25'>Privacy Policy</span>
                        </div>
                        <div className='FooterLink_26'>
                            <fiarrowright className='fiarrowright_14' />
                            <span className='FooterLink_27'>Terms & Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Copyright'>
                <span className='_2021JobpilotJobPortalAllrightsRserved'>@ 2021 Jobpilot - Job Portal. All rights Rserved</span>
                <div className='SocialMedia'>
                    <img className='Vector_18' src={ImgAsset.Homepage_Vector_18} />
                    <div className='youtube1'>
                        <img className='Vector_19' src={ImgAsset.Homepage_Vector_19} />
                        <img className='Vector_20' src={ImgAsset.Homepage_Vector_20} />
                    </div>
                    <div className='instagram1'>
                        <img className='Vector_21' src={ImgAsset.Homepage_Vector_21} />
                        <img className='Vector_22' src={ImgAsset.Homepage_Vector_22} />
                        <img className='Vector_23' src={ImgAsset.Homepage_Vector_23} />
                    </div>
                    <div className='twitter1'>
                        <img className='Vector_24' src={ImgAsset.Homepage_Vector_24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer