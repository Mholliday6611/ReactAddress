import React from 'react';
import Info from './info'

class Book extends React.Component {

	constructor(){
		super();
		this.state={
			contact: [],
			input: '',
			name: '',
			number: '',
			address: ''
		}
		this.saveAddress = this.saveAddress.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}
	saveAddress(event){
		event.preventDefault()

		var newContact = {
			name: this.state.name,
			number: this.state.number,
			address:this.state.address
		}
		console.log(newContact)
		this.setState({
			contact: this.state.contact.concat(newContact),
			input: '',
		})
	}
	handleChange(event){
		var target = event.target
		var value = target.value
		var name = target.name

		this.setState({
			[name]:value
		})
	}
	render(){
		const info = this.state.contact.map((item, index)=><Info key={index} name={item.name} number={item.number} address={item.address}/>)
		return (
			<div>
				<form>
					<input placeholder="NAME" name="name"  onChange={this.handleChange}/>
					<input placeholder="NUMBER" name="number" onChange={this.handleChange}/>
					<input placeholder="ADDRESS" name="address" onChange={this.handleChange} />
					<button onClick={this.saveAddress}>SAVE!</button>
				</form>
				<div className="container">
					<div className="row">
						<div className='col-md-3'>
							Name
						</div>
						<div className='col-md-3'>
							Number
						</div>
						<div className='col-md-3'>
							Address
						</div>
					</div>
						{info}
				</div>
			</div>
			)
	}
}

export default Book