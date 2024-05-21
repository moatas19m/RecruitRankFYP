import React from 'react'
import './ADMIN.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import PhoneCall from "./PhoneCall"
import fichevrondown from "./fichevrondown"
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
import Logo from "./Logo"
import fiarrowright from "./fiarrowright"
export default function ADMIN () {
	return (
		<div className='ADMIN_ADMIN'>
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
								<img className='Vector' src = {ImgAsset.ADMIN_Vector} />
								<img className='Vector_1' src = {ImgAsset.ADMIN_Vector_1} />
								<img className='Vector_2' src = {ImgAsset.ADMIN_Vector_2} />
								<img className='Vector_3' src = {ImgAsset.ADMIN_Vector_3} />
								<img className='Vector_4' src = {ImgAsset.ADMIN_Vector_4} />
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
								<img className='Line31' src = {ImgAsset.ADMIN_Line31} />
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
						<img className='Vector_5' src = {ImgAsset.ADMIN_Vector_5} />
						<div className='youtube1'>
							<img className='Vector_6' src = {ImgAsset.ADMIN_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.ADMIN_Vector_7} />
						</div>
						<div className='instagram1'>
							<img className='Vector_8' src = {ImgAsset.ADMIN_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.ADMIN_Vector_9} />
							<img className='Vector_10' src = {ImgAsset.ADMIN_Vector_10} />
						</div>
						<div className='twitter1'>
							<img className='Vector_11' src = {ImgAsset.ADMIN_Vector_11} />
						</div>
					</div>
				</div>
			</div>
			<div className='Rectangle1'/>
			<div className='NavSidebar'>
				<div className='Privacy'>
					<span className='Privacy_1'>Privacy</span>
					<img className='iconprivacy' src = {ImgAsset.ADMIN_iconprivacy} />
				</div>
				<div className='Support_2'>
					<span className='Support_3'>Support</span>
					<img className='iconsupport' src = {ImgAsset.ADMIN_iconsupport} />
				</div>
				<div className='Setting'>
					<span className='Setting_1'>Setting</span>
					<img className='iconsetting' src = {ImgAsset.ADMIN_iconsetting} />
				</div>
				<div className='Communities'>
					<span className='Communities_1'>Communities</span>
					<img className='iconcommunities' src = {ImgAsset.ADMIN_iconcommunities} />
				</div>
				<div className='Tasks'>
					<span className='Tasks_1'>Tasks</span>
					<img className='icontasks' src = {ImgAsset.ADMIN_icontasks} />
				</div>
				<div className='History'>
					<span className='History_1'>History</span>
					<img className='iconhistory' src = {ImgAsset.ADMIN_iconhistory} />
				</div>
				<div className='Msg'>
					<span className='Messages'>Messages</span>
					<img className='iconmsg' src = {ImgAsset.ADMIN_iconmsg} />
				</div>
				<div className='Profile'>
					<span className='Profile_1'>Profile</span>
					<img className='iconprofile' src = {ImgAsset.ADMIN_iconprofile} />
				</div>
				<div className='Home_4'>
					<span className='Home_5'>Home</span>
					<img className='iconhome' src = {ImgAsset.ADMIN_iconhome} />
				</div>
				<div className='logo_title'>
					<span className='Dashboard'>Dashboard</span>
					<div className='Logo_2'>
						<div className='Rectangle4'/>
						<img className='Line1' src = {ImgAsset.ADMIN_Line1} />
						<img className='Line2' src = {ImgAsset.ADMIN_Line2} />
						<img className='Line3' src = {ImgAsset.ADMIN_Line3} />
					</div>
				</div>
			</div>
			<div className='Header'>
				<div className='Rectangle3'/>
				<div className='Header_1'>
					<div className='Lowerheader'><div className='logousr' style={{backgroundImage: `url(${ImgAsset.ADMIN_logousr}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						<span className='Hithere'>Hi there,</span>
						<span className='ADMIN_1'>ADMIN</span>
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
						<span className='ADMIN_2'>ADMIN</span>
						<div className='iconsearch'>
							<img className='Vector_12' src = {ImgAsset.ADMIN_Vector_12} />
						</div>
						<div className='iconnotif'>
							<img className='Vector_13' src = {ImgAsset.ADMIN_Vector_13} />
						</div>
					</div>
				</div>
			</div>
			<div className='MainSection'>
				<img className='Rectangle2' src = {ImgAsset.ADMIN_Rectangle2} />
				<div className='SideSection'>
					<div className='Trending'>
						<div className='trendingcard'/>
						<span className='Trending_1'>Trending</span>
						<div className='Angelica'>
							<div className='Angelica_1'>
								<span className='NoTrafficMaker'>No Traffic Maker</span>
								<span className='angelica'>@angelica</span>
							</div><div className='logoangelica' style={{backgroundImage: `url(${ImgAsset.ADMIN_logoangelica}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						</div>
						<div className='Daniel'>
							<div className='Daniel_1'>
								<span className='LifeChangingApp'>Life Changing App</span>
								<span className='daniel'>@daniel</span>
							</div><div className='logodaniel' style={{backgroundImage: `url(${ImgAsset.ADMIN_logodaniel}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						</div>
						<div className='Worthy'>
							<div className='Worthy_1'>
								<span className='worthyag'>@worthyag</span>
								<span className='SuperCoolProject'>Super Cool Project</span>
							</div><div className='logoworthyag' style={{backgroundImage: `url(${ImgAsset.ADMIN_logousr}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						</div>
						<div className='Lizzie'>
							<div className='Lizzie_1'>
								<span className='WorldPeaceBuilder'>World Peace Builder</span>
								<span className='lizzie'>@lizzie</span>
							</div><div className='logolizzie' style={{backgroundImage: `url(${ImgAsset.ADMIN_logolizzie}),linear-gradient(0deg, rgba(199,238,251,1.00), rgba(199,238,251,1.00))`}}/>
						</div>
					</div>
					<div className='Announcements'>
						<div className='announcementscard'/>
						<span className='Announcements_1'>Announcements</span>
						<div className='SiteMaintenance'>
							<span className='SiteMaintenance_1'>Site Maintenance</span>
							<span className='LoremipsumdolorsitametconsecteturadipiscingelitLoremametmattisnislnisipellentesq'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</span>
						</div>
						<img className='br' src = {ImgAsset.ADMIN_br} />
						<div className='CommunityShareDay'>
							<span className='CommunityShareDay_1'>Community Share Day</span>
							<span className='LoremipsumdolorsitametconsecteturadipiscingelitLoremametmattisnislnisipellentesq_1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</span>
						</div>
						<img className='br_1' src = {ImgAsset.ADMIN_br_1} />
						<div className='UpdatedPrivacyPolicy'>
							<span className='UpdatedPrivacyPolicy_1'>Updated Privacy Policy</span>
							<span className='LoremipsumdolorsitametconsecteturadipiscingelitLoremametmattisnislnisipellentesq_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem amet mattis nisl nisi, pellentesq...</span>
						</div>
					</div>
				</div>
				<div className='ProjectsSection'>
					<span className='Testimonials'>Testimonials</span>
					<div className='Card1'>
						<div className='card1'>
							<div className='Rectangle5'/>
							<div className='Rectangle6'/>
						</div>
						<span className='GoodWebsite'>Good Website </span>
						<div className='icons'>
							<img className='iconforkcode' src = {ImgAsset.ADMIN_iconforkcode} />
							<img className='iconwatch' src = {ImgAsset.ADMIN_iconwatch} />
							<img className='iconstar' src = {ImgAsset.ADMIN_iconstar} />
						</div>
						<span className='_'>.</span>
					</div>
					<div className='Card2'>
						<div className='card2'>
							<div className='Rectangle5_1'/>
							<div className='Rectangle6_1'/>
						</div>
						<span className='CoolWebapp'>Cool Webapp</span>
						<div className='icons_1'>
							<img className='iconforkcode_1' src = {ImgAsset.ADMIN_iconforkcode_1} />
							<img className='iconwatch_1' src = {ImgAsset.ADMIN_iconwatch_1} />
							<img className='iconstar_1' src = {ImgAsset.ADMIN_iconstar_1} />
						</div>
						<span className='Gotmyjobin3weeks'>Got my job in 3 weeks.</span>
					</div>
					<div className='Card3'>
						<div className='card3'>
							<div className='Rectangle5_2'/>
							<div className='Rectangle6_2'/>
						</div>
						<span className='ImpossibleApp'>Impossible App</span>
						<div className='icons_2'>
							<img className='iconforkcode_2' src = {ImgAsset.ADMIN_iconforkcode_2} />
							<img className='iconwatch_2' src = {ImgAsset.ADMIN_iconwatch_2} />
							<img className='iconstar_2' src = {ImgAsset.ADMIN_iconstar_2} />
						</div>
						<span className='Veryhappytobehere'>Very happy to be here</span>
					</div>
					<div className='Card4'>
						<div className='card4'>
							<div className='Rectangle5_3'/>
							<div className='Rectangle6_3'/>
						</div>
						<span className='EasyPeasyApp'>Easy Peasy App</span>
						<div className='icons_3'>
							<img className='iconforkcode_3' src = {ImgAsset.ADMIN_iconforkcode_3} />
							<img className='iconwatch_3' src = {ImgAsset.ADMIN_iconwatch_3} />
							<img className='iconstar_3' src = {ImgAsset.ADMIN_iconstar_3} />
						</div>
						<span className='Foundmydreamjobeasily'>Found my dream job easily</span>
					</div>
					<div className='Card5'>
						<div className='card5'>
							<div className='Rectangle5_4'/>
							<div className='Rectangle6_4'/>
						</div>
						<span className='AdBlocker'>Ad Blocker</span>
						<div className='icons_4'>
							<img className='iconforkcode_4' src = {ImgAsset.ADMIN_iconforkcode_4} />
							<img className='iconwatch_4' src = {ImgAsset.ADMIN_iconwatch_4} />
							<img className='iconstar_4' src = {ImgAsset.ADMIN_iconstar_4} />
						</div>
						<span className='Lovethattherearenoads'>Love that there  are no ads</span>
					</div>
					<div className='Card6'>
						<div className='card6'>
							<div className='Rectangle5_5'/>
							<div className='Rectangle6_5'/>
						</div>
						<span className='MoneyMaker'>Money Maker</span>
						<div className='icons_5'>
							<img className='iconforkcode_5' src = {ImgAsset.ADMIN_iconforkcode_5} />
							<img className='iconwatch_5' src = {ImgAsset.ADMIN_iconwatch_5} />
							<img className='iconstar_5' src = {ImgAsset.ADMIN_iconstar_5} />
						</div>
						<span className='Notlikeotherusualmoneymakersites'>Not like other usual money maker sites</span>
					</div>
				</div>
			</div>
			<Link to='/viewallusers'>
				<div className='Rectangle1627'/>
			</Link>
			<div className='Rectangle1628'/>
			<div className='Rectangle1629'/>
			<span className='ViewAllJobs'>View All Jobs</span>
			<span className='ViewAllResumes'>View All Resumes</span>
			<Link to='/viewallusers'>
				<span className='ViewAllUsers'>View All Users</span>
			</Link>
		</div>
	)
}