import React from 'react'
import './Singleuser_1.css'
import ImgAsset from '../public'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Footer from './Footer'
export default function Singleuser_1 () {
	return (
		<div className='Singleuser_1_Singleuser'>
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
								<img className='Vector' src = {ImgAsset.Singleuser_1_Vector} />
								<img className='Vector_1' src = {ImgAsset.Singleuser_1_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.Singleuser_1_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.Singleuser_1_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Singleuser_1_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.Singleuser_1_Line31} />
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
						<img className='Vector_12' src = {ImgAsset.Singleuser_1_Vector_12} />
						<div className='youtube1_1'>
							<img className='Vector_13' src = {ImgAsset.Singleuser_1_Vector_13} />
							<img className='Vector_14' src = {ImgAsset.Singleuser_1_Vector_14} />
						</div>
						<div className='instagram1_1'>
							<img className='Vector_15' src = {ImgAsset.Singleuser_1_Vector_15} />
							<img className='Vector_16' src = {ImgAsset.Singleuser_1_Vector_16} />
							<img className='Vector_17' src = {ImgAsset.Singleuser_1_Vector_17} />
						</div>
						<div className='twitter1_1'>
							<img className='Vector_18' src = {ImgAsset.Singleuser_1_Vector_18} />
						</div>
					</div>
				</div>
			</div>
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
			<div className='Rectangle1'/>
			<div className='NavSidebar'>
				<div className='Privacy'>
					<span className='Privacy_1'>Privacy</span>
					<img className='iconprivacy' src = {ImgAsset.Singleuser_1_iconprivacy} />
				</div>
				<div className='Support_4'>
					<span className='Support_5'>Support</span>
					<img className='iconsupport' src = {ImgAsset.Singleuser_1_iconsupport} />
				</div>
				<div className='Setting'>
					<span className='Setting_1'>Setting</span>
					<img className='iconsetting' src = {ImgAsset.Singleuser_1_iconsetting} />
				</div>
				<div className='Communities'>
					<span className='Communities_1'>Communities</span>
					<img className='iconcommunities' src = {ImgAsset.Singleuser_1_iconcommunities} />
				</div>
				<div className='Tasks'>
					<span className='Tasks_1'>Tasks</span>
					<img className='icontasks' src = {ImgAsset.Singleuser_1_icontasks} />
				</div>
				<div className='History'>
					<span className='History_1'>History</span>
					<img className='iconhistory' src = {ImgAsset.Singleuser_1_iconhistory} />
				</div>
				<div className='Msg'>
					<span className='Messages'>Messages</span>
					<img className='iconmsg' src = {ImgAsset.Singleuser_1_iconmsg} />
				</div>
				<div className='Profile'>
					<span className='Profile_1'>Profile</span>
					<img className='iconprofile' src = {ImgAsset.Singleuser_1_iconprofile} />
				</div>
				<div className='Home_4'>
					<span className='Home_5'>Home</span>
					<img className='iconhome' src = {ImgAsset.Singleuser_1_iconhome} />
				</div>
				<div className='logo_title'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Logo_3'>
						<div className='Rectangle4'/>
						<img className='Line1' src = {ImgAsset.Singleuser_1_Line1} />
						<img className='Line2' src = {ImgAsset.Singleuser_1_Line2} />
						<img className='Line3' src = {ImgAsset.Singleuser_1_Line3} />
					</div>
				</div>
			</div>
			<div className='Rectangle1630'/>
			<span className='DELETEUSER'>DELETE USER</span>
		</div>
	)
}