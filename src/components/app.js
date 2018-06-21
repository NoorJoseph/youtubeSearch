import React, { Component } from 'react';
import SearchInput from './Search-input'
import VideoList from './Video-List'
import YTSearch from 'youtube-api-search'
import VideoDetails from './Video-Details'
const API_KEY ='AIzaSyA6Yo3vFcSfZKg6MW--1NNV0NC5mSHJTo8'

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			term:'',
			videos:[],
			selectedVid:null
		}
		this.search('youtube')
	}
	search(term){
		YTSearch({key:API_KEY,term:term},(videos)=> this.setState({ 
			videos:videos,
			selectedVid:videos[0]
		 }))
	}
  render() {
		console.log(this.state.videos)	
    return (
			<div className="container">
			<div>
			<SearchInput onSearch={term => this.search(term)} />
			</div>
    	<div className="row">
        <div className="col-xs-6">
      	<VideoDetails video={this.state.selectedVid}/>
        </div>

        <div className="col-xs-6">
				<VideoList 
					videos={this.state.videos}
					onVidSelect={selectedVid => this.setState({selectedVid})}
				 />
        </div>

   		</div>
		</div>
    );
  }
}
