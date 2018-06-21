import React, { Component } from 'react'
import _ from 'lodash'
export default class SearchInput extends Component {
	constructor(){
		super()
		this.state = {
			term:''
		}
	}

	debouncedSearch = _.debounce(()=>this.onClick(this.state.term),500);

	onSearch = (term) =>{
		this.setState({term})
		this.debouncedSearch();
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