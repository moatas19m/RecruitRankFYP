import React from 'react'
import './Container1.css'
import Gallery from "./Gallery"
export default function Container1 (props) {
	return (
		<div className={`Container1_Container1 ${props.className}`}>
			<Gallery className='Gallery'/>
		</div>
	)
}