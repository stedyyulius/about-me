import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import getWebsiteScreenshot from '../helpers/getWebsiteScreenshot';

type projectTypes = {
    [key: string]: string
}

const Projects = () => {
    const [screenshots, setScreenshots] = useState<projectTypes>({});

    useEffect(() => {
        populateProjectScreenshot();
    }, [])

    const populateProjectScreenshot = async () => {
        const projectUrls = [
            {
              name: 'battleship',
              url: 'https://battleship-tau.vercel.app/'
            },
            {
                name: 'e-mas',
                url: 'e-mas.com' 
            }
        ]

        const newScreenshots: projectTypes = {};

        for (const project of projectUrls) {

            const cachedBase64 = localStorage.getItem(project.name);

            if (cachedBase64) {
                const { expiry, base64 } = JSON.parse(cachedBase64);

                const expiredDate = new Date(expiry);

                if (new Date().getTime() > expiredDate.setDate(expiredDate.getDate() + 30)) { // if cached project base64 greater than 30 days, it considered expired
                    localStorage.remove(project.name)
                } else {
                    newScreenshots[project.name] = base64;
                }
            } else {
                const base64 = await getWebsiteScreenshot(project.url);
                
                newScreenshots[project.name] = base64;

                localStorage.setItem(project.name, JSON.stringify({
                    expiry: new Date(),
                    base64
                }))
            }
        }

        setScreenshots({ ...newScreenshots });
    }

    const projectScreenshot = (projectName: string) => {
        if (screenshots[projectName]) {
            return  <img className="project-rendered" src={screenshots[projectName]} alt={projectName} />
        }

        return  <ReactLoading type="spin" color="black" />
    }

    return (
        <div id="projects">
            <h1 className="title">Projects</h1>
            <div className="projects-container">
                <div className="project">
                   {projectScreenshot('battleship')}
                </div>
                <div className="project">
                    {projectScreenshot('e-mas')}
                </div>
                <div className="project">
                    a
                </div>
                <div className="project">
                    a
                </div>
            </div>
        </div>
    )
}

export default Projects;