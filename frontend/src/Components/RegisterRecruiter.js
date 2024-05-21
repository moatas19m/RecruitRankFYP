import React from 'react'
import './RegisterRecruiter.css'
import ImgAsset from '../public'
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Breadcrumb from "./Breadcrumb"
export default function RegisterRecruiter () {
	return (
		<div className='RegisterRecruiter_RegisterRecruiter'>
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
						<img className='Line1' src = {ImgAsset.RegisterRecruiter_Line1} />
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
								<img className='Vector' src = {ImgAsset.RegisterRecruiter_Vector} />
								<img className='Vector_1' src = {ImgAsset.RegisterRecruiter_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.RegisterRecruiter_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.RegisterRecruiter_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.RegisterRecruiter_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.RegisterRecruiter_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.RegisterRecruiter_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.RegisterRecruiter_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.RegisterRecruiter_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.RegisterRecruiter_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.RegisterRecruiter_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.RegisterRecruiter_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.RegisterRecruiter_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<Breadcrumb className='Breadcrumb'/>
			<div className='divcardlayout'>
				<img className='Profileinthemobileapp' src = {ImgAsset.JobCreation_Profileinthemobileapp} />
				<span className='Type61'>Setup your profile!</span>
				<span className='Type61_1'>Start by creating an account with basic details. </span>
			</div>
			<div className='divcardlayout_1'>
				<span className='Type61_2'>Describe your job</span>
				<span className='Type61_3'>Simply enter the job title, describe the role and its responsibilities, and list required skills. It's as straightforward as that!</span>
				<img className='Manmultitaskingonajob' src = {ImgAsset.JobCreation_Manmultitaskingonajob} />
			</div>
			<div className='divcardlayout_2'>
				<span className='Type61_4'>Search some talents!</span>
				<span className='Type61_5'>Browse through profiles, filter by skills or experience, and find the perfect match for your job. It's effortless and efficient!</span>
				<img className='Learningtheinstructions' src = {ImgAsset.JobCreation_Learningtheinstructions} />
			</div>
			<div className='Rectangle1588'/>
			<span className='Recruiter'>Recruiter</span>
			<div className='Rectangle1589'/>
			<span className='Candidate_2'>Candidate</span>
			<div className='Signup'>
				<div className='BlendGroup1'>
					<img className='Vector69' src = {ImgAsset.RegisterRecruiter_Vector69} />
					<img className='Vector68copy' src = {ImgAsset.RegisterRecruiter_Vector68copy} />
					<img className='Vector68copy_1' src = {ImgAsset.RegisterRecruiter_Vector68copy_1} />
					<img className='Vector68copy_2' src = {ImgAsset.RegisterRecruiter_Vector68copy_2} />
					<img className='Vector68copy_3' src = {ImgAsset.RegisterRecruiter_Vector68copy_3} />
					<img className='Vector68copy_4' src = {ImgAsset.RegisterRecruiter_Vector68copy_4} />
					<img className='Vector68copy_5' src = {ImgAsset.RegisterRecruiter_Vector68copy_5} />
					<img className='Vector68copy_6' src = {ImgAsset.RegisterRecruiter_Vector68copy_6} />
					<img className='Vector68copy_7' src = {ImgAsset.RegisterRecruiter_Vector68copy_7} />
					<img className='Vector68copy_8' src = {ImgAsset.RegisterRecruiter_Vector68copy_8} />
					<img className='Vector68copy_9' src = {ImgAsset.RegisterRecruiter_Vector68copy_9} />
					<img className='Vector68copy_10' src = {ImgAsset.RegisterRecruiter_Vector68copy_10} />
					<img className='Vector68copy_11' src = {ImgAsset.RegisterRecruiter_Vector68copy_11} />
					<img className='Vector68copy_12' src = {ImgAsset.RegisterRecruiter_Vector68copy_12} />
					<img className='Vector68copy_13' src = {ImgAsset.RegisterRecruiter_Vector68copy_13} />
					<img className='Vector68copy_14' src = {ImgAsset.RegisterRecruiter_Vector68copy_14} />
					<img className='Vector68copy_15' src = {ImgAsset.RegisterRecruiter_Vector68copy_15} />
					<img className='Vector68copy_16' src = {ImgAsset.RegisterRecruiter_Vector68copy_16} />
					<img className='Vector68copy_17' src = {ImgAsset.RegisterRecruiter_Vector68copy_17} />
					<img className='Vector68copy_18' src = {ImgAsset.RegisterRecruiter_Vector68copy_18} />
					<img className='Vector68copy_19' src = {ImgAsset.RegisterRecruiter_Vector68copy_19} />
					<img className='Vector68copy_20' src = {ImgAsset.RegisterRecruiter_Vector68copy_20} />
					<img className='Vector68copy_21' src = {ImgAsset.RegisterRecruiter_Vector68copy_21} />
					<img className='Vector68copy_22' src = {ImgAsset.RegisterRecruiter_Vector68copy_22} />
					<img className='Vector68copy_23' src = {ImgAsset.RegisterRecruiter_Vector68copy_23} />
					<img className='Vector68copy_24' src = {ImgAsset.RegisterRecruiter_Vector68copy_24} />
					<img className='Vector68copy_25' src = {ImgAsset.RegisterRecruiter_Vector68copy_25} />
					<img className='Vector68copy_26' src = {ImgAsset.RegisterRecruiter_Vector68copy_26} />
					<img className='Vector68copy_27' src = {ImgAsset.RegisterRecruiter_Vector68copy_27} />
					<img className='Vector68copy_28' src = {ImgAsset.RegisterRecruiter_Vector68copy_28} />
					<img className='Vector68copy_29' src = {ImgAsset.RegisterRecruiter_Vector68copy_29} />
					<img className='Vector68copy_30' src = {ImgAsset.RegisterRecruiter_Vector68copy_30} />
					<img className='Vector68copy_31' src = {ImgAsset.RegisterRecruiter_Vector68copy_31} />
					<img className='Vector68copy_32' src = {ImgAsset.RegisterRecruiter_Vector68copy_32} />
					<img className='Vector68copy_33' src = {ImgAsset.RegisterRecruiter_Vector68copy_33} />
					<img className='Vector68copy_34' src = {ImgAsset.RegisterRecruiter_Vector68copy_34} />
					<img className='Vector68copy_35' src = {ImgAsset.RegisterRecruiter_Vector68copy_35} />
					<img className='Vector68copy_36' src = {ImgAsset.RegisterRecruiter_Vector68copy_36} />
					<img className='Vector68copy_37' src = {ImgAsset.RegisterRecruiter_Vector68copy_37} />
					<img className='Vector68copy_38' src = {ImgAsset.RegisterRecruiter_Vector68copy_38} />
					<img className='Vector68copy_39' src = {ImgAsset.RegisterRecruiter_Vector68copy_39} />
					<img className='Vector68copy_40' src = {ImgAsset.RegisterRecruiter_Vector68copy_40} />
					<img className='Vector68copy_41' src = {ImgAsset.RegisterRecruiter_Vector68copy_41} />
					<img className='Vector68copy_42' src = {ImgAsset.RegisterRecruiter_Vector68copy_42} />
					<img className='Vector68copy_43' src = {ImgAsset.RegisterRecruiter_Vector68copy_43} />
					<img className='Vector68copy_44' src = {ImgAsset.RegisterRecruiter_Vector68copy_44} />
					<img className='Vector68copy_45' src = {ImgAsset.RegisterRecruiter_Vector68copy_45} />
					<img className='Vector68copy_46' src = {ImgAsset.RegisterRecruiter_Vector68copy_46} />
					<img className='Vector68' src = {ImgAsset.RegisterRecruiter_Vector68} />
				</div>
				<div className='Rectangle1574'/>
				<div className='Rectangle1583'/>
				<div className='_11'>
					<div className='Rectangle1581'/>
					<span className='ConfirmPassword'>Confirm Password</span>
				</div>
				<span className='FirstName'>First Name</span>
				<div className='divFEAFormStyles__feaFormContainer___yA_h6'>
					<div className='Form'>
						<div className='divcol12'>
						</div>
						<div className='divcol12_1'>
						</div>
						<div className='divcol12_2'>
						</div>
						<div className='divcol12_3'>
						</div>
						<div className='divcol12_4'>
							<div className='divSelect__select___UmVx5'>
								<div className='divSelect__selectTitle___3fog0'>
									<span className='ofOpenJobs'># of Open Jobs</span>
								</div>
								<div className='before'/>
								<div className='after'/>
							</div>
						</div>
						<div className='divcol12_5'>
						</div>
						<div className='Label'>
							<div className='spanCheckbox__labelText___JWoeE'>
								<span className='IconfirmIrepresentHRPersonnelRecruitingMarketingPRoramanexecutiveatmycompanyandIagreetoRecruitRanks'>I confirm I represent HR/Personnel, Recruiting, Marketing, PR, or am an<br/>executive at my company and I agree to RecruitRanks. </span>
								<span className='LinkTermsofUse'>Terms of Use</span>
								<span className='and'> and</span>
								<span className='acknowledgeits'>acknowledge its </span>
								<span className='LinkPrivacyPolicy'>Privacy Policy</span>
								<span className='onbehalfofmycompany'> on behalf of my company.</span>
							</div>
						</div>
						<div className='Label_1'>
							<div className='spanCheckbox__labelText___JWoeE_1'>
								<span className='ClickhereifyoudonotwanttoreceivemarketingemailsfromRecruitRanksandaffiliates'>Click here if you do not want to receive marketing emails from RecruitRanks<br/>and affiliates</span>
							</div>
						</div>
					</div>
					<span className='Alreadyhaveanaccount'>Already have an account?</span>
					<span className='SignIn'>Sign In</span>
				</div>
			</div>
		</div>
	)
}