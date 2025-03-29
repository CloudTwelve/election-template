for (let i = 0; i < 50; i++)
    {
      let dot = document.createElement('div');
      dot.classList.add("dot");
      dot.style.top = (Math.random() * 100) + '%';
      dot.style.left = (Math.random() * 100) + '%';
      dot.style.animation = "flying " + Math.floor(Math.random() * 20 + 20) + "s infinite ease";
      dot.style.animation += "rotating 10s infinite ease";
      dot.style.opacity = Math.floor(Math.random() * 100) + '%';
      document.body.appendChild(dot);
  }