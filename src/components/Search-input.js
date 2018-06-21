import React, { Component } from 'react'

export default class SearchInput extends Component {
	constructor(){
		super()
		this.state = {
			term:''
		}
	}
	onSearch(term){
		this.setState({term})
	}
	onClick(term){
	this.props.onSearch(term)
	}
	render(){
		return (
			<div className="search-bar">
				<input onChange={e => this.onSearch(e.target.value)}/>
				<button onClick = {()=>this.onClick(this.state.term)} >Search</button> 
			</div>
			)
	}
}