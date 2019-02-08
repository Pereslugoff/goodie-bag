import React, { Component } from 'react';
import Candy from "./Candy";
import { getCandyThunk } from '../reducers/index';
import { connect } from 'react-redux';

class CandyList extends Component {


  componentDidMount(){
    this.props.getCandy()
  }



  render() {
    console.log(this.props.match)
    return (
      <div>
        {this.props.candy.map(candy => {
          return (
            <Candy
              key={candy.id}
              name={candy.name}
              description={candy.description}
              quantity={candy.quantity}
              imageUrl={candy.imageUrl}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candy: state.candy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandy: () => dispatch(getCandyThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyList);
