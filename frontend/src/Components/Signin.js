import React from 'react'
import './Signin.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import fisearch from "./fisearch"
import fimappin from "./fimappin"
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
export default function Signin () {
	return (
		<div className='Signin_Signin'>
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
						<img className='Line1' src = {ImgAsset.Signin_Line1} />
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
						<span className='Contactus'>Contact us</span>
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
								<img className='Vector' src = {ImgAsset.Signin_Vector} />
								<img className='Vector_1' src = {ImgAsset.Signin_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.Signin_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.Signin_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.Signin_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.Signin_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.Signin_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.Signin_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.Signin_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.Signin_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.Signin_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.Signin_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.Signin_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<div className='Loin'>
				<div className='Rectangle1379'/>
				<div className='Fileds'>
					<span className='Login'>Login</span>
					<span className='Email'>Email</span>
					<div className='Rectangle1381'/>
					<div className='Rectangle1382'/>
					<div className='Rectangle1384'/>
					<div className='Rectangle1385'/>
					<div className='Rectangle1386'/>
					<span className='usernamegmailcom'>username@gmail.com</span>
					<span className='orcontinuewith'>or continue with</span>
					<span className='Donthaveanaccountyet'>Don’t have an account yet?</span>
					<span className='Registerforfree'>Register for free</span>
					<span className='ForgotPassword'>Forgot Password?</span>
					<div className='Rectangle1383'/>
					<Link to='/recruiter'>
						<span className='Signin_1'>Sign in</span>
					</Link>
					<div className='flatcoloriconsgoogle'>
						<div className='Group2212'>
							<img className='Vector_12' src = {ImgAsset.Signin_Vector_12} />
							<img className='Vector_13' src = {ImgAsset.Signin_Vector_13} />
							<img className='Vector_14' src = {ImgAsset.Signin_Vector_14} />
							<img className='Vector_15' src = {ImgAsset.Signin_Vector_15} />
						</div>
					</div>
					<div className='akariconsgithubfill'>
						<div className='Group'>
							<img className='Vector_16' src = {ImgAsset.Signin_Vector_16} />
						</div>
					</div>
					<div className='clarityeyehideline'>
						<img className='Vector_17' src = {ImgAsset.Signin_Vector_17} />
						<img className='Vector_18' src = {ImgAsset.Signin_Vector_18} />
						<img className='Vector_19' src = {ImgAsset.Signin_Vector_19} />
					</div>
					<div className='bifacebook'>
						<div className='Group_1'>
							<img className='Vector_20' src = {ImgAsset.Signin_Vector_20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}