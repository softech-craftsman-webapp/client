import React from 'react';

import style from './style.module.css';

/**
 * @description Input component
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
      return(
        <input className={`appearance-none ${style.input} border border-gray-300 focus:outline rounded sm:text-sm focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                type={this.props.type}
                required={this.props.required}
                id={this.props.id}
                placeholder={this.props.placeholder}
                value={this.props.value}
                accept={this.props.accept}
                alt={this.props.alt}
                autoComplete={this.props.autoComplete}
                autoFocus={this.props.autoFocus}
                checked={this.props.checked}
                disabled={this.props.disabled}
                form={this.props.form}
                formAction={this.props.formAction}
                formMethod={this.props.formMethod}
                formNoValidate={this.props.formNoValidate}
                formTarget={this.props.formTarget}
                list={this.props.list}
                max={this.props.max}
                maxLength={this.props.maxlength}
                min={this.props.min}
                minLength={this.props.minLength}
                multiple={this.props.multiple}
                name={this.props.name}
                pattern={this.props.pattern}
                readOnly={this.props.readOnly}
                size={this.props.size}
                src={this.props.src}
                step={this.props.step}
                width={this.props.width}
                height={this.props.height}
                onChange={this.props.onChange}
            />
      );
    }
}

export default Input;