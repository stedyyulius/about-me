import arrow from '../assets/arrow.png';

const Introduction = () => {

    const scrollToProject = () => {
        const projectDom = document.getElementById('projects');
        projectDom?.scrollIntoView();
    }

    return (
        <div className="introduction-container">
            <p data-aos="fade-right" className="introduction-message">I'm Stedy</p>
            <p data-aos="fade-left" className="introduction-message">Fullstack Developer</p>
            <button className="view-project-button" onClick={() => scrollToProject()}>View Projects <img src={arrow} alt="arrow" /></button>
        </div>
    )
}

export default Introduction