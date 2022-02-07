import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchQuery: '' }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.searchQuery)
        // call back from parent component
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Youtube Video Search</label>
                        <input type="text"
                            placeholder="Search"
                            value={this.state.searchQuery}
                            onChange={e => this.setState({ searchQuery: e.target.value })}
                        />

                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar