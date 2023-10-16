import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer bg-light-beige flex flex-col-reverse sm:flex-row justify-between items-center py-5 px-5 gap-1 xl:h-[6vh] 2xl:h-full">
        <div className="copyright  text-dark-brown text-xs sm:text-xs font-light font-inter sm:w-[21rem] whitespace-nowrap justify-center items-center sm:justify-start">© 2023 ARTIFYNITURE. All rights reserved.</div>
        <div className="logo text-dark-brown text-lg sm:text-xl font-semibold font-k2d sm:w-[21rem] flex justify-center">ARTIFYNITURE</div>
        <div className="social-media-icons flex flex-row gap-4 items-center sm:w-[21rem] justify-center sm:justify-end">
            <FaFacebook  size={16} color="#080808"/>
            <FaInstagram size={16} color="#080808"/>
            <FaTwitter size={16} color="#080808"/>
            <FaYoutube size={16} color="#080808"/>
        </div>
    </div>
  )
}

export default Footer