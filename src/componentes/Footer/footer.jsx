import "./footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://github.com/agustinbernardi47'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://github.com/agustinbernardi47'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://github.com/agustinbernardi47'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por <br/> Agustín Bernardi</strong>
    </footer>
}
export default Footer;