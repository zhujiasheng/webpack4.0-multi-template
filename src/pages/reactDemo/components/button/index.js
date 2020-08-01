import classNames from "classnames";

class Button extends React.Component {
  render() {
    const props = Object.assign({}, this.props);

    const {
      type,
      shape,
      size,
      loading,
      children,
      style,
      className,
      prefix,
      ...other
    } = props;

    console.log(props, "props");

    const classes = classNames({
      "antd-btn": true,
      [prefix + type]: type,
      [prefix + shape]: shape,
      [prefix + size]: size,
      [`${prefix}loading`]: loading in props && props.loading !== false,
      [className]: className,
    });

    return (
      <div className={classes} style={style} {...other}>
        {children}
      </div>
    );
  }
}

Button.defaultProps = {
  prefix: "antd-btn-",
};

export default Button;
