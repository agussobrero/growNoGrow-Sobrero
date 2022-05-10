import React from "react";
import "./footer.css";

const Footer = ()=> {
    return (
        <>
                <div className="footer">
                    <div className="footer-redes">
                        <h2 className="footer-h2">Buscanos en nuestras redes</h2>
                        <div className="img-redes">
                            <img src="../2561485_twitter_icon.png" alt="twitter"></img>
                            <img src="../216078_facebook_social_icon.png" alt="facebook"></img>
                            <img src="../843786_whatsapp_icon.png" alt="whatsapp"></img>
                            <img src="../2561453_instagram_icon.png" alt="instagram"></img>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h5>Quédate con nosotros</h5>
                        <p>Sigue en contacto y recibe las últimas novedades</p>
                        <div>
                            <div>
                                <form action="#" id="mailRegistro">
                                    <input type="text" class="form-control" placeholder="Enter your Email"></input>
                                    <button >Subscribirme</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-div">
                        <div class="footer-last__div__col">
                            <h4 className="footer-h4">About Us</h4>
                            <ul className="footer-div-info">
                                <li>About us</li>
                                <li>Transparency</li>
                                <li>Blog</li>
                                <li>Giving Back</li>
                            </ul>
                        </div>
                        <div class="footer-last__div__col">
                            <h4 className="footer-h4">Shop</h4>
                            <ul className="footer-div-info">
                                <li>Dropper</li>
                                <li>Gummies</li>
                                <li>Cream</li>
                                <li>Balm</li>
                            </ul>
                        </div>
                        <div class="footer-last__div__col">
                            <h4 className="footer-h4">Resources</h4>
                            <ul className="footer-div-info">
                                <li>Privacy Policy</li>
                                <li>Refund Policy</li>
                                <li>FAQ</li>
                                <li>Affiliate Program</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer;