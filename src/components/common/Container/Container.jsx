function Container({ as = 'div', className = '', children }) {
  const Component = as;
  const classNames = ['container', className].filter(Boolean).join(' ');

  return <Component className={classNames}>{children}</Component>;
}

export default Container;
