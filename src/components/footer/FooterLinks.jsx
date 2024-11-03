import { FaRegClock } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPin, LuPhoneCall } from "react-icons/lu";
const FooterLinks = () => {
  const info = [
    {
      Icon: FaRegClock,
      title: "opening Hours",
      texts: ["Monday - Sunday", "9:00 AM to 11:30 PM"],
    },
    {
      Icon: LuPhoneCall,
      title: "let's talk",
      texts: ["Phone: 1-234-567-890", "Fax: 1-234-567-890"],
    },
    {
      Icon: HiOutlineMail,
      title: "book a table",
      texts: ["Email: demo@website.com", "Support: support@website.com"],
    },
    {
      Icon: LuMapPin,
      title: "our address",
      texts: ["123 Street, New York City", "United States of America"],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-6 my-8">
      {info.map(({ Icon, title, texts }) => (
        <div className="text-white flex items-center flex-col " key={title}>
          <h3 className="text-yellow text-[1.4rem] mb-6 text-center">
            <Icon />
          </h3>
          <h4 className="font-bebas  text-2xl font-[500] leading-7 tracking-wider mb-2">
            {title}
          </h4>
          {texts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
