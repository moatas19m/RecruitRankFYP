import React from 'react'
import './ApplyJob2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Breadcrumb_1 from "./Breadcrumb_1"
import Footer from './Footer'
export default function ApplyJob2 () {
	return (
		<div className='ApplyJob2_ApplyJob2'>
			<div className='Frame135'>
				<div className='Frame130'>
					<div className='NavLink'>
						<span className='Home'>Home</span>
					</div>
					<div className='NavLink_1'>
						<span className='Home_1'>Find Job</span>
					</div>
					<div className='NavLink_2'>
						<span className='Home_2'>Employers</span>
					</div>
					<div className='NavLink_3'>
						<span className='Home_3'>Candidates</span>
					</div>
					<div className='NavLink_4'>
						<span className='Aboutus'>About us </span>
					</div>
					<div className='NavLink_5'>
						<span className='Contactus'>Contact us </span>
					</div>
				</div>
				<div className='Frame135_1'>
					<div className='Frame134'>
						<PhoneCall className='PhoneCall'/>
						<span className='_213246628899'>21-32466288-9-9</span>
					</div>
					<div className='NavLink_6'>
						<img className='image1' src = {ImgAsset.Recruiter_image1} />
						<div className='Frame129'>
							<span className='English'>English</span>
							<fichevrondown className='fichevrondown'/>
						</div>
					</div>
				</div>
			</div>
			<div className='Navigation'>
				<div className='Navigation_1'>
					<div className='Frame126'>
						<div className='Logo'>
							<div className='briefcase1'>
								<img className='Vector' src = {ImgAsset.ApplyJob2_Vector} />
								<img className='Vector_1' src = {ImgAsset.ApplyJob2_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.ApplyJob2_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.ApplyJob2_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.ApplyJob2_Vector_4} />
							</div>
							<span className='RecruitRanks'>RecruitRanks</span>
						</div>
						<div className='Search'>
							<div className='Frame136'>
								<img className='Flag_of_Pakistan1' src = {ImgAsset.Navigation_Flag_of_Pakistan1} />
								<div className='Frame127'>
									<span className='Pakistan'>Pakistan</span>
									<CaretDown className='CaretDown'/>
								</div>
								<img className='Line31' src = {ImgAsset.ApplyJob2_Line31} />
								<div className='Frame128'>
									<fisearch className='fisearch'/>
									<span className='Jobtittlekeywordcompany'>Job tittle, keyword, company</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
			<div className='Rectangle1591'/>
			<img className='image9' src = {ImgAsset.Recruiter_3_image9} />
			<span className='KhansaJunaid'>Khansa Junaid</span>
			<span className='khansajunaidinfolabscoom'>khansajunaid@infolabs.coom</span>
			<span className='HOME'>HOME</span>
			<span className='SIGNOUT'>SIGN OUT</span>
			<span className='MYJOBS'>MY JOBS</span>
			<span className='EDITPROFILE'>EDIT PROFILE</span>
			<span className='POSTAJOB'>POST A JOB</span>
			<img className='image10' src = {ImgAsset.Recruiter_3_image10} />
			<img className='image12' src = {ImgAsset.Recruiter_3_image12} />
			<div className='image14'/>
			<img className='image16' src = {ImgAsset.Recruiter_3_image16} />
			<img className='image18' src = {ImgAsset.Recruiter_3_image18} />
			<img className='image19' src = {ImgAsset.Recruiter_3_image19} />
			<div className='Ellipse2'/>
			<img className='Line117' src = {ImgAsset.ApplyJob2_Line117} />
			<div className='Ellipse4'/>
			<img className='Line118' src = {ImgAsset.ApplyJob2_Line118} />
			<div className='Ellipse5'/>
			<img className='Line119' src = {ImgAsset.ApplyJob2_Line119} />
			<div className='Ellipse3'/>
			<img className='Line120' src = {ImgAsset.ApplyJob2_Line120} />
			<div className='Ellipse1'/>
			<span className='_1'>1</span>
			<span className='_2'>2</span>
			<span className='_3'>3</span>
			<span className='_4'>4</span>
			<span className='_5'>5</span>
			<Link to='/homepage'>
				<div className='Rectangle53'/>
			</Link>
			<div className='Ellipse6'/>
			<div className='Rectangle52'/>
			<div className='Rectangle51'/>
			<span className='ThankyouforapplyingYourapplicationfortheSeniorUIUXDesignerrolehasbeensuccessfullysubmittedYouwillbeinformedaboutyourstatus'>Thank you for applying! Your application for the Senior UI/UX Designer role has been successfully submitted. You will be informed about your status.</span>
			<span className='StatusInprocess'>Status: In - process</span>
			<Breadcrumb_1 className='Breadcrumb'/>
		</div>
	)
}