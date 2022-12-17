import styled from 'styled-components';
import { elementPosition } from '../utilities/element_position';

const PositionedElement = styled.div`
    --periodic-table-row: ${(props) => props.row};
    --periodic-table-column: ${(props) => props.column};
`;

/* this prints a list of all the classes we have generated, hopefully once */
const _seen_classes = {};
let _seen_timeout = null;
const debugLogClasses = (classes) => {
    classes.forEach(className => { _seen_classes[className] = 1 });

    if (!_seen_timeout)
        _seen_timeout = setTimeout(() => {
            _seen_timeout = null;
            const classes = Object.keys(_seen_classes).sort();
            console.debug("ElementInTable classes", classes.join(" "));
        }, 500);
};

const ElementInTable = ({element, setHoverElement}) => {
    const {row, column} = elementPosition(element);

    let classes = [];
    classes.push('state-' + element.standardState);
    classes.push('type-' + element.bondingType);
    classes.push('groupBlock-' + element.groupBlock);
    classes = classes.map(className => className.replace(" ", "-"));
    debugLogClasses(classes);

    return (
        <PositionedElement
                className={`ElementInTable ${classes.join(" ")}`}
                row={row} column={column}
                onMouseOver={(e)=>setHoverElement(element)}
            >
            <span className="atomic-number">{element.atomicNumber}</span>
            <span className="symbol">{element.symbol}</span>
        </PositionedElement>
    );
};

export default ElementInTable;