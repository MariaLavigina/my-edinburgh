const Footer = () => {
  return (
    <footer className="text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white">&copy; {new Date().getFullYear()} My Edinburgh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;