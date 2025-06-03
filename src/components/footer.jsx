import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Dholera Insider
                </h2>
                <p className="text-slate-300 mt-4 text-lg leading-relaxed max-w-md">
                  Your trusted source for insights, updates, and opportunities in India's first planned smart city.
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-200">Stay Updated</h3>
                <div className="flex max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 rounded-r-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    620 JMD Megapolis, Sector-48,<br />
                    Sohna Road, Gurugram, India
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <Link href="tel:+919958993549" className="text-slate-300 hover:text-white transition-colors duration-200">
                    +91 9958993549
                  </Link>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <Link href="mailto:info@dholerainsider.com" className="text-slate-300 hover:text-white transition-colors duration-200">
                    info@dholerainsider.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-200 border-b border-slate-700 pb-2">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 p-3 bg-slate-700/30 hover:bg-blue-600/20 rounded-lg transition-all duration-300 group border border-slate-600/50 hover:border-blue-500/50"
                >
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </Link>
                
                <Link 
                  href="https://www.instagram.com/dholera.insider?igsh=MWNnYzc5OG40a2dr" 
                  className="flex items-center space-x-2 p-3 bg-slate-700/30 hover:bg-pink-600/20 rounded-lg transition-all duration-300 group border border-slate-600/50 hover:border-pink-500/50"
                >
                  <svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.552h3.293v.968c0 .297.252.549.549.549.297 0 .549-.252.549-.549v-.968h3.293c-.684.941-1.835 1.552-3.132 1.552-.297 0-.549.252-.549.549s.252.549.549.549c1.645 0 3.132-.684 4.127-1.835.297-.342.252-.855-.09-1.152-.342-.297-.855-.252-1.152.09-.342.387-.774.684-1.263.855V14.99h3.293c.297 0 .549-.252.549-.549s-.252-.549-.549-.549H8.449c-.297 0-.549.252-.549.549s.252.549.549.549z"/>
                  </svg>
                  <span className="text-sm font-medium">Instagram</span>
                </Link>
                
                <Link 
                  href="#" 
                  className="flex items-center space-x-2 p-3 bg-slate-700/30 hover:bg-gray-600/20 rounded-lg transition-all duration-300 group border border-slate-600/50 hover:border-gray-500/50"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm font-medium">Twitter</span>
                </Link>
                
                <Link 
                  href="https://www.linkedin.com/in/dholera-insider-1a6b57351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="flex items-center space-x-2 p-3 bg-slate-700/30 hover:bg-blue-600/20 rounded-lg transition-all duration-300 group border border-slate-600/50 hover:border-blue-500/50"
                >
                  <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </Link>
                
                <Link 
                  href="https://youtube.com/@dholerainsider?si=ZcBtHqUhtxqi90dY" 
                  className="col-span-2 flex items-center justify-center space-x-2 p-3 bg-slate-700/30 hover:bg-red-600/20 rounded-lg transition-all duration-300 group border border-slate-600/50 hover:border-red-500/50"
                >
                  <svg className="w-5 h-5 text-red-400 group-hover:text-red-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-medium">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                Copyright &copy; {year} Dholera Insider. All Rights Reserved.
              </p>
              
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;