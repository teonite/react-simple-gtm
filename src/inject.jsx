import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

export const tagShape = PropTypes.shape({
    push: PropTypes.func,
});

function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}

export default function injectTag(WrappedComponent, options = {}) {
    const {intlPropName = 'tag'} = options;

    class InjectTag extends React.Component {
        static displayName = `InjectTag(${getDisplayName(WrappedComponent)})`;

        static contextTypes = {
            gtm: tagShape,
        };

        static WrappedComponent = WrappedComponent;

        constructor(props, context) {
            super(props, context);
            invariant(
                context.gtm,
                '[TagManager] Could not find GTManager instance. <TagProvider/> must exist in parent structure of component'
            );
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...{[intlPropName]: this.context.gtm}}
                />
            );
        }
    }

    return InjectTag;
}
