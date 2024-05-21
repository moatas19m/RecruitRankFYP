import React from 'react'
import './JobCreation_1.css'
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
export default function JobCreation_1 () {
	return (
		<div className='JobCreation_1_JobCreation'>
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
								<img className='Vector' src = {ImgAsset.JobCreation_1_Vector} />
								<img className='Vector_1' src = {ImgAsset.JobCreation_1_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.JobCreation_1_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.JobCreation_1_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.JobCreation_1_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.JobCreation_1_Line31} />
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
				<span className='Addjobdetails'>Add job details</span>
				<div className='divcol12'>
					<span className='Isthereaplannedstartdateforthisjob'>Is there a planned start date for this job?</span>
				</div>
				<div className='divcol12_1'>
					<span className='Numberofpeopleyouwishtohireforthisjob'>Number of people you wish to hire for this job *</span>
				</div>
				<div className='divcol12_2'>
					<span className='Jobexpiry'>Job expiry</span>
				</div>
				<Link to='/jobcreation'>
					<span className='Back'>Back</span>
				</Link>
				<div className='divcol12_3'>
					<span className='Education'>Education</span>
					<div className='divSelect__select___UmVx5'>
						<div className='divSelect__selectTitle___3fog0'>
							<img className='ExpandArrow' src = {ImgAsset.JobCreation_ExpandArrow} />
						</div>
					</div>
				</div>
				<div className='divcol12_4'>
					<span className='JobLevel'>Job Level</span>
					<div className='divSelect__select___UmVx5_1'>
						<div className='divSelect__selectTitle___3fog0_1'>
							<img className='ExpandArrow_1' src = {ImgAsset.JobCreation_ExpandArrow} />
						</div>
					</div>
				</div>
				<div className='divcol12_5'>
					<span className='Experience'>Experience</span>
					<div className='divSelect__select___UmVx5_2'>
						<div className='divSelect__selectTitle___3fog0_2'>
							<img className='ExpandArrow_2' src = {ImgAsset.JobCreation_ExpandArrow} />
						</div>
					</div>
				</div>
				<Link to='/jobcreation_2'>
					<img className='image7' src = {ImgAsset.JobCreation_image6} />
				</Link>
			</div>
			<div className='divcol12_6'>
				<span className='Jobposted'>Job posted </span>
				<div className='divSelect__select___UmVx5_3'>
					<div className='divSelect__selectTitle___3fog0_3'>
						<img className='ExpandArrow_3' src = {ImgAsset.JobCreation_ExpandArrow} />
					</div>
				</div>
			</div>
		</div>
	)
}