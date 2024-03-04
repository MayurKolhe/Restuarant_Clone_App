const Footer = () => {
  return (
    <div className="grid mx-8 justify-center">
      <div className="p-2">
        <strong className="border-4 p-1 m-1 shadow-lg bg-green-200">
          Restaurants App
        </strong>
      </div>
      <div className="font-serif text-base">
        <a
          className="text-blue-500"
          href="https://www.linkdin.com/mayur-kolhe"
          target="_blank"
        >
          Created by Mayur Kolhe
        </a>
      </div>
      <div className="p-1 ml-14 font-mono text-sm bg-slate-300 w-10">2023</div>
    </div>
  );
};

export default Footer;
