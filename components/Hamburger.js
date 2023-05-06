import MenuIcon from '@mui/icons-material/Menu';

export default function Hamburger(props) {
  return (
    <div className="hamburger" onClick={() => {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-bar");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}