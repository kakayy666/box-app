import React, { Component } from 'react';
import NavBar from './navbar';
import Boxes from './boxes';

class app extends Component {
    state = { 
        boxes: [
            { id: 1, x:0 },
            { id: 2, x:4 },
            { id: 3, x:16 },
            { id: 4, x:32 },
        ]
    } 

    componentDidMount() {//mounted函数
        console.log('app - mounted')
    }

    constructor() {//构造
        super()
        console.log('app - constructor')
    }

    handleDelete=(id)=> {
        console.log("delete", id)
        const boxes = this.state.boxes.filter(box => box.id !== id)
        this.setState({boxes})
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(box => {
            console.log('reset')
            return { ...box, x: 0}
        })
        this.setState({boxes})
    }

    handleLeft = (id) => {
        const boxes = this.state.boxes.map(box => {
            if (box.id === id) {
                return { ...box, x: box.x - 1}
            }
            return box
        })
        this.setState({boxes})
    }

    handleRight = (id) => {
        const boxes = this.state.boxes.map(box => {
            if (box.id === id) {
                return { ...box, x: box.x + 1}
            }
            return box
        })
        this.setState({boxes})
    }
    render() { //渲染
        console.log('app - render')
        return (
            <React.Fragment>
                <NavBar boxesCount={this.state.boxes.filter(b=>b.x!==0).length}></NavBar>
                    <div className='container'>
                    <Boxes 
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onClickLeft={this.handleLeft}
                        onClickRight={this.handleRight}
                    ></Boxes>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default app;