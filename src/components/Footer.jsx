function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <p>CopyRight ©️ {currentYear}</p>
    </footer>
  );
}

export default Footer;
