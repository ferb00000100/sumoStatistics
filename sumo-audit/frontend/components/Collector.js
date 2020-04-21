import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class Collector extends Component {
    static propTypes = {
        collectors: PropTypes.object.isRequired,
    };

    render() {
        const { collectors } = this.props;
        return (

            { collectors }

        )
    }

}