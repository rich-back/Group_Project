import { Link } from "react-router-dom";

const Element = ({ element }) => {
    if (!element)
        return <div className="element">---</div>;

    return (
        <div className="element">
            <Link to={`/periodictable/element/${element._id}`}><h4>{element.atomicNumber}.{element.name}</h4></Link>
            <p><b> Standard State: </b>{element.standardState}</p>
            <p><code>{ JSON.stringify(element) }</code></p>
        </div>
    )
}


export default Element;