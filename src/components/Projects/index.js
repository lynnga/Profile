import ProjectData from "./projectData";
import ProjectTemplate from "./project_template";

function Projects(){
    return (
<>
<div id="project">
    <div id= "projectTitle" style={{"text-align": "center", "padding-top": "30px"}}>Projects</div>
    <div id= "project_list" style={{"text-align":"-webkit-center"}} >
        {ProjectData.map((project)=><ProjectTemplate {...project}/>)}
    </div>
</div>
</>

    )
}
export default Projects;