import React from 'react'
import './Singleuser.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
export default function Singleuser () {
	return (
		<div className='Singleuser_Singleuser'>
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
								<img className='Vector' src = {ImgAsset.Singleuser_Vector} />
								<img className='Vector_1' src = {ImgAsset.Singleuser_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.Singleuser_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.Singleuser_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Singleuser_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.Singleuser_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.Singleuser_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.Singleuser_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Singleuser_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.Singleuser_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Singleuser_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.Singleuser_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.Singleuser_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<div className='Footer_2'>
				<div className='Footer_3'>
					<div className='Jendo_1'>
						<Logo className='Logo_2'/>
						<div className='Frame7_1'>
							<div className='PhoneNumber_1'>
								<span className='Callnow_1'>Call now:</span>
								<span className='_3195550115_1'> (319) 555-0115</span>
							</div>
							<span className='_6391ElginStCelinaDelaware10299NewYorkUnitedStatesofAmerica_1'>6391 Elgin St. Celina, Delaware 10299, New York, United States of America</span>
						</div>
					</div>
					<div className='Com_1'>
						<span className='QuickLink_1'>Quick Link</span>
						<div className='Link_4'>
							<div className='FooterLink_28'>
								<fiarrowright className='fiarrowright_15'/>
								<span className='FooterLink_29'>About</span>
							</div>
							<div className='FooterLink_30'>
								<fiarrowright className='fiarrowright_16'/>
								<span className='Contact_1'>Contact</span>
							</div>
							<div className='FooterLink_31'>
								<fiarrowright className='fiarrowright_17'/>
								<span className='FooterLink_32'>Pricing</span>
							</div>
							<div className='FooterLink_33'>
								<fiarrowright className='fiarrowright_18'/>
								<span className='FooterLink_34'>Blog</span>
							</div>
						</div>
					</div>
					<div className='Candidate_2'>
						<span className='Candidate_3'>Candidate</span>
						<div className='Link_5'>
							<div className='FooterLink_35'>
								<fiarrowright className='fiarrowright_19'/>
								<span className='FooterLink_36'>Browse Jobs</span>
							</div>
							<div className='FooterLink_37'>
								<fiarrowright className='fiarrowright_20'/>
								<span className='FooterLink_38'>Browse Employers</span>
							</div>
							<div className='FooterLink_39'>
								<fiarrowright className='fiarrowright_21'/>
								<span className='FooterLink_40'>Candidate Dashboard</span>
							</div>
							<div className='FooterLink_41'>
								<fiarrowright className='fiarrowright_22'/>
								<span className='FooterLink_42'>Saved Jobs</span>
							</div>
						</div>
					</div>
					<div className='Employers_2'>
						<span className='Employers_3'>Employers</span>
						<div className='Link_6'>
							<div className='FooterLink_43'>
								<fiarrowright className='fiarrowright_23'/>
								<span className='FooterLink_44'>Post a Job</span>
							</div>
							<div className='FooterLink_45'>
								<fiarrowright className='fiarrowright_24'/>
								<span className='FooterLink_46'>Browse Candidates</span>
							</div>
							<div className='FooterLink_47'>
								<fiarrowright className='fiarrowright_25'/>
								<span className='EmployersDashboard_1'>Employers Dashboard</span>
							</div>
							<div className='FooterLink_48'>
								<fiarrowright className='fiarrowright_26'/>
								<span className='FooterLink_49'>Applications</span>
							</div>
						</div>
					</div>
					<div className='Support_2'>
						<span className='Support_3'>Support</span>
						<div className='Link_7'>
							<div className='FooterLink_50'>
								<fiarrowright className='fiarrowright_27'/>
								<span className='FooterLink_51'>Faqs</span>
							</div>
							<div className='FooterLink_52'>
								<fiarrowright className='fiarrowright_28'/>
								<span className='FooterLink_53'>Privacy Policy</span>
							</div>
							<div className='FooterLink_54'>
								<fiarrowright className='fiarrowright_29'/>
								<span className='FooterLink_55'>Terms & Conditions</span>
							</div>
						</div>
					</div>
				</div>
				<div className='Copyright_1'>
					<span className='_2021JobpilotJobPortalAllrightsRserved_1'>@ 2021 Jobpilot - Job Portal. All rights Rserved</span>
					<div className='SocialMedia_1'>
						<img className='Vector_12' src = {ImgAsset.Singleuser_Vector_12} />
						<div className='youtube1_1'>
							<img className='Vector_13' src = {ImgAsset.Singleuser_Vector_13} />
							<img className='Vector_14' src = {ImgAsset.Singleuser_Vector_14} />
						</div>
						<div className='instagram1_1'>
							<img className='Vector_15' src = {ImgAsset.Singleuser_Vector_15} />
							<img className='Vector_16' src = {ImgAsset.Singleuser_Vector_16} />
							<img className='Vector_17' src = {ImgAsset.Singleuser_Vector_17} />
						</div>
						<div className='twitter1_1'>
							<img className='Vector_18' src = {ImgAsset.Singleuser_Vector_18} />
						</div>
					</div>
				</div>
			</div>
			<div className='Rectangle1591'/>
			<img className='image20' src = {ImgAsset.Recruiter_3_image18} />
			<img className='image13' src = {ImgAsset.Recruiter_3_image12} />
			<img className='image9' src = {ImgAsset.Recruiter_3_image9} />
			<span className='KhansaJunaid'>Khansa Junaid</span>
			<span className='khansajunaidinfolabscom'>khansajunaid@infolabs.com</span>
			<span className='HOME'>HOME</span>
			<span className='SIGNOUT'>SIGN OUT</span>
			<Link to='/recruiter_1'>
				<span className='MYJOBS'>MY JOBS</span>
			</Link>
			<Link to='/editprofile_1'>
				<span className='EDITPROFILE'>EDIT PROFILE</span>
			</Link>
			<Link to='/jobcreation'>
				<span className='POSTAJOB'>POST A JOB</span>
			</Link>
			<Link to='/homepage'>
				<img className='image11' src = {ImgAsset.Recruiter_3_image10} />
			</Link>
			<img className='image20_1' src = {ImgAsset.Recruiter_3_image19} />
			<Link to='/recruiter_1'>
				<img className='image17' src = {ImgAsset.Recruiter_3_image16} />
			</Link>
			<div className='Rectangle1598'/>
			<span className='AliAslam'>Ali Aslam</span>
			<div className='Rectangle1609'/>
			<span className='DELETEAPPLICATION'>DELETE APPLICATION</span>
			<div className='Rectangle1610'/>
			<span className='SCHEDULEINTERVIEW'>SCHEDULE INTERVIEW</span>
			<div className='Rectangle1611'/>
			<span className='DOWNLOADRESUME'>DOWNLOAD RESUME</span>
			<div className='Rectangle1612'/>
			<span className='REJECTAPPLICATION'>REJECT APPLICATION</span>
			<div className='Rectangle1613'/>
			<span className='EDUCATION'>EDUCATION</span>
			<div className='Rectangle1614'/>
			<div className='Rectangle1616'/>
			<div className='Rectangle1617'/>
			<div className='Rectangle1618'/>
			<div className='Rectangle1619'/>
			<span className='programming'>programming</span>
			<span className='BSCS'>BSCS </span>
			<span className='january2020january2024'>january 2020 - january 2024</span>
			<span className='InstituteofbusinessAdmninistration'>Institute of business Admninistration</span>
			<div className='Rectangle1615'/>
			<div className='Rectangle1620'/>
			<div className='Rectangle1621'/>
			<div className='Rectangle1622'/>
			<div className='Rectangle1623'/>
			<div className='Rectangle1624'/>
			<div className='Rectangle1625'/>
			<div className='Rectangle1626'/>
			<span className='Wireframes'>Wireframes</span>
			<span className='python'>python</span>
			<span className='figma'>figma</span>
			<span className='css'>css</span>
			<span className='react'>react</span>
			<span className='Html'>Html</span>
			<span className='datamodelling'>data modelling</span>
			<span className='jsdeveloper'>js developer</span>
			<span className='java'>java</span>
			<span className='Prototyping'>Prototyping</span>
			<span className='SKILLS'>SKILLS</span>
			<span className='applied2weeksago'>applied 2 weeks ago</span>
			<span className='GPA37'>GPA : 3.7</span>
		</div>
	)
}