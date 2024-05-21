import React from 'react'
import './Recruiter.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Pagination from "./Pagination"
import Property1Full from "./Property1Full"
import MapPin from "./MapPin"
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium"
import Property1Intern from "./Property1Intern"
export default function Recruiter () {
	return (
		<div className='Recruiter_Recruiter'>
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
								<img className='Vector' src = {ImgAsset.Recruiter_Vector} />
								<img className='Vector_1' src = {ImgAsset.Recruiter_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.Recruiter_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.Recruiter_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Recruiter_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.Recruiter_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.Recruiter_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.Recruiter_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Recruiter_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.Recruiter_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Recruiter_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.Recruiter_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.Recruiter_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<Pagination className='Pagination'/>
			<div className='Rectangle1591'/>
			<div className='Frame696'>
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
			<img className='image20' src = {ImgAsset.Recruiter_3_image18} />
			<img className='image13' src = {ImgAsset.Recruiter_3_image12} />
			<span className='HELL0KHANSAJUNAID'>HELL0, KHANSA JUNAID!</span>
			<span className='CREATEDJOBS'>CREATED JOBS:</span>
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
		</div>
	)
}