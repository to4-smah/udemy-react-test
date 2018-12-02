import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccountEdit from './AccountEdit'
import AccountConfirm from './AccountConfirm'

class AccountForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <React.Fragment>
                {page === 1 && <AccountEdit onSubmit={this.nextPage} />}
                {page === 2 && (<AccountConfirm previousPage={this.previousPage} onSubmit={onSubmit} />)}
            </React.Fragment>
        )
    }
}

AccountForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default AccountForm