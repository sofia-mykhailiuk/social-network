import LOGO from "../LOGO-SM.png";

const Header = () => {
    return (
        <header className='header'>
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU" alt=""/>*/}
            <img src={LOGO} alt=""/>
        </header>
    );
}

export default Header