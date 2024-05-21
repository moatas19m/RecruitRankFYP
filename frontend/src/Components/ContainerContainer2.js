import React from 'react'
import './ContainerContainer2.css'
import Gallery from "./Gallery"
export default function ContainerContainer2 (props) {
	return (
		<div className={`ContainerContainer2_ContainerContainer2 ${props.className}`}>
			<Gallery className='Gallery'/>
		</div>
	)
}