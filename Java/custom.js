document.addEventListener('DOMContentLoaded', function () {
    var customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);
  
    document.body.addEventListener('mousemove', function (e) {
      customCursor.style.left = e.pageX + 'px';
      customCursor.style.top = e.pageY + 'px';
    });
  
    document.body.addEventListener('mouseenter', function () {
      customCursor.style.display = 'block';
    });
  
    document.body.addEventListener('mouseleave', function () {
      customCursor.style.display = 'none';
    });
  });
  