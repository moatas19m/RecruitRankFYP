import React from 'react'
import './RegisterCandidate.css'
import ImgAsset from '../public'
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Breadcrumb from "./Breadcrumb"
export default function RegisterCandidate () {
	return (
		<div className='RegisterCandidate_RegisterCandidate'>
			<div className='Rectangle2'/>
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
						<img className='Line1' src = {ImgAsset.RegisterCandidate_Line1} />
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
			<img className='image2' src = {ImgAsset.Signin_image2} />
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
						<span className='About'>About</span>
					</div>
					<div className='NavLink_5'>
						<span className='ContactUs'>Contact Us</span>
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
								<img className='Vector' src = {ImgAsset.RegisterCandidate_Vector} />
								<img className='Vector_1' src = {ImgAsset.RegisterCandidate_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.RegisterCandidate_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.RegisterCandidate_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.RegisterCandidate_Vector_4} />
							</div>
							<span className='RecruitRanks'>RecruitRanks</span>
						</div>
						<div className='Search_2'>
							<div className='Frame136'>
								<img className='Flag_of_Pakistan1' src = {ImgAsset.Navigation_Flag_of_Pakistan1} />
								<div className='Frame127'>
									<span className='Pakistan'>Pakistan</span>
									<CaretDown className='CaretDown'/>
								</div>
								<img className='Line31' src = {ImgAsset.RegisterCandidate_Line31} />
								<div className='Frame128'>
									<fisearch className='fisearch_1'/>
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
						<img className='Vector_5' src = {ImgAsset.RegisterCandidate_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.RegisterCandidate_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.RegisterCandidate_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.RegisterCandidate_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.RegisterCandidate_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.RegisterCandidate_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.RegisterCandidate_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<div className='Signup'>
				<div className='BlendGroup1'>
					<img className='Vector69' src = {ImgAsset.RegisterCandidate_Vector69} />
					<img className='Vector68copy' src = {ImgAsset.RegisterCandidate_Vector68copy} />
					<img className='Vector68copy_1' src = {ImgAsset.RegisterCandidate_Vector68copy_1} />
					<img className='Vector68copy_2' src = {ImgAsset.RegisterCandidate_Vector68copy_2} />
					<img className='Vector68copy_3' src = {ImgAsset.RegisterCandidate_Vector68copy_3} />
					<img className='Vector68copy_4' src = {ImgAsset.RegisterCandidate_Vector68copy_4} />
					<img className='Vector68copy_5' src = {ImgAsset.RegisterCandidate_Vector68copy_5} />
					<img className='Vector68copy_6' src = {ImgAsset.RegisterCandidate_Vector68copy_6} />
					<img className='Vector68copy_7' src = {ImgAsset.RegisterCandidate_Vector68copy_7} />
					<img className='Vector68copy_8' src = {ImgAsset.RegisterCandidate_Vector68copy_8} />
					<img className='Vector68copy_9' src = {ImgAsset.RegisterCandidate_Vector68copy_9} />
					<img className='Vector68copy_10' src = {ImgAsset.RegisterCandidate_Vector68copy_10} />
					<img className='Vector68copy_11' src = {ImgAsset.RegisterCandidate_Vector68copy_11} />
					<img className='Vector68copy_12' src = {ImgAsset.RegisterCandidate_Vector68copy_12} />
					<img className='Vector68copy_13' src = {ImgAsset.RegisterCandidate_Vector68copy_13} />
					<img className='Vector68copy_14' src = {ImgAsset.RegisterCandidate_Vector68copy_14} />
					<img className='Vector68copy_15' src = {ImgAsset.RegisterCandidate_Vector68copy_15} />
					<img className='Vector68copy_16' src = {ImgAsset.RegisterCandidate_Vector68copy_16} />
					<img className='Vector68copy_17' src = {ImgAsset.RegisterCandidate_Vector68copy_17} />
					<img className='Vector68copy_18' src = {ImgAsset.RegisterCandidate_Vector68copy_18} />
					<img className='Vector68copy_19' src = {ImgAsset.RegisterCandidate_Vector68copy_19} />
					<img className='Vector68copy_20' src = {ImgAsset.RegisterCandidate_Vector68copy_20} />
					<img className='Vector68copy_21' src = {ImgAsset.RegisterCandidate_Vector68copy_21} />
					<img className='Vector68copy_22' src = {ImgAsset.RegisterCandidate_Vector68copy_22} />
					<img className='Vector68copy_23' src = {ImgAsset.RegisterCandidate_Vector68copy_23} />
					<img className='Vector68copy_24' src = {ImgAsset.RegisterCandidate_Vector68copy_24} />
					<img className='Vector68copy_25' src = {ImgAsset.RegisterCandidate_Vector68copy_25} />
					<img className='Vector68copy_26' src = {ImgAsset.RegisterCandidate_Vector68copy_26} />
					<img className='Vector68copy_27' src = {ImgAsset.RegisterCandidate_Vector68copy_27} />
					<img className='Vector68copy_28' src = {ImgAsset.RegisterCandidate_Vector68copy_28} />
					<img className='Vector68copy_29' src = {ImgAsset.RegisterCandidate_Vector68copy_29} />
					<img className='Vector68copy_30' src = {ImgAsset.RegisterCandidate_Vector68copy_30} />
					<img className='Vector68copy_31' src = {ImgAsset.RegisterCandidate_Vector68copy_31} />
					<img className='Vector68copy_32' src = {ImgAsset.RegisterCandidate_Vector68copy_32} />
					<img className='Vector68copy_33' src = {ImgAsset.RegisterCandidate_Vector68copy_33} />
					<img className='Vector68copy_34' src = {ImgAsset.RegisterCandidate_Vector68copy_34} />
					<img className='Vector68copy_35' src = {ImgAsset.RegisterCandidate_Vector68copy_35} />
					<img className='Vector68copy_36' src = {ImgAsset.RegisterCandidate_Vector68copy_36} />
					<img className='Vector68copy_37' src = {ImgAsset.RegisterCandidate_Vector68copy_37} />
					<img className='Vector68copy_38' src = {ImgAsset.RegisterCandidate_Vector68copy_38} />
					<img className='Vector68copy_39' src = {ImgAsset.RegisterCandidate_Vector68copy_39} />
					<img className='Vector68copy_40' src = {ImgAsset.RegisterCandidate_Vector68copy_40} />
					<img className='Vector68copy_41' src = {ImgAsset.RegisterCandidate_Vector68copy_41} />
					<img className='Vector68copy_42' src = {ImgAsset.RegisterCandidate_Vector68copy_42} />
					<img className='Vector68copy_43' src = {ImgAsset.RegisterCandidate_Vector68copy_43} />
					<img className='Vector68copy_44' src = {ImgAsset.RegisterCandidate_Vector68copy_44} />
					<img className='Vector68copy_45' src = {ImgAsset.RegisterCandidate_Vector68copy_45} />
					<img className='Vector68copy_46' src = {ImgAsset.RegisterCandidate_Vector68copy_46} />
					<img className='Vector68' src = {ImgAsset.RegisterCandidate_Vector68} />
				</div>
				<img className='Rectangle1573' src = {ImgAsset.RegisterCandidate_Rectangle1573} />
				<div className='Rectangle1574'/>
				<div className='Rectangle1583'/>
				<div className='_2'>
					<div className='Rectangle1576'/>
				</div>
				<div className='_3'>
					<div className='Rectangle1577'/>
					<span className='MobileNumber'>Mobile Number</span>
					<span className='LastName'>Last Name</span>
				</div>
				<div className='_4'>
					<div className='Rectangle1578'/>
					<span className='EmailAddress'>Email Address</span>
				</div>
				<div className='_5'>
					<div className='Rectangle1579'/>
				</div>
				<div className='_22'>
					<div className='Rectangle1582'/>
					<span className='CreateAccount'>Create Account</span>
				</div>
				<div className='_11'>
					<div className='Rectangle1581'/>
					<span className='ConfirmPassword'>Confirm Password</span>
				</div>
				<div className='_1'>
					<div className='Rectangle1575'/>
				</div>
				<span className='Setupyouraccount'>Set up your account</span>
				<div className='Group10050'>
					<span className='AlreadyhaveanaccountSignin'>Already have an account ? Sign in</span>
					<div className='akariconsarrowright'>
						<div className='Group'>
							<img className='Vector_12' src = {ImgAsset.RegisterCandidate_Vector_12} />
							<img className='Vector_13' src = {ImgAsset.RegisterCandidate_Vector_13} />
						</div>
					</div>
				</div>
				<span className='FirstName'>First Name</span>
			</div>
			<Breadcrumb className='Breadcrumb'/>
			<div className='Rectangle1588'/>
			<div className='Rectangle1589'/>
			<span className='Candidate_2'>Candidate</span>
			<span className='Recruiter'>Recruiter</span>
		</div>
	)
}