import React from 'react'
import './ContainerContainer4.css'
import Gallery from "./Gallery"
export default function ContainerContainer4 (props) {
	return (
		<div className={`ContainerContainer4_ContainerContainer4 ${props.className}`}>
			<Gallery className='Gallery'/>
		</div>
	)
}