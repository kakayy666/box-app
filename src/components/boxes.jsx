import React, { Component } from 'react';
import Box from './box';
const Boxes = ({boxes,onReset,onDelete,onClickLeft,onClickRight}) => {
    return ( <React.Fragment>
        <button onClick={onReset} style={{marginBottom:"15px"} } className='btn btn-info'>Reset</button>
        {boxes.map(box => {
            return (
                <Box
                    key={box.id}
                    box={box}
                    onDelete={() => onDelete(box.id)} 
                    onClickLeft={() => onClickLeft(box.id)}
                    onClickRight={() => onClickRight(box.id)}>
                    <h1>Box:</h1>
                    <p>#{box.id}</p>
                </Box>)
        })}
    </React.Fragment>) ;
}
 
export default Boxes;
// class Boxes extends Component {
//     componentDidUpdate() {
//         console.log('boxes - updated')
//     }
//     render() { 
//         console.log('boxes - render')
//         return (<React.Fragment>
//             <button onClick={this.props.onReset} style={{marginBottom:"15px"} } className='btn btn-info'>Reset</button>
//             {this.props.boxes.map(box => {
//                 return (
//                     <Box
//                         key={box.id}
//                         box={box}
//                         onDelete={()=>this.props.onDelete(box.id)} >
//                         <h1>Box:</h1>
//                         <p>#{box.id}</p>
//                     </Box>)
//             })}
//         </React.Fragment>);
//     }
// }
 
// export default Boxes;