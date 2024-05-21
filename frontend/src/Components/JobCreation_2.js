import React from 'react'
import './JobCreation_2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
import Breadcrumb from "./Breadcrumb"
import Footer from './Footer'
export default function JobCreation_2 () {
	return (
		<div className='JobCreation_2_JobCreation'>
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
						<span className='Aboutus'>About us</span>
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
								<img className='Vector' src = {ImgAsset.JobCreation_2_Vector} />
								<img className='Vector_1' src = {ImgAsset.JobCreation_2_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.JobCreation_2_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.JobCreation_2_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.JobCreation_2_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.JobCreation_2_Line31} />
								<div className='Frame128'>
									<fisearch className='fisearch'/>
									<span className='Jobtittlekeywordcompany'>Job tittle, keyword, company</span>
								</div>
							</div>
						</div>
					</div>
					<img className='image5' src = {ImgAsset.JobCreation_image5} />
				</div>
			</div>
			<Footer/>
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
			<div className='divcardlayout_3'>
				<img className='Rectangle7' src = {ImgAsset.Recruiter_3_Rectangle7} />
				<span className='UIUXDesign'>UI/UX Design</span>
				<span className='_5peopleRequired'>5 people Required</span>
				<span className='Locationofthecompany'>Location of the company</span>
				<span className='SaveasDraft'>Save as Draft</span>
				<span className='Company'>Company</span>
				<div className='Maskgroup'>
					<img className='Person' src = {ImgAsset.JobCreation_1_Person} />
					<div className='Rectangle8'/>
				</div>
				<div className='Maskgroup_1'>
					<img className='Location' src = {ImgAsset.JobCreation_1_Location} />
					<div className='Rectangle10'/>
				</div>
			</div>
			<div className='divcardlayout_4'>
				<div className='Maskgroup_2'>
					<img className='Idea' src = {ImgAsset.JobCreation_1_Idea} />
					<div className='Rectangle9'/>
				</div>
				<span className='Clearlyoutliningtherolesresponsibilitiesandobjectivesattractssuitablecandidatesandsetsrealisticexpectationsensuringabetterfitforbothparties'>Clearly outlining the role's responsibilities and objectives attracts suitable candidates and sets realistic expectations, ensuring a better fit for both parties.</span>
			</div>
			<div className='divcardlayout_5'>
				<span className='Addpayandbenefits'>Add pay and benefits</span>
				<div className='divcol12'>
					<span className='Showpayby'>Show pay by</span>
				</div>
				<div className='divcol12_1'>
					<span className='Rate'>Rate</span>
				</div>
				<div className='divcol12_2'>
					<span className='Minimum'>Minimum</span>
				</div>
				<div className='divcol12_3'>
					<span className='Maximum'>Maximum</span>
				</div>
				<div className='Frame12'>
					<div className='Frame5'>
						<div className='Maskgroup_3'>
							<img className='PlusMath' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6'/>
						</div>
						<span className='Performancebonus'>Performance bonus</span>
					</div>
					<div className='Frame6'>
						<div className='Maskgroup_4'>
							<img className='PlusMath_1' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_1'/>
						</div>
						<span className='Yearlybonus'>Yearly bonus</span>
					</div>
					<div className='Frame7_1'>
						<div className='Maskgroup_5'>
							<img className='PlusMath_2' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_2'/>
						</div>
						<span className='Commissionpay'>Commission pay</span>
					</div>
					<div className='Frame8'>
						<div className='Maskgroup_6'>
							<img className='PlusMath_3' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_3'/>
						</div>
						<span className='Overtimepay'>Overtime pay</span>
					</div>
					<div className='Frame9'>
						<div className='Maskgroup_7'>
							<img className='PlusMath_4' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_4'/>
						</div>
						<span className='Quarterlybonus'>Quarterly bonus</span>
					</div>
					<div className='Frame10'>
						<div className='Maskgroup_8'>
							<img className='PlusMath_5' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_5'/>
						</div>
						<span className='Shiftallowance'>Shift allowance</span>
					</div>
					<div className='Frame11'>
						<div className='Maskgroup_9'>
							<img className='PlusMath_6' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_6'/>
						</div>
						<span className='Joiningbonus'>Joining bonus</span>
					</div>
					<div className='Frame12_1'>
						<div className='Maskgroup_10'>
							<img className='PlusMath_7' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_7'/>
						</div>
						<span className='Other'>Other</span>
					</div>
				</div>
				<span className='SupplementalPay'>Supplemental Pay</span>
				<div className='Frame13'>
					<div className='Frame5_1'>
						<div className='Maskgroup_11'>
							<img className='PlusMath_8' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_8'/>
						</div>
						<span className='Healthinsurance'>Health insurance</span>
					</div>
					<div className='Frame6_1'>
						<div className='Maskgroup_12'>
							<img className='PlusMath_9' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_9'/>
						</div>
						<span className='ProvidentFund'>Provident Fund</span>
					</div>
					<div className='Frame7_2'>
						<div className='Maskgroup_13'>
							<img className='PlusMath_10' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_10'/>
						</div>
						<span className='Cellphonereimbursement'>Cell phone reimbursement</span>
					</div>
					<div className='Frame8_1'>
						<div className='Maskgroup_14'>
							<img className='PlusMath_11' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_11'/>
						</div>
						<span className='Paidsicktime'>Paid sick time</span>
					</div>
					<div className='Frame9_1'>
						<div className='Maskgroup_15'>
							<img className='PlusMath_12' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_12'/>
						</div>
						<span className='Workfromhome'>Work from home</span>
					</div>
					<div className='Frame10_1'>
						<div className='Maskgroup_16'>
							<img className='PlusMath_13' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_13'/>
						</div>
						<span className='Paidtimeoff'>Paid time off</span>
					</div>
					<div className='Frame11_1'>
						<div className='Maskgroup_17'>
							<img className='PlusMath_14' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_14'/>
						</div>
						<span className='Foodprovided'>Food provided</span>
					</div>
					<div className='Frame12_2'>
						<div className='Maskgroup_18'>
							<img className='PlusMath_15' src = {ImgAsset.Recruiter_3_PlusMath} />
							<div className='Rectangle6_15'/>
						</div>
						<span className='Other_1'>Other</span>
					</div>
				</div>
				<span className='Benefits'>Benefits</span>
				<div className='Link_4'>
					<div className='after'/>
					<span className='Preview'>Preview</span>
				</div>
				<Link to='/jobcreation_1'>
					<span className='Back'>Back</span>
				</Link>
			</div>
		</div>
	)
}