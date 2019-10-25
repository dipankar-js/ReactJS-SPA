import React,{Component } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
	state={
		prices:[100,150,300],
		positions:['Balcony','Medium','Star'],
		desc:[
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
			'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
		],
		linkto:['#','#','#'],
		delay:[500,0,500]
	}

	showBoxes=()=>(
			this.state.prices.map((box,i)=>(

				<Zoom delay={this.state.delay[i]} key={i}>
					<div className="pricing_item">
						<div className="pricing_inner_wrapper">
							<div className="pricing_title">
								<span>${this.state.prices[i]}</span>
								<span>{this.state.positions[i]}</span>
							</div>
							<div className="pricing_description">
								<span>{this.state.desc[i]}</span>

							</div>
							<div className="pricing_buttons">

								<MyButton
									text="Purchase Tickets"
									bck="#ffa800"
									color="#fff"
									link={this.state.linkto[i]}
								/>
							</div>
							</div>
					</div>
				</Zoom>
				))

		)



	render(){
		return(
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>

					<div className="pricing_wrapper">
						{this.showBoxes()}
					</div>
				</div>
			</div>



			)
	}
}
export default Pricing;