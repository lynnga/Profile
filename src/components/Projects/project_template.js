function ProjectTemplate({ title, description, skills, url, image_url }) {
  return (
    <>
      
      <div style={{ border: "1px solid black", margin: "25px", width:"70%"}}>
      <div>
        <img style={{width: "100%", height: "300px", objectFit: "cover"}} src={image_url}></img>
        </div>
        <div style={{textAlign: "center", fontSize: "30px", textDecoration: "underline"}}>
          <a href={url} target="_blank" rel="noreferrer">{title}</a>
        </div>
        <div>
          <p>DESCRIPTION</p>
          <p>{description}</p>
        </div>
        <div>
          <p>SKILLS</p>
          <div className="skills" style={{ display: "flex", "justify-content": "center" }}>
            {skills.map((skill) => {
              return (
                <>
                  <div>
                    <p>{skill}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectTemplate;
