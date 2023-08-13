import { MouseEvent, useState } from "react";

interface Props {
    numCol: number;
    headings: string[];
    onSelectCell: (item: string) => void;
}

function WorkSheet({numCol, headings, onSelectCell}: Props) {

    // Hooks
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [numCells, setNumCells] = useState([]);

    // Event handler
    const handleClick = (item:string, index:number, event: MouseEvent) => {
        console.log(item, index, event);
        setSelectedIndex(index);
        onSelectCell(item);
    }

    return( 
        <>
            <table className="table">
                <thead>
                <tr>
                    <th>Namn</th>
                    <th>Bokföringskonto</th>
                    <th>Intäkt</th>
                    <th>Utgift</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        {numCells.map(() =>
                            <td><input type="text"></input></td>
                        )}
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default WorkSheet;