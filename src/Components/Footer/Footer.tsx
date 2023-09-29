import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer bg-light-beige flex flex-row justify-between items-center py-5 px-5">
        <div className="copyright  text-dark-brown text-base font-light font-inter w-[25rem] whitespace-nowrap">© 2023 ARTIFYNITURE. All rights reserved.</div>
        <div className="logo text-dark-brown text-xl font-semibold font-k2d w-[25rem] flex justify-center">ARTIFYNITURE</div>
        <div className="social-media-icons flex flex-row gap-4 items-center w-[25rem] justify-end">
            <FaFacebook size={20} color="#080808"/>
            <FaInstagram size={20} color="#080808"/>
            <FaTwitter size={20} color="#080808"/>
            <FaYoutube size={20} color="#080808"/>
        </div>
    </div>
  )
}

export default Footer