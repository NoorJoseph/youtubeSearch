import React,{ Component } from 'react'

export default class VideoDetails extends Component{
	constructor(props){
		super(props)
	}
	render(){
		
		if(!this.props.video){
			return <div>loading...</div>
		}
		const Vid = this.props.video.id.videoId
		const url = `https://www.youtube.com/embed/${Vid}`
		return (
			<div className="video-detail col-md8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div>{this.props.video.snippet.title}</div>
						<br/>
					<div>{this.props.video.snippet.description}</div>
				</div>
			</div>
			)
	}
}