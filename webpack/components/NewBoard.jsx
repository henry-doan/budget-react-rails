import React from 'react';

class NewBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    addBoard(e){
    	e.preventDefault();
    	$.ajax({
   			url: '/api/boards',
   			type: 'POST',
   			data: { board: {category: this.refs.category.value, sub_category: this.refs.sub_category.value, money_value: this.refs.money_value.value } },
   			dataType: 'JSON'
   		}).done( board => {
   			this.addBoardForm();
   			this.refs.add.reset();
   		}).fail( data => {
   			alert('board not added');
   		});
    }

    render() {
        return(
    			<div className="container">
	
  						<div className="card small">
						    <span className="card-title activator grey-text text-darken-4"><input type="text" placeholder="Category" ref="category" /><i className="material-icons right">more_vert</i></span>
						    <br />
						    <input type="submit" className="btn" value="Add" />
						    <button className="btn" href="#">Cancel</button>
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
    	)
    }
}

export default NewBoard;
