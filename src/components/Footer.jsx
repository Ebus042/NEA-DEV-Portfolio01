// import { socialMedia } from "../data/constant";
// // import Location from "./Location";

// const Footer = () => {
//   return (
//     <footer className="mt-20 bg-gradient-to-tl from-slate-300 to-gray-400 py-1">
//       <div>
//         <h2 className="text-center text-2xl py-6 font-bold">Get In Touch</h2>
//       </div>
//       <div className="mx-10">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3>Social Media</h3>
//             <div className="flex space-x-4">
//               {socialMedia
//                 .filter((item) => item.href)
//                 .map((item) => (
//                   <a
//                     key={item.id}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img className="w-8 h-8" src={item.src} alt={item.alt} />
//                   </a>
//                 ))}
//             </div>
//           </div>
//           {socialMedia
//             .filter((item) => item.contactAddress)
//             .flatMap((item) => item.contactAddress)
//             .map((contact) => (
//               <div key={contact.id} className="">
//                 <div>
//                   <h2>Address</h2>
//                   <address>
//                     <p>{contact.location}</p>
//                   </address>
//                 </div>
//                 <div>
//                   <h3>Contact Us</h3>
//                   <a href={contact.href} target="_blank">
//                     <p>{contact.email}</p>
//                   </a>

//                   <p>{contact.phoneNumber}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { socialMedia } from "../data/constant";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-tl from-emerald-700 to-green-900 py-1">
      <div className="text-white text-center py-5 font-bold text-3xl">
        <h2>NEA-DEV</h2>
      </div>
      <div>
        <h2 className="text-center text-white text-2xl py-6 font-bold">
          Let's Connect
        </h2>
      </div>

      <div className="mx-10">
        <div className="flex flex-col md:flex-row justify-around gap-8">
          {/* Social Media */}
          <div>
            {/* <h3 className="text-lg font-semibold text-white mb-2">
              Social Media
            </h3> */}
            <div className="flex space-x-4">
              {socialMedia
                .filter((item) => item.href)
                .map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-12 bg-white rounded-full"
                    />
                  </a>
                ))}
            </div>
          </div>

          {/* Address & Contact */}
          {socialMedia
            .filter((item) => item.contactAddress)
            .flatMap((item) => item.contactAddress)
            .map((contact) => (
              <div key={contact.id} className="space-y-4">
                <div>
                  <h3 className="text-lg text-white font-semibold mb-2">
                    Address
                  </h3>
                  <span className="w-48 text-white">{contact.location}</span>
                </div>

                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-blue-900 underline"
                  >
                    {contact.email}
                  </a>
                  <p>{contact.phoneNumber}</p>
                </div>
              </div>
            ))}
        </div>
        <span className="text-gray-200 text-center flex justify-center py-5">
          &copy; {new Date().getFullYear()} NEA-DEV. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
