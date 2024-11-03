export default function PortfolioPage(props) {
    return (
        <ul>
            {
                props.projectData.map(item => (
                    <li key={item.id} className="mb-4">
                        <div className="card text-bg-dark">
                            <img className="card-img" src={item.image} alt={item.name}></img>
                            <div className="card-img-overlay">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    <a href={item.githubUrl} target="_blank">View Here</a>
                                </p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}