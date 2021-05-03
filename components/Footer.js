import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 md:px-20 pt-4 md:pt-16 pb-10 my-10 text-gray-600 text-sm">
      <div className="flex justify-between flex-wrap">
        <div className="w-40 my-6">
          <h4 className="text-2xl font-bold mb-6 text-gray-800">Besnik</h4>
          <p className="text-sm text-gray-400 font-medium mb-6 leading-relaxed">
            financial transactions remotely using a mobile device such as a
            smartphone or tablet
          </p>
          <div className="flex">
            <FacebookIcon className="mr-1" />
            <TwitterIcon className="mx-1" />
            <LinkedInIcon className=" ml-1" />
          </div>
        </div>
        <div className="w-40 my-6 text-gray-400 font-medium">
          <h4 className="text-md font-bold mb-6 text-gray-800">Besnik</h4>
          <div className="mb-3">About</div>
          <div className="my-3">Terms of Use</div>
          <div className="my-3">Privacy Policy</div>
          <div className="my-3">How it Works</div>
          <div className="my-3">Contact Us</div>
        </div>
        <div className="w-40 my-6 text-gray-400 font-medium">
          <h4 className="text-md font-bold mb-6 text-gray-800">Support</h4>
          <div className="mb-3">Support Career</div>
          <div className="mb-3">24h Service</div>
          <div className="mb-3">Quick Chat</div>
        </div>
        <div className="w-40 my-6 text-gray-400 font-medium">
          <h4 className="text-md font-bold mb-6 text-gray-800">Contact</h4>
          <div className="mb-3">WhatsApp</div>
          <div className="mb-3">Support 24</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between mt-10 text-xs">
        <span>Copyright © 2021 Lobar.net</span>
        <span className="mt-2">
          Created by <strong>Besnik</strong>
        </span>
      </div>
    </div>
  );
};

export default Footer;
