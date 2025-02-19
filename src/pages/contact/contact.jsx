import { Button } from "@mui/material";
import iconIphone from "../../assets/images/icons-phone.png"

const Contact = () => {
  return (
    <div className="m-auto max-w-[1200px] p-6">
      <p className="text-gray-600 mb-4">Home / Contact</p>

      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="shadow-md w-full md:w-1/2 flex flex-col gap-5 p-6 rounded-lg">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src={iconIphone} alt="Phone" />
              <h1 className="text-lg font-semibold">Call To Us</h1>
            </div>
            <p>We are available 24/7, 7 days a week.<br />Phone: +8801611112222</p>
          </div>

          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src={iconIphone} alt="Email" />
              <h1 className="text-lg font-semibold">Write To Us</h1>
            </div>
            <p>Fill out our contact form, and we’ll get back to you shortly.</p>
          </div>
        </div>

        <div className="shadow-md w-full md:w-1/2 p-6 flex flex-col gap-4 rounded-lg">
          <div className="flex flex-wrap gap-4">
            <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Email" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Phone" className="border p-3 rounded w-full" />
          </div>
          <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32"></textarea>
          <Button variant="contained" className="bg-[#DB4444] w-full md:w-auto">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;