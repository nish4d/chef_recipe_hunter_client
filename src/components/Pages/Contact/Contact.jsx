import React from "react";
import bg from "../../../assets/blogBg.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className=" flex justify-start items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-[40rem] mx-32">
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[40rem]">
            <form action="" method="">
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-slate-400"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-slate-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-slate-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="w-full rounded-md border border-[#e0e0e0] bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-slate-400"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-slate-300 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <Link to="">
                  <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;