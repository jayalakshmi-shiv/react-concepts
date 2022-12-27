import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import uuid from 'uuid/dist/v4';
import autosize from 'autosize'
import ReadOnly from '../ReadOnlyContext';
import * as Styled from './style';
import Label from '../Label';

function TextArea(props) {
    const [textCount, setTextCount] = useState(props.data && props.data.length ? props.data.length : 0)
    const { id, data, isDisabled, onChange, placeHolder, rootClassName, labelClassName, label, maxLength, showTextCount, rows, isRequired, hasError, validationMsg, ...other } = props;
    let textarea = null;
    const { readOnly } = React.useContext(ReadOnly);
    useEffect(() => {
        autosize(textarea);
    }, [])
    const updateTextArea = e => {
        setTextCount(e.target.value.length);
        onChange(e.target.value);
    }
    let otherProps = { ...other };
    if (isRequired) {
        otherProps = {
            ...other,
            isRequired
        }
    }
    return (
        <>
            {
                readOnly ? <Styled.ReadOnly>{data}</Styled.ReadOnly> :
                    (
                        <Styled.Container className={rootClassName}>
                            {
                                label && (
                                    <Label htmlFor={id} className={labelClassName}>
                                        {label}
                                    </Label>
                                )
                            }
                            <Styled.TextArea
                                id={id}
                                red={ref => textarea = ref}
                                maxLength={maxLength}
                                hasError={hasError}
                                onChange={e => updateTextArea(e)}
                                rows={rows}
                                disabled={isDisabled}
                                placeHolder={placeHolder}
                                defaultValue={data}
                                {...otherProps}
                            />
                            {showTextCount &&
                                <span>{textCount}/{maxLength}</span>
                            }
                        </Styled.Container>
                    )
            }
        </>
    )
}
TextArea.prototype = {
    id: PropTypes.string,
    data: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
    rootClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    showTextCount: PropTypes.bool,
    rows: PropTypes.number,
    isRequired: PropTypes.bool,
    hasError: PropTypes.bool,
    validationMsg: PropTypes.string
}
TextArea.defaultValue = {
    id: uuid(),
    data: '',
    isDisabled: false,
    onChange: () => { },
    placeHolder: '',
    showTextCount: false,
    rootClassName: '',
    labelClassName: '',
    label: '',
    isRequired: false,
    validationMsg: ''
}
export default TextArea;
