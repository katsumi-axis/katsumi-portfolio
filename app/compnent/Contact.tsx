function Contact() {
  return (
    <div id="Contact " className="m-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/3 pr-0 md:pr-4 mx-auto">
          <a
            href="mailto:withcomputer@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            withcomputer@gmail.com
          </a>
          <br />
          <a
            href="https://twitter.com/furuta_katsumi"
            className="text-blue-600 hover:text-blue-800"
          >
            @furuta_katsumi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
