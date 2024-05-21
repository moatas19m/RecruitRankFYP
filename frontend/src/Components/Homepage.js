import React from 'react'
import './Homepage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import Container1 from "./Container1"
import Property1Full from "./Property1Full"
import MapPin from "./MapPin"
import EmployersGoogleSizeMedium from "./EmployersGoogleSizeMedium"
import Property1Intern from "./Property1Intern"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
export default function Homepage () {
	return (
		<div className='Homepage_Homepage'>
			<div className='Rectangle1'/>
			<div className='Frame137'>
				<span className='ExploreSuitableCareerPathsBasedonInterestsandSkills'>Explore Suitable Career Paths Based on Interests and Skills.</span>
			</div>
			<div className='Search'>
				<div className='Search_1'>
					<div className='Frame106'>
						<div className='InputField'>
							<span className='JobtittleKeyword'>Job tittle, Keyword...</span>
							<fisearch className='fisearch'/>
						</div>
						<img className='Line1' src = {ImgAsset.Homepage_Line1} />
						<div className='InputField_1'>
							<span className='JobtittleKeyword_1'>Your Location</span>
							<fimappin className='fimappin'/>
						</div>
					</div>
				</div>
				<div className='Suggestion'>
					<span className='Suggestion_1'>Suggestion:</span>
					<span className='Designer'> Designer,</span>
					<span className='Programing'> Programing,</span>
					<span className='DigitalMarketing'> Digital Marketing,</span>
					<span className='Video'> Video,</span>
					<span className='Animation'> Animation.</span>
				</div>
			</div>
			<div className='Rectangle3'/>
			<Container1 className='Carousel'/>
			<span className='TopJobs'>Top Jobs</span>
			<div className='Rectangle4'/>
			<div className='Rectangle5'/>
			<div className='NotificationSection'>
				<div className='Notification'>
					<div className='JobNotification'>
						<span className='WanttogetnotifiedoneveryJobPosting'>Want to get notified on <br/>every Job Posting?</span>
					</div>
					<div className='Subscribe'>
						<div className='Enteremail'>
							<span className='EnterYourEmailAddress'>Enter Your Email Address</span>
						</div>
						<div className='Subscribe_1'>
							<span className='Subscribe_2'>Subscribe</span>
						</div>
					</div>
				</div>
			</div>
			<div className='Ellipse1'/>
			<img className='casuallife3d141' src = {ImgAsset.Homepage_casuallife3d141} />
			<img className='image8' src = {ImgAsset.Homepage_image8} />
			<div className='Feature'>
				<div className='Icon'>
					<div className='briefcaseduotone1'>
						<img className='Vector' src = {ImgAsset.Homepage_Vector} />
						<img className='Vector_1' src = {ImgAsset.Homepage_Vector_1} />
						<img className='Vector_2' src = {ImgAsset.Homepage_Vector_2} />
						<img className='Vector_3' src = {ImgAsset.Homepage_Vector_3} />
						<img className='Vector_4' src = {ImgAsset.Homepage_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.Homepage_Vector_5} />
					</div>
				</div>
				<div className='Info'>
					<span className='_175324'>1,75,324</span>
					<span className='LiveJob'>Live Job</span>
				</div>
			</div>
			<div className='Feature_1'>
				<div className='Icon_1'>
					<div className='usersduotone1'>
						<img className='Vector_6' src = {ImgAsset.Homepage_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Homepage_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.Homepage_Vector_8} />
						<img className='Vector_9' src = {ImgAsset.Homepage_Vector_9} />
						<img className='Vector_10' src = {ImgAsset.Homepage_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Homepage_Vector_11} />
					</div>
				</div>
				<div className='Info_1'>
					<span className='_3847154'>38,47,154</span>
					<span className='Candidates'>Candidates</span>
				</div>
			</div>
			<div className='Feature_2'>
				<div className='Icon_2'>
					<div className='briefcaseduotone1_1'>
						<img className='Vector_12' src = {ImgAsset.Homepage_Vector_12} />
						<img className='Vector_13' src = {ImgAsset.Homepage_Vector_13} />
						<img className='Vector_14' src = {ImgAsset.Homepage_Vector_14} />
						<img className='Vector_15' src = {ImgAsset.Homepage_Vector_15} />
						<img className='Vector_16' src = {ImgAsset.Homepage_Vector_16} />
						<img className='Vector_17' src = {ImgAsset.Homepage_Vector_17} />
					</div>
				</div>
				<div className='Info_2'>
					<span className='_7532'>7,532</span>
					<span className='NewJobs'>New Jobs</span>
				</div>
			</div>
			<div className='Frame138'>
				<span className='DiscoverwhymillionsofcandidateschooseRecruitRanksfortheirjobs'>Discover why millions of candidates choose Recruit Ranks for their jobs.</span>
			</div>
			<div className='Frame683'>
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
					<div className='Info_3'>
						<span className='GoogleInc'>Google Inc.</span>
						<div className='Loaction'>
							<MapPin className='MapPin'/>
							<span className='DhakaBangladesh'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo'/>
				</div>
				<div className='Frame688'>
					<div className='Rectangle1590_1'/>
					<div className='Job_1'>
						<div className='Heading_1'>
							<span className='UIUXDesigner'>UI/UX Designer</span>
						</div>
						<div className='Frame675_1'>
							<Property1Full className='Type_1'/>
							<span className='Salary2000025000_1'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_4'>
						<span className='GoogleInc_1'>Google Inc.</span>
						<div className='Loaction_1'>
							<MapPin className='MapPin_1'/>
							<span className='DhakaBangladesh_1'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_1'/>
				</div>
				<div className='Frame686'>
					<div className='Rectangle1590_2'/>
					<div className='Job_2'>
						<div className='Heading_2'>
							<span className='ProductDesigner'>Product Designer</span>
						</div>
						<div className='Frame675_2'>
							<Property1Full className='Type_2'/>
							<span className='Salary2000025000_2'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_5'>
						<span className='GoogleInc_2'>Google Inc.</span>
						<div className='Loaction_2'>
							<MapPin className='MapPin_2'/>
							<span className='DhakaBangladesh_2'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_2'/>
				</div>
				<div className='Frame689'>
					<div className='Rectangle1590_3'/>
					<div className='Job_3'>
						<div className='Heading_3'>
							<span className='SoftwareEngineer'>Software Engineer</span>
						</div>
						<div className='Frame675_3'>
							<Property1Full className='Type_3'/>
							<span className='Salary2000025000_3'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_6'>
						<span className='GoogleInc_3'>Google Inc.</span>
						<div className='Loaction_3'>
							<MapPin className='MapPin_3'/>
							<span className='DhakaBangladesh_3'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_3'/>
				</div>
				<div className='Frame693'>
					<div className='Rectangle1590_4'/>
					<div className='Job_4'>
						<div className='Heading_4'>
							<span className='InteractionDesigner'>Interaction Designer</span>
						</div>
						<div className='Frame675_4'>
							<Property1Full className='Type_4'/>
							<span className='Salary2000025000_4'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_7'>
						<span className='GoogleInc_4'>Google Inc.</span>
						<div className='Loaction_4'>
							<MapPin className='MapPin_4'/>
							<span className='DhakaBangladesh_4'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_4'/>
				</div>
				<div className='Frame687'>
					<div className='Rectangle1590_5'/>
					<div className='Job_5'>
						<div className='Heading_5'>
							<span className='NetworkingEngineer'>Networking Engineer</span>
						</div>
						<div className='Frame675_5'>
							<Property1Intern className='Type_5'/>
							<span className='Salary2000025000_5'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_8'>
						<span className='GoogleInc_5'>Google Inc.</span>
						<div className='Loaction_5'>
							<MapPin className='MapPin_5'/>
							<span className='DhakaBangladesh_5'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_5'/>
				</div>
				<div className='Frame681'>
					<div className='Rectangle1590_6'/>
					<div className='Job_6'>
						<div className='Heading_6'>
							<span className='FrontEndDeveloper'>Front End Developer</span>
							<div className='Frame675_6'>
								<Property1Full className='Type_6'/>
								<span className='Salary2000025000_6'>Salary: $20,000 - $25,000</span>
							</div>
						</div>
					</div>
					<div className='Info_9'>
						<span className='GoogleInc_6'>Google Inc.</span>
						<div className='Loaction_6'>
							<MapPin className='MapPin_6'/>
							<span className='DhakaBangladesh_6'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_6'/>
				</div>
				<div className='Frame694'>
					<div className='Rectangle1590_7'/>
					<div className='Job_7'>
						<div className='Heading_7'>
							<span className='ProjectManager'>Project Manager</span>
						</div>
						<div className='Frame675_7'>
							<Property1Full className='Type_7'/>
							<span className='Salary2000025000_7'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_10'>
						<span className='GoogleInc_7'>Google Inc.</span>
						<div className='Loaction_7'>
							<MapPin className='MapPin_7'/>
							<span className='DhakaBangladesh_7'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_7'/>
				</div>
				<div className='Frame691'>
					<div className='Rectangle1590_8'/>
					<div className='Job_8'>
						<div className='Heading_8'>
							<span className='ProjectManager_1'>Project Manager</span>
						</div>
						<div className='Frame675_8'>
							<Property1Full className='Type_8'/>
							<span className='Salary2000025000_8'>Salary: $20,000 - $25,000</span>
						</div>
					</div>
					<div className='Info_11'>
						<span className='GoogleInc_8'>Google Inc.</span>
						<div className='Loaction_8'>
							<MapPin className='MapPin_8'/>
							<span className='DhakaBangladesh_8'>Dhaka, Bangladesh</span>
						</div>
					</div>
					<EmployersGoogleSizeMedium className='EmployersLogo_8'/>
				</div>
			</div>
			<div className='Heading_9'>
				<span className='Featuredjob'>Featured job</span>
			</div>
			<div className='Footer'>
				<div className='Footer_1'>
					<div className='Jendo'>
						<Logo className='Logo'/>
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
						<img className='Vector_18' src = {ImgAsset.Homepage_Vector_18} />
						<div className='youtube1'>
							<img className='Vector_19' src = {ImgAsset.Homepage_Vector_19} />
							<img className='Vector_20' src = {ImgAsset.Homepage_Vector_20} />
						</div>
						<div className='instagram1'>
							<img className='Vector_21' src = {ImgAsset.Homepage_Vector_21} />
							<img className='Vector_22' src = {ImgAsset.Homepage_Vector_22} />
							<img className='Vector_23' src = {ImgAsset.Homepage_Vector_23} />
						</div>
						<div className='twitter1'>
							<img className='Vector_24' src = {ImgAsset.Homepage_Vector_24} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}