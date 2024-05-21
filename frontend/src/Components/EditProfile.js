import React from 'react'
import './EditProfile.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
export default function EditProfile () {
	return (
		<div className='EditProfile_EditProfile'>
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
								<img className='Vector' src = {ImgAsset.EditProfile_Vector} />
								<img className='Vector_1' src = {ImgAsset.EditProfile_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.EditProfile_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.EditProfile_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.EditProfile_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.EditProfile_Line31} />
								<div className='Frame128'>
									<fisearch className='fisearch'/>
									<span className='Jobtittlekeywordcompany'>Job tittle, keyword, company</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='Footer'>
				<div className='Footer_1'>
					<div className='Jendo'>
						<Logo className='Logo_1'/>
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
								<fiarrowright className='fiarrowright'/>
								<span className='FooterLink_1'>About</span>
							</div>
							<div className='FooterLink_2'>
								<fiarrowright className='fiarrowright_1'/>
								<span className='Contact'>Contact</span>
							</div>
							<div className='FooterLink_3'>
								<fiarrowright className='fiarrowright_2'/>
								<span className='FooterLink_4'>Pricing</span>
							</div>
							<div className='FooterLink_5'>
								<fiarrowright className='fiarrowright_3'/>
								<span className='FooterLink_6'>Blog</span>
							</div>
						</div>
					</div>
					<div className='Candidate'>
						<span className='Candidate_1'>Candidate</span>
						<div className='Link_1'>
							<div className='FooterLink_7'>
								<fiarrowright className='fiarrowright_4'/>
								<span className='FooterLink_8'>Browse Jobs</span>
							</div>
							<div className='FooterLink_9'>
								<fiarrowright className='fiarrowright_5'/>
								<span className='FooterLink_10'>Browse Employers</span>
							</div>
							<div className='FooterLink_11'>
								<fiarrowright className='fiarrowright_6'/>
								<span className='FooterLink_12'>Candidate Dashboard</span>
							</div>
							<div className='FooterLink_13'>
								<fiarrowright className='fiarrowright_7'/>
								<span className='FooterLink_14'>Saved Jobs</span>
							</div>
						</div>
					</div>
					<div className='Employers'>
						<span className='Employers_1'>Employers</span>
						<div className='Link_2'>
							<div className='FooterLink_15'>
								<fiarrowright className='fiarrowright_8'/>
								<span className='FooterLink_16'>Post a Job</span>
							</div>
							<div className='FooterLink_17'>
								<fiarrowright className='fiarrowright_9'/>
								<span className='FooterLink_18'>Browse Candidates</span>
							</div>
							<div className='FooterLink_19'>
								<fiarrowright className='fiarrowright_10'/>
								<span className='EmployersDashboard'>Employers Dashboard</span>
							</div>
							<div className='FooterLink_20'>
								<fiarrowright className='fiarrowright_11'/>
								<span className='FooterLink_21'>Applications</span>
							</div>
						</div>
					</div>
					<div className='Support'>
						<span className='Support_1'>Support</span>
						<div className='Link_3'>
							<div className='FooterLink_22'>
								<fiarrowright className='fiarrowright_12'/>
								<span className='FooterLink_23'>Faqs</span>
							</div>
							<div className='FooterLink_24'>
								<fiarrowright className='fiarrowright_13'/>
								<span className='FooterLink_25'>Privacy Policy</span>
							</div>
							<div className='FooterLink_26'>
								<fiarrowright className='fiarrowright_14'/>
								<span className='FooterLink_27'>Terms & Conditions</span>
							</div>
						</div>
					</div>
				</div>
				<div className='Copyright'>
					<span className='_2021JobpilotJobPortalAllrightsRserved'>@ 2021 Jobpilot - Job Portal. All rights Rserved</span>
					<div className='SocialMedia'>
						<img className='Vector_5' src = {ImgAsset.EditProfile_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.EditProfile_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.EditProfile_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.EditProfile_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.EditProfile_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.EditProfile_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.EditProfile_Vector_11} />
						</div>
					</div>
				</div>
			</div>
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
			<div className='Rectangle1592'/>
			<div className='Rectangle1603'/>
			<span className='BASICINFO'>BASIC INFO </span>
			<span className='UploadYourCV'>Upload Your CV</span>
			<div className='Rectangle1598'/>
			<div className='Rectangle1602'/>
			<div className='Rectangle1605'/>
			<div className='Rectangle1601'/>
			<div className='Rectangle1604'/>
			<div className='Rectangle1600'/>
			<div className='Rectangle1599'/>
			<span className='FIRSTNAME'>FIRST NAME</span>
			<span className='MOBILENUMBER'>MOBILE NUMBER</span>
			<span className='EMAIL'>EMAIL</span>
			<span className='GITHUBLINK'>GITHUB LINK </span>
			<span className='LINKEDLNLINK'>LINKEDLN LINK </span>
			<span className='LASTNAME'>LAST  NAME</span>
			<span className='CHOOSEYOURFILEPDF'>CHOOSE YOUR FILE(PDF)</span>
			<div className='Rectangle1606'/>
			<Link to='/candidatejobs'>
				<div className='Rectangle1607'/>
			</Link>
			<div className='Rectangle1608'/>
			<span className='UPLOAD'>UPLOAD</span>
			<span className='SaveChanges'>Save Changes</span>
			<span className='Cancel'>Cancel</span>
		</div>
	)
}