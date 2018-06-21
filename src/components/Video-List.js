import React,{ Component } from 'react'
import VideoListItem from './Video-List-Item'

const VideoList = (props)=> {

		const viditem =  props.videos.map((video) => {
			return(
					<VideoListItem 
						key={video.etag} 
						vedio={video}
						onVidClick={props.onVidSelect}
					/>
				)
		})
		return (
			<ul>
			{viditem}	
			</ul>
		)
	}
export default VideoList;