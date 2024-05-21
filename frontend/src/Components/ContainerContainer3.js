import React from 'react'
import './ContainerContainer3.css'
import Gallery from "./Gallery"
export default function ContainerContainer3 (props) {
	return (
		<div className={`ContainerContainer3_ContainerContainer3 ${props.className}`}>
			<Gallery className='Gallery'/>
		</div>
	)
}