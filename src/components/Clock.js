import React from "react"
import Time from './Time';

export default class Clock extends React.Component {
    
    constructor(props) {
			super(props);

			this.state = { date: new Date() }
    }

		componentDidMount() {
			this.id = setInterval( () => this.tick(), 1000);
			this.setStyleTime();
			document.title = "Etat local et cycle de vie"
		}

		componentDidUpdate() {
			this.setStyleTime();
		}

		componentWillUnmount() {
			clearInterval(this.id);
		}

		tick() {
			// console.log(new Date());
			this.setState({ date: new Date() })
		}

		setStyleTime() {
			const second = this.state.date.getSeconds();
			const time = document.querySelector('#time');
			time.style.color = (second % 2 === 0) ? "blueviolet": 'darkorange';
		}

    render() {
			return (
				<div>
					<h2>Heure</h2>
					<p id="time">
						<Time date={this.state.date} />
					</p>
				</div>
			)
    }
}