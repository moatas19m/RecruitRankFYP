import React from 'react'
import './Navigation.css'
import ImgAsset from '../public'
import CaretDown from "./CaretDown"
import fisearch from "./fisearch"
export default function Navigation () {
	return (
		<div className='Navigation_Navigation'>
			<div className='Navigation_1'>
				<div className='Frame126'>
					<div className='Logo'>
						<div className='briefcase1'>
							<img className='Vector' src = {ImgAsset.Navigation_Vector} />
							<img className='Vector_1' src = {ImgAsset.Navigation_Vector_1} />
							<img className='Vector_2' src = {ImgAsset.Navigation_Vector_2} />
							<img className='Vector_3' src = {ImgAsset.Navigation_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.Navigation_Vector_4} />
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
							<img className='Line31' src = {ImgAsset.Navigation_Line31} />
							<div className='Frame128'>
								<fisearch className='fisearch'/>
								<span className='Jobtittlekeywordcompany'>Job tittle, keyword, company</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}