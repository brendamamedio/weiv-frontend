import "./style/section-style.css"

export const Section = ({ title, width, height, children }) => {
  const sectionStyle = {
    width: width,
    height: height
  };
  
  return (
    <>
      <div className="section" style={sectionStyle}>
        <h2>{title}</h2>

        <div className='event-category-cards'>
          {children}
        </div>
      </div>
    </>
  );
};