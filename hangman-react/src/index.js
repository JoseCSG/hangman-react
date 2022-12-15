import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const words = ["comida", "perro", "alegria"];
function underline(props)
{
	return(
		<p className='underscore'>{props.value}</p>
	)
}
class wordHidden extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			word: Array(words[2].length).fill(null),
		}
	}
	renderUnderscore(i)
	{
		return <underline 
				value = {this.state.word[i]}
				/>;
	}
	render()
	{
		return (
			<div className='word'>
				{this.renderUnderscore(1)}
			</div>
		)
	}
}
class Game extends React.Component {
	render() 
  	{
		return (
			<div className='Game'>
				<div>
					<h1>Hangman</h1>
				</div>
				<div className='gameWord'>
					<wordHidden/>
				</div>
			</div>
		)
  	}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
