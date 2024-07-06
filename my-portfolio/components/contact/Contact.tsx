
import Head from 'next/head';

export default function Contact() {
  return (
    <div className=" min-h-screen flex items-center justify-center ">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <main>
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            Contact <span className="text-blue-500">Me</span>
          </h1>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-700 text-white px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-700 text-white px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                placeholder="Mobile Number"
                className="bg-gray-700 text-white px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="bg-gray-700 text-white px-4 py-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}


