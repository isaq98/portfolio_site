import React, {useState, useEffect } from 'react';
import './_Experience.scss';
import { workEnum } from '../../Utils/WorkEnum';

function Experience() {
    const [storedJSX, setJSX] = useState(null);

    const handleClick = (buttonIndex) => {
        setJSX(renderExperienceContent(buttonIndex));
    }

    const renderExperienceContent = (buttonIndex) => {
        if(!buttonIndex) {
            buttonIndex = 0;
        }
        const { company, title, time, description } = workEnum[buttonIndex];
        return (
            <>
                <h3 className="work-experience-header">{`${title} @ ${company}`}</h3>
                <p>{time}</p>
                <div className="work-experience-bulletins">
                    <ul>
                    {description.map((element) => {
                        return (
                            <li key={element}>{element}</li>
                        )
                    })}
                    </ul>
                </div>
            </>
        );
    }

    useEffect(() => {
        setJSX(renderExperienceContent());
    }, []);

    const renderExperienceButtons = () => {
        return workEnum.map((element, index) => {
            return <button className={`button-row ${index}`} key={element.company} onClick={() => handleClick(index)}>{element.company}</button>
        });
    }

    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h2>Experience</h2>
                <div className="job-list">
                    {renderExperienceButtons()}
                </div>
                <div className="job-styled-panel">
                    <div className="job-content">
                    {storedJSX}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;