import React,{ Component } from 'react'

const VideoListItem = (props)=>{
		const Imgurl = props.vedio.snippet.thumbnails.default.url
		return(
			<li onClick={()=>props.onVidClick(props.vedio)} className='list-group-item'>
				<div className="video-list-media">
					<div className="media-left">
						<img className="media-object" src={Imgurl}/>
					</div>
						<div className="media-body">
							<div className="media-heading">
								{props.vedio.snippet.title}
							</div>
						</div>
				</div>
			</li>
			)
	}
export default VideoListItem;