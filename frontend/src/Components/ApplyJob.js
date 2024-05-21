import React from 'react'
import './ApplyJob.css'
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
export default function ApplyJob () {
	return (
		<div className='ApplyJob_ApplyJob'>
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
								<img className='Vector' src = {ImgAsset.ApplyJob_Vector} />
								<img className='Vector_1' src = {ImgAsset.ApplyJob_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.ApplyJob_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.ApplyJob_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.ApplyJob_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.ApplyJob_Line31} />
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
			<div className='Rectangle51'/>
			<div className='Rectangle47'/>
			<div className='Rectangle48'/>
			<div className='Rectangle49'/>
			<div className='Rectangle46'/>
			<span className='Walkusthroughyourdesignprocess'>Walk us through your design process.</span>
			<span className='Proficientinwhichdesigntools'>Proficient in which design tools?</span>
			<span className='Howdoyouensureyourdesignsareuserfriendlyandaccessible'>How do you ensure your designs are user-friendly and accessible?</span>
			<span className='Giveanexampleofhowyoubalanceuserneedswithbusinessgoalsinyourdesigns'>Give an example of how you balance user needs with business goals in your designs.</span>
			<Link to='/applyjob2'>
				<div className='Rectangle50'/>
			</Link>
			<span className='Submit'>Submit</span>
			<Breadcrumb_1 className='Breadcrumb'/>
			<div className='Ellipse2'/>
			<img className='Line117' src = {ImgAsset.ApplyJob_Line117} />
			<div className='Ellipse4'/>
			<img className='Line118' src = {ImgAsset.ApplyJob_Line118} />
			<div className='Ellipse5'/>
			<img className='Line119' src = {ImgAsset.ApplyJob_Line119} />
			<div className='Ellipse3'/>
			<img className='Line120' src = {ImgAsset.ApplyJob_Line120} />
			<div className='Ellipse1'/>
			<span className='_1'>1</span>
			<span className='_2'>2</span>
			<span className='_3'>3</span>
			<span className='_4'>4</span>
			<span className='_5'>5</span>
		</div>
	)
}