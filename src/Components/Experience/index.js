import React from 'react';
import './_Experience.scss';
import { workEnum } from '../../Utils/WorkEnum';

function Experience() {

    const handleClick = (buttonIndex) => {
        renderExperienceContent(buttonIndex);
    }

    const renderExperienceButtons = () => {
        return workEnum.map((element, index) => {
            return <button className={`button-row ${index}`} key={element.company} onClick={() => handleClick(index)}>{element.company}</button>
        });
    }

    const renderExperienceContent = (buttonIndex) => {
        // return workEnum.map((element, index) => {
        //     if(buttonIndex === index || !buttonIndex) {
        //         const { description } = element;
        //         return (
        //             <>
        //                 <h3 key={element.company} className="work-experience-header">{`${element.title} @ ${element.company}`}</h3>
        //                 <p>{element.time}</p>
        //                 <div className="work-experience-bulletins">
        //                     <ul>
        //                     {description.map((element) => {
        //                         return (
        //                             <li key={element}>{element}</li>
        //                         )
        //                     })}
        //                     </ul>
        //                 </div>
        //             </>
        //         )
        //     }
        //     return null;
        // })
        console.log('index of enum is: ', workEnum[buttonIndex]);
    }

    return (
        <section className="experience">
            <div className="experience-container">
                <h2>Experience</h2>
                <div className="job-list">
                    {renderExperienceButtons()}
                </div>
                <div className="job-styled-panel">
                    <div className="job-content">
                        {renderExperienceContent()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;