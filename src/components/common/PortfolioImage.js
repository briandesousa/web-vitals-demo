function PortfolioImage(props) {
  return (
      <div style={{ padding: "10px" }}>
          <img src={props.src} width="1000px" alt="stairs leading down to swimming pool" style={{ objectFit: 'contain' }} />
      </div>
  );
}

export default PortfolioImage;
