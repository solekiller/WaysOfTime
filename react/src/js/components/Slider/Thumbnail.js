//Thumbnail.js

import React from 'react';
import CardMenu from './CardMenu';
import { addLayer } from "../../actions/layerActions";

export default class Thumbnail extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  handleClickz()  {
    console.log("clicked!!");
    alert(1);
  }

  render() {
  	const { map_id, map_url, map_title } = this.props;
    return (
      <li onClick={this.handleClickz.bind(this)} class='thumbnail-click' id={"map-" + map_id } >
	    	<div class='demo-card-image mdl-card mdl-shadow--2dp'>
		        <CardMenu map_id={map_id} />
		        <img src={ map_url } data-id={ map_id } />
		        <div class='mdl-card__actions' >
		            <span class='demo-card-image__filename'>{ map_title }</span>
		            <input class="invisible thumb-slider" type="range" min="0" max="100" value="100" tabindex="0" />
		        </div>
	        </div>
	     </li>
    );
  }
}
