const Homepage = (() => {

  const home = () => {
    const body1 = document.getElementsByTagName("body");
    const container = document.createElement("div");
    const heading = document.createElement("h1");
    heading.innerText = "Finding Falcone!!";
    heading.className = "main-heading";
    container.appendChild(heading);
    document.body.appendChild(container);
  };

  return { home };

})();

export default Homepage;