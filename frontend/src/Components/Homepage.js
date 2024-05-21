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
import Footer from './Footer'
import JobCard from './JobCard'
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
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
				<JobCard/>
			</div>
			<div className='Heading_9'>
				<span className='Featuredjob'>Featured job</span>
			</div>
		<Footer/>	
		</div>
	)
}