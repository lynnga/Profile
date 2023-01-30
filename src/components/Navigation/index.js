function Navigation({setCurrentPage, topics}){
    return (
<nav>
    <ul>
        {topics.map(topic=>(
            <li className="bar" key={topic} onClick={()=>setCurrentPage(topic)}>{topic}</li>
        ))}
    </ul>
</nav>
    )
}
export default Navigation;