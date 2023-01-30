function Footer(){
    const icons = [
        {
          name: "fab fa-github",
          link: "https://github.com/lynnga"
        },
        {
          name: "fab fa-linkedin",
          link: "https://www.linkedin.com/"
        },
        {
          name: "fab fa-instagram",
          link: "https://www.instagram.com/lynngamliel/?igshid=ZmZhODViOGI%3D/"
        }
      ]

      return (
        <footer className="footer">
          {icons.map(icon =>
          (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
          )
            )}
        </footer>
      );
    }
    
   
//    return (
// <footer> 

//     <h5> Made by Lin</h5>
    
// </footer>
//     )
// }
export default Footer;