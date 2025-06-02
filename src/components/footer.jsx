import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#17202a] text-white">
      <div className="relative pt-10 p-4 mx-[10px] border-t-2 border-solid border-[#EDEFF2]">
        <div className="gap-10 md:grid md:grid-cols-2 justify-items-center items-start max-sm:text-center">
          
          {/* Contact Section */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <div className="text-sm space-y-1">
              <p className="break-words">
                620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India
              </p>
              <p className="break-words">+91 9958993549</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold">Social Media</h2>
            <div className="grid grid-cols-2 text-sm gap-2 mt-2">
              <Link href={"#"} className="break-words hover:text-gray-400">Facebook</Link>
              <Link href={"https://www.instagram.com/dholera.insider?igsh=MWNnYzc5OG40a2dr"} className="break-words hover:text-gray-400">Instagram</Link>
              <Link href={"#"} className="break-words hover:text-gray-400">Twitter (X)</Link>
              <Link href={"https://www.linkedin.com/in/dholera-insider-1a6b57351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="break-words hover:text-gray-400">LinkedIn</Link>
              <Link href={"https://youtube.com/@dholerainsider?si=ZcBtHqUhtxqi90dY"} className="break-words col-span-2 text-center hover:text-gray-400">YouTube</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-center pt-2 text-sm">
        Copyright &copy; {year} Dholera Insider | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
