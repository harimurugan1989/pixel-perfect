import React from 'react'

export const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content" >
           
            <time>{data.date}</time>
            <p>{data.text}</p>
         
            <span className="circle" />
        </div>
    </div>
  
);