import React from 'react';
import PropTypes from 'prop-types';
import {tagShape} from './inject';
import GTManager from './GTManager';

class c extends React.Component {
    getChildContext() {
        return {gtm: new GTManager(this.props.gtagId, this.props.gtmId)};
    }

    render() {
        return this.props.children;
    }
}

TagProvider.propTypes = {
    children: PropTypes.any,
    gtagId: PropTypes.string,
    gtmId: PropTypes.string,
};

TagProvider.childContextTypes = {
    gtm: tagShape,
};

export default TagProvider;
