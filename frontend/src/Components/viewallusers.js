import React from 'react'
import './viewallusers.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Property1Full from "./Property1Full"
import MapPin from "./MapPin"
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium"
import Property1Intern from "./Property1Intern"
import Pagination from "./Pagination"
export default function Viewallusers () {
	return (
		<div className='viewallusers_viewallusers'>
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
								<img className='Vector' src = {ImgAsset.viewallusers_Vector} />
								<img className='Vector_1' src = {ImgAsset.viewallusers_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.viewallusers_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.viewallusers_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.viewallusers_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.viewallusers_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.viewallusers_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.viewallusers_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.viewallusers_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.viewallusers_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.viewallusers_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.viewallusers_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.viewallusers_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<div className='Rectangle1'/>
			<div className='NavSidebar'>
				<div className='Privacy'>
					<span className='Privacy_1'>Privacy</span>
					<img className='iconprivacy' src = {ImgAsset.viewallusers_iconprivacy} />
				</div>
				<div className='Support_2'>
					<span className='Support_3'>Support</span>
					<img className='iconsupport' src = {ImgAsset.viewallusers_iconsupport} />
				</div>
				<div className='Setting'>
					<span className='Setting_1'>Setting</span>
					<img className='iconsetting' src = {ImgAsset.viewallusers_iconsetting} />
				</div>
				<div className='Communities'>
					<span className='Communities_1'>Communities</span>
					<img className='iconcommunities' src = {ImgAsset.viewallusers_iconcommunities} />
				</div>
				<div className='Tasks'>
					<span className='Tasks_1'>Tasks</span>
					<img className='icontasks' src = {ImgAsset.viewallusers_icontasks} />
				</div>
				<div className='History'>
					<span className='History_1'>History</span>
					<img className='iconhistory' src = {ImgAsset.viewallusers_iconhistory} />
				</div>
				<div className='Msg'>
					<span className='Messages'>Messages</span>
					<img className='iconmsg' src = {ImgAsset.viewallusers_iconmsg} />
				</div>
				<div className='Profile'>
					<span className='Profile_1'>Profile</span>
					<img className='iconprofile' src = {ImgAsset.viewallusers_iconprofile} />
				</div>
				<div className='Home_4'>
					<span className='Home_5'>Home</span>
					<img className='iconhome' src = {ImgAsset.viewallusers_iconhome} />
				</div>
				<div className='logo_title'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Logo_2'>
						<div className='Rectangle4'/>
						<img className='Line1' src = {ImgAsset.viewallusers_Line1} />
						<img className='Line2' src = {ImgAsset.viewallusers_Line2} />
						<img className='Line3' src = {ImgAsset.viewallusers_Line3} />
					</div>
				</div>
			</div>
			<div className='Header'>
				<div className='Rectangle3'/>
				<div className='Header_1'>
					<div className='Lowerheader'><div className='logousr' style={{backgroundImage: `url(${ImgAsset.ADMIN_logousr}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						<span className='Hithere'>Hi there,</span>
						<span className='ADMIN'>ADMIN</span>
						<div className='newbtn'>
							<div className='Rectangle9'/>
							<span className='NewUser'>New User</span>
						</div>
						<div className='uploadbtn'>
							<div className='Rectangle8'/>
							<span className='PostaJob'>Post a Job</span>
						</div>
						<div className='sharebtn'>
							<div className='Rectangle7'/>
							<span className='Share'>Share</span>
						</div>
					</div>
					<div className='Upperheader'><div className='logousrmini' style={{backgroundImage: `url(${ImgAsset.ADMIN_logousr}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						<div className='searchbar'/>
						<span className='ADMIN_1'>ADMIN</span>
						<div className='iconsearch'>
							<img className='Vector_12' src = {ImgAsset.viewallusers_Vector_12} />
						</div>
						<div className='iconnotif'>
							<img className='Vector_13' src = {ImgAsset.viewallusers_Vector_13} />
						</div>
					</div>
				</div>
			</div>
			<div className='Frame697'>
				<div className='Frame682'>
					<div className='Rectangle1590'/>
					<div className='Job'>
						<div className='Heading'>
							<span className='SeniorUXDesigner'>Senior UX Designer</span>
							<div className='Frame675'>
								<Property1Full className='Type'/>
								<span className='Salary2000025000'>Salary: $20,000 - $25,000</span>
							</div>
						</div>
					</div>
					<div className='Info'>
						<span className='GoogleInc'>Google Inc.</span>
						<div className='Loaction'>
							<MapPin className='MapPin'/>
							<span className='DhakaBangladesh'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo'/>
				</div>
				<div className='Frame684'>
					<div className='Rectangle1590_1'/>
					<div className='Job_1'>
						<div className='Heading_1'>
							<span className='MarketingManager'>Marketing Manager</span>
						</div>
						<div className='Frame676'>
							<Property1Intern className='Type_1'/>
							<span className='Salary2000025000_1'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_1'>
						<span className='GoogleInc_1'>Google Inc.</span>
						<div className='Loaction_1'>
							<MapPin className='MapPin_1'/>
							<span className='DhakaBangladesh_1'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_1'/>
				</div>
				<Link to='/singlejob'>
					<div className='Frame687'>
						<div className='Rectangle1590_2'/>
						<div className='Job_2'>
							<div className='Heading_2'>
								<span className='NetworkingEngineer'>Networking Engineer</span>
							</div>
							<div className='Frame675_1'>
								<Property1Intern className='Type_2'/>
								<span className='Salary2000025000_2'>Salary: $20,000 - $25,000</span>
							</div>
						</div>
						<div className='Info_2'>
							<span className='GoogleInc_2'>Google Inc.</span>
							<div className='Loaction_2'>
								<MapPin className='MapPin_2'/>
								<span className='DhakaBangladesh_2'>Dhaka, Bangladesh</span>
							</div>
						</div>
						<EmployersGoogleSizeMedium className='EmployersLogo_2'/>
					</div>
				</Link>
				<div className='Frame685'>
					<div className='Rectangle1590_3'/>
					<div className='Job_3'>
						<div className='Heading_3'>
							<span className='UIUXDesigner'>UI/UX Designer</span>
						</div>
						<div className='Frame675_2'>
							<Property1Full className='Type_3'/>
							<span className='Salary2000025000_3'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_3'>
						<span className='GoogleInc_3'>Google Inc.</span>
						<div className='Loaction_3'>
							<MapPin className='MapPin_3'/>
							<span className='DhakaBangladesh_3'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_3'/>
				</div>
				<div className='Frame681'>
					<div className='Rectangle1590_4'/>
					<div className='Job_4'>
						<div className='Heading_4'>
							<span className='FrontEndDeveloper'>Front End Developer</span>
							<div className='Frame675_3'>
								<Property1Full className='Type_4'/>
								<span className='Salary2000025000_4'>Salary: $20,000 - $25,000</span>
							</div>
						</div>
					</div>
					<div className='Info_4'>
						<span className='GoogleInc_4'>Google Inc.</span>
						<div className='Loaction_4'>
							<MapPin className='MapPin_4'/>
							<span className='DhakaBangladesh_4'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_4'/>
				</div>
				<div className='Frame686'>
					<div className='Rectangle1590_5'/>
					<div className='Job_5'>
						<div className='Heading_5'>
							<span className='ProductDesigner'>Product Designer</span>
						</div>
						<div className='Frame675_4'>
							<Property1Full className='Type_5'/>
							<span className='Salary2000025000_5'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_5'>
						<span className='GoogleInc_5'>Google Inc.</span>
						<div className='Loaction_5'>
							<MapPin className='MapPin_5'/>
							<span className='DhakaBangladesh_5'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_5'/>
				</div>
				<div className='Frame693'>
					<div className='Rectangle1590_6'/>
					<div className='Job_6'>
						<div className='Heading_6'>
							<span className='InteractionDesigner'>Interaction Designer</span>
						</div>
						<div className='Frame675_5'>
							<Property1Full className='Type_6'/>
							<span className='Salary2000025000_6'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_6'>
						<span className='GoogleInc_6'>Google Inc.</span>
						<div className='Loaction_6'>
							<MapPin className='MapPin_6'/>
							<span className='DhakaBangladesh_6'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_6'/>
				</div>
				<div className='Frame689'>
					<div className='Rectangle1590_7'/>
					<div className='Job_7'>
						<div className='Heading_7'>
							<span className='SoftwareEngineer'>Software Engineer</span>
						</div>
						<div className='Frame675_6'>
							<Property1Full className='Type_7'/>
							<span className='Salary2000025000_7'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_7'>
						<span className='GoogleInc_7'>Google Inc.</span>
						<div className='Loaction_7'>
							<MapPin className='MapPin_7'/>
							<span className='DhakaBangladesh_7'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_7'/>
				</div>
				<div className='Frame692'>
					<div className='Rectangle1590_8'/>
					<div className='Job_8'>
						<div className='Heading_8'>
							<span className='JuniorGraphicDesigner'>Junior Graphic Designer</span>
						</div>
						<div className='Frame675_7'>
							<Property1Full className='Type_8'/>
							<span className='Salary2000025000_8'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_8'>
						<span className='GoogleInc_8'>Google Inc.</span>
						<div className='Loaction_8'>
							<MapPin className='MapPin_8'/>
							<span className='DhakaBangladesh_8'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_8'/>
				</div>
				<div className='Frame691'>
					<div className='Rectangle1590_9'/>
					<div className='Job_9'>
						<div className='Heading_9'>
							<span className='ProjectManager'>Project Manager</span>
						</div>
						<div className='Frame675_8'>
							<Property1Full className='Type_9'/>
							<span className='Salary2000025000_9'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_9'>
						<span className='GoogleInc_9'>Google Inc.</span>
						<div className='Loaction_9'>
							<MapPin className='MapPin_9'/>
							<span className='DhakaBangladesh_9'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_9'/>
				</div>
				<div className='Frame690'>
					<div className='Rectangle1590_10'/>
					<div className='Job_10'>
						<div className='Heading_10'>
							<span className='VisualDesigner'>Visual Designer</span>
						</div>
						<div className='Frame675_9'>
							<Property1Full className='Type_10'/>
							<span className='Salary2000025000_10'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_10'>
						<span className='GoogleInc_10'>Google Inc.</span>
						<div className='Loaction_10'>
							<MapPin className='MapPin_10'/>
							<span className='DhakaBangladesh_10'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_10'/>
				</div>
				<div className='Frame694'>
					<div className='Rectangle1590_11'/>
					<div className='Job_11'>
						<div className='Heading_11'>
							<span className='ProjectManager_1'>Project Manager</span>
						</div>
						<div className='Frame675_10'>
							<Property1Full className='Type_11'/>
							<span className='Salary2000025000_11'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_11'>
						<span className='GoogleInc_11'>Google Inc.</span>
						<div className='Loaction_11'>
							<MapPin className='MapPin_11'/>
							<span className='DhakaBangladesh_11'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_11'/>
				</div>
			</div>
			<Pagination className='Pagination'/>
			<span className='ALLJOBS'>ALL  JOBS:</span>
		</div>
	)
}