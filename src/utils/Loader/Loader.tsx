import "./Loader.css";

interface LoaderProps {
  styles?: any;
}

export const Loader = ({ styles }: LoaderProps) => {
  return (
    <div className="loader-background">
      <div className="loader-container">
        <div className="dot dot1" style={styles}></div>
        <div className="dot dot2" style={styles}></div>
        <div className="dot dot3" style={styles}></div>
      </div>
    </div>
  );
};
