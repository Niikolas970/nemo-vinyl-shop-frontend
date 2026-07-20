/**
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: 'button' | 'a'
 */
function Button({ variant = 'primary', as = 'button', className = '', children, ...rest }) {
  const classNames = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  const Component = as;

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
}

export default Button;
