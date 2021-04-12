import { useState, useEffect } from 'react';

function PortfolioImage(props) {

  const [render, setRender] = useState(false);

  const imageStyle = {
    objectFit: 'contain',
    margin: '5px',
    display: (render ? props.display : 'none'),
    width: props.width,
    height: props.height
  }

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, props.renderDelay);
  }, [props.renderDelay]);

  return (
      <img src={`${props.src}`} alt={props.altText} style={imageStyle} />
  );
}

PortfolioImage.defaultProps = {
  renderDelay: 5000,
  display: 'inline-block',
  width: '',
  height: '',
  altText: ''
}

export default PortfolioImage;
