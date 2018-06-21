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
		this.props.onSearch(term)
	}
	render(){
		return (
			<div>
				<input onChange={e => this.onSearch(e.target.value)}/>
			</div>
			)
	}
}