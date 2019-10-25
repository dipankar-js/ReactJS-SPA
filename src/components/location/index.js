import React from 'react';

const Location=()=>{
	return(
			<div className="location_wrapper">

				<iframe title="map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.53698639348!2d92.79047585544733!3d24.758018580450578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational+Institute+Of+Technology%2C+Silchar%2C+Assam!5e0!3m2!1sen!2sin!4v1544973507145" 
				width="100%" 
				height="500px" 
				frameBorder="0"  
				allowfullscreen>
				</iframe>

				<div className="location_tag">
					<div>Location</div>
				</div>

			</div>


		)
}

export default Location; 