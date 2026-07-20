function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const wrapperClass = align === 'center' ? 'section-title section-title--center' : 'section-title';

  return (
    <div className={wrapperClass}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__title">{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
