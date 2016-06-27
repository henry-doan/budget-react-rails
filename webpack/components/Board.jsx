import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
				this.state = {edit: false}
      	this.toggleEdit = this.toggleEdit.bind(this);
    		this.updateBoard = this.updateBoard.bind(this);    }

  toggleEdit() {
  	this.setState({ edit: !this.state.edit });
  }

  updateBoard(){
  	let board = { category: this.refs.category.value, sub_category: this.refs.sub_category.value, money_value: this.refs.money_value.value }
  	this.toggleEdit();
  	this.props.updateBoard(this.props.id, board);
  }

  edit(){
		return(
    		<div className="container">

  					<div className="card small">
					    <span className="card-title activator grey-text text-darken-4"><input type="text" placeholder="Category" ref="category" /><i className="material-icons right">more_vert</i></span>
					    <br />
					    <button onClick={this.toggleEdit} className="btn yellow">Cancel</button>
    	        <button onClick={this.updateBoard} className="btn">Save</button>
  					  <div className="card-reveal">
  					    <span className="card-title grey-text text-darken-4"><input type="text" placeholder="Category" ref="category" /><i className="material-icons right">close</i></span>
								<div className="container">
									<table>
				    			  <thead>
				    			    <tr>
				    			      <th data-field="name">Sub Category</th>
				    			      <th data-field="name">Money</th>
				    			    </tr>
				    			  </thead>
				    			  <tbody>
				    			    <tr>
				    			      <td><input type="text" placeholder="Name" ref="sub_category"/></td>
				    			      <td><input type="number" placeholder="$" ref="money_value" defaultValue="$"/></td>
				    			    </tr>
				    			    <tr>
				    			      <td><input type="text" placeholder="Name" ref="sub_category"/></td>
				    			      <td><input type="number" placeholder="$" ref="money_value" defaultValue="$"/></td>
				    			    </tr>
				    			    <tr>
				    			      <td><input type="text" placeholder="Name" ref="sub_category"/></td>
				    			      <td><input type="number" placeholder="$" ref="money_value" defaultValue="$"/></td>
				    			    </tr>
				    			  </tbody>
				    			</table>
			    			</div>
  					  </div>
  					</div>

					</div>
  }

    render() {
        return{
        	if (this.state.edit) {
      			return this.edit();
   			 } else {
   			 		return(
        			<div className="container">
								<button className="btn" onClick={this.addBoard.bind(this)}>Add</button>
  							<div className="card small">
							    <span className="card-title activator grey-text text-darken-4">Category<i className="material-icons right">more_vert</i></span>
							    <br />
							    <button className="btn" onClick={this.toggleEdit}>Edit</button>
							    <button className="btn" onClick={() => this.props.deleteBoard(this.props.id)}>Delete</button>
  							  <div className="card-reveal">
  							    <span className="card-title grey-text text-darken-4">Category<i className="material-icons right">close</i></span>
										<div className="container">
											<table>
				  		  			  <thead>
				  		  			    <tr>
				  		  			      <th data-field="name">Sub category</th>
				  		  			      <th data-field="name">Money:</th>
				  		  			    </tr>
				  		  			  </thead>
				  		  			  <tbody>
				  		  			    <tr>
				  		  			      <td>Eclair</td>
				  		  			      <td>$0.87</td>
				  		  			    </tr>
				  		  			    <tr>
				  		  			      <td>Jellybean</td>
				  		  			      <td>$3.76</td>
				  		  			    </tr>
				  		  			    <tr>
				  		  			      <td>Lollipop</td>
				  		  			      <td>$7.00</td>
				  		  			    </tr>
				  		  			  </tbody>
				  		  			</table>
			    					</div>
  							  </div>
  							</div>
							</div>
					);
				}
      }
  	}
}

export default Board;
