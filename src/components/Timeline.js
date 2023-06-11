import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineItem } from './TimelineItem';
import './Timeline.css'



const timelineData = [
    {
        text: 'Start of Registration',
        date: '05-06-2023',
      
    },
    {
        text: 'Closing of Registration',
        date: '10-06-2023, 11:59 PM',
      
    },
    {
        text: 'Workshop on Figma (Online)',
        date: '12-06-2023',
      
    },
    {
        text: 'Submission of Figma Design (Online submission)',
        date: '17-06-2023,11:59 PM',
      
    },
    {
        text: 'Session on React (Online)',
        date: '18-06-2023',
      
    },
    {
        text: 'Session on Git and Github (Online)',
        date: '19-06-2023',
      
    },
    {
        text: ' Submission of Front end design (Online)',
        date: '30-06-2023,11:59 PM',
      
    },
    {
        text: 'Complete analysis and feedback by evaluators (Online)',
        date: '07-07-2023,11:59 PM',
      
    },
    {
        text: 'Final submission and evaluation along with prize distribution(offline)',
        date: 'Third week of July ',
      
    },
    
   
]


export const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container" id='timeline'>
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

