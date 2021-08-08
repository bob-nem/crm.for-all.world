const content = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "15px",
  padding: "15px",
  width: "100px",
  height: "100px",
  margin: "auto",
  backgroundColor: "#fff",
  zIndex: 10000000
};

export default function SecondBlock() {
  return (
    <div style={content}>
      <p>lorem ipsum dolor sit amet</p>
    </div>
  );
}
