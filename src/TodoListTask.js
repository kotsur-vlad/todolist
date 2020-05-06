import React from "react";

class TodoListTask extends React.Component {

	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	onTitleChanged = (e) => {
		this.props.changeTitle (this.props.task.id, e.currentTarget.value)
	};

	onIsDoneChanged = (e) => {
		this.props.changeStatus (this.props.task.id, e.currentTarget.checked)
	};

	render = () => {

		let taskClassName = this.props.task.isDone ? "todoList-task done" : "todoList-task";

		return (
			<div className={taskClassName}>
				<input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
				{this.state.editMode
					? <input type="text" autoFocus={true} value={this.props.task.title} onChange={this.onTitleChanged} onBlur={this.deactivateEditMode}/>
					: <span onClick={this.activateEditMode}>{this.props.task.id}) {this.props.task.title}</span>
				}, priority: {this.props.task.priority}
			</div>
		)
	}
}

export default TodoListTask;
