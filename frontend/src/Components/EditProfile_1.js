import React from 'react'
import './EditProfile_1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Footer from './Footer'
export default function EditProfile_1 () {
	return (
		<div className='EditProfile_1_EditProfile'>
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
								<img className='Vector' src = {ImgAsset.EditProfile_1_Vector} />
								<img className='Vector_1' src = {ImgAsset.EditProfile_1_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.EditProfile_1_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.EditProfile_1_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.EditProfile_1_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.EditProfile_1_Line31} />
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
			<Link to='/homepage'>
				<span className='HOME'>HOME</span>
			</Link>
			<span className='SIGNOUT'>SIGN OUT</span>
			<Link to='/recruiter_1'>
				<span className='MYJOBS'>MY JOBS</span>
			</Link>
			<span className='EDITPROFILE'>EDIT PROFILE</span>
			<Link to='/jobcreation'>
				<span className='POSTAJOB'>POST A JOB</span>
			</Link>
			<img className='image10' src = {ImgAsset.Recruiter_3_image10} />
			<img className='image12' src = {ImgAsset.Recruiter_3_image12} />
			<div className='image14'/>
			<img className='image16' src = {ImgAsset.Recruiter_3_image16} />
			<img className='image18' src = {ImgAsset.Recruiter_3_image18} />
			<img className='image19' src = {ImgAsset.Recruiter_3_image19} />
			<div className='Rectangle1592'/>
			<span className='BASICINFO'>BASIC INFO </span>
			<div className='Rectangle1598'/>
			<div className='Rectangle1602'/>
			<div className='Rectangle1601'/>
			<div className='Rectangle1604'/>
			<div className='Rectangle1600'/>
			<div className='Rectangle1599'/>
			<span className='FIRSTNAME'>FIRST NAME</span>
			<span className='MOBILENUMBER'>MOBILE NUMBER</span>
			<span className='EMAIL'>EMAIL</span>
			<span className='ADDOTHERINFO'>ADD OTHER INFO</span>
			<span className='CompanyName'>Company Name </span>
			<span className='LASTNAME'>LAST  NAME</span>
			<Link to='/candidatejobs'>
				<div className='Rectangle1607'/>
			</Link>
			<div className='Rectangle1608'/>
			<span className='SaveChanges'>Save Changes</span>
			<span className='Cancel'>Cancel</span>
		</div>
	)
}