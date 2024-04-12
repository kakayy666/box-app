import React, { Component } from 'react';
//写一个box组件
class Box extends Component {
    componentWillUnmount() {
    console.log('box - unmount')
    }
    styles = {
        left: '50%',
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        color: "white",
        textAlign: "center",
        lineHeight: "100px", 
        borderRadius: "5px",
    }


    render() { 
        console.log('box - render')
        // console.log(this.props)
        return(
            <React.Fragment>
                {this.props.children}
                <div style={this.getStyles()}>{this.toString()}</div>
                <button onClick={()=>this.props.onClickLeft(this.props.box.id)} className='btn btn-primary m-2'>left</button>
                <button onClick={()=>this.props.onClickRight(this.props.box.id)} className='btn btn-success m-2'>right</button>
                <button onClick={()=>this.props.onDelete(this.props.box.id)} className='btn btn-danger m-2'>delete</button>
               
        </React.Fragment>)
    }

    getStyles() { 
        if (this.props.box.x === 0) return this.styles
        else if(this.props.box.x > 0) return {...this.styles, backgroundColor: "lightgreen",marginLeft: this.props.box.x*10 }
        return {...this.styles, backgroundColor: "red",marginLeft: this.props.box.x *10}
    }

    toString() {
        return `x: ${this.props.box.x}`
    }
}

 
export default Box;

