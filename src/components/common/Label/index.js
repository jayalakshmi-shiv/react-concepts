import React from 'react'
import PropTypes from 'prop-types';
import * as Styled from './style'

function Label(props) {
    const {children, className, ...rest} = props;
    return (
        <Styled.Label className = {className} {...rest}>
            {children}
        </Styled.Label>
    )
}
Label.propsTypes = {
    children:PropTypes.any,
    className:PropTypes.string
}
export default Label
