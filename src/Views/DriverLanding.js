import React, {Component} from "react";
import RaisedButton from 'material-ui/RaisedButton';
import BottomNav from '../Components/bottomNav'

class DriverLanding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }
  render () {
    var body = null
      if(this.state.page === 0) {
        body = <Calendar/>
      } else if (this.state.page === 1) {
        body = <ListView/>
      }
      else if (this.state.page === 2) {
        body = <MapView/>
      }
    return (
      <div>

        <BottomNav className="bottomNav" pageController={(state)=> this.updateToPage(state)}/>

        {body}

      </div>
    );
  }

}

export default DriverLanding;
