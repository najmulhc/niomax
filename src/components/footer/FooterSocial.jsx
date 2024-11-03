import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

const FooterSocial = () => {
  const links = [
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com",
    },
    {
      Icon: FaX,
      href: "https://www.x.com",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-4 my-4 md:mt-16">
      {links.map((link) => (
        <a className="text-white p-4 border border-white rounded-full" target="_blank" key={link.href} href={link.href}>
          {" "}
          <link.Icon />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
