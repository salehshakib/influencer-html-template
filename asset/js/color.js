// document.documentElement.style.setProperty("--var-primary-color", "#22223b");
document.documentElement.style.setProperty("--var-primary-color", "#dc2626");
document.documentElement.style.setProperty(
  "--var-primary-hover-color",
  "#C81E1E"
);

document.documentElement.style.setProperty("--var-secondary-color", "#fecaca");

const css = `
.primary-text {
  color: var(--var-primary-color) !important;
}


.primary-hover:hover{
background-color: var(--var-primary-hover-color) !important; 
    color: white !important;  
}

.primary-bg-hover{
  background-color: var(--var-primary-color) !important;
  &:hover {
    background-color: var(--var-primary-hover-color) !important; 
    color: white !important;   
  }
}
  
.primary-bg {
  background-color: var(--var-primary-color) !important;
}

li:hover .hover-bg {
  background-color: var(--var-secondary-color) !important;
}

.primary-border {
  border-color: var(--var-primary-color) !important;
  &:hover {
    border-color: var(--var-primary-color) !important;
  }
}
  
.secondary-border {
  border-color: var(--var-secondary-color) !important;
}

.hover-border:hover{
  border-color: var(--var-primary-color) !important;
  
}

.secondary-text {
  color: var(--var-secondary-color) !important;
}

.sec-bg {
  background-color: var(--var-secondary-color) !important;  
}

.secondary-bg:hover {
  background-color: var(--var-secondary-color) !important;
}

.primary-fill {
  fill: var(--var-secondary-color) !important;
}

.sec-fill {
   fill: var(--var-primary-color) !important;
}


.primary-stroke {
  stroke: var(--var-primary-color) !important;
}

.main-fill {
  fill: var(--var-primary-color) !important;
}

/* Change color on li hover */
li:hover .primary-fill {
  fill: var(--var-primary-color) !important;
}

/* Change text color on hover */
.hover-text:hover {
  color: var(--var-primary-color) !important;
}

li:hover a .hover-text {
  color: var(--var-primary-color) !important;
}

a:hover .hover-text {
  color: var(--var-primary-color) !important;
}

li button:hover .hover-text {
  color: var(--var-primary-color) !important;
}

.stroke-svg {
  stroke: var(--var-secondary-color) !important;
    &:hover {
      stroke: var(--var-primary-color) !important;
    }
}

`;

// Create and append the <style> element to the <head>
const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
