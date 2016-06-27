import React from 'react';

class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { boards: [] };
    }

    componentWillMount() {
        $.ajax({
          	url: '/api/boards',
          	type: 'GET',
          	dataType: 'JSON',
          	data: {param1: 'value1'},
          }).done( boards => {
          	this.setState({ boards })
          }).fail( data => {
          	console.log(data);
          })
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

    updateBoard(category) {
    	$.ajax({
    		url: `/api/boards${id}`,
    		type: 'PUT)',
    		dataType: 'JSON',
    		data: { board: {...board} }
  	}).done( board => {
  		let boards = this.state.boards;
  		let editBoard = boards.find( b => b.id === board.id );
  		editBoard.name = board.name;
  		editBoard.description = board.description;
  		this.setState({boards: boards});
  	})
  	.fail( data => {
  		alert('Board did not update')
  	});
  }

  deleteBoard(id) {
		$.ajax({
			url: `/boards/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let boards = this.state.boards;
			let index = boards.findIndex( b => b.id === id);
			this.setState({
				boards: [
				  ...boards.slice(0, index),
				  ...boards.slice(index + 1, boards.length)
				]
			});
		}).fail( data => {
			// TODO: handle this better!
			alert('Board did not delete.');
		});
	}

    addBoardForm() {
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

    render() {
        return(
        	<div className="container">

						<button className="btn" onClick={this.addBoard.bind(this)}>Add</button>

  					<div className="card small">
					    <span className="card-title activator grey-text text-darken-4">Category<i className="material-icons right">more_vert</i></span>
					    <br />
					    <button className="btn" onClick={this.toggleEdit}>Edit</button>
					    <button className="btn" href="#">Delete</button>
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

export default Boards;
