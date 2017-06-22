// Code goes here

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("dragStart", event);
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect="move";
  console.log({
    x: event.pageX,
    y: event.pageY
  });
}

function drop(event) {
  const id = event.dataTransfer.getData("text");
  console.log("drop", id);
  const element = document.getElementById("drag");
  event.target.appendChild(element);
}