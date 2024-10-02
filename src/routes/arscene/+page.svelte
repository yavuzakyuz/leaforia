<body style="margin: 0; overflow: hidden;">
  <!-- AR.js scene without marker detection -->
  <a-scene embedded arjs="sourceType: webcam;">
    <!-- Test with a simple box to ensure rendering works -->
    <a-box position="0 1 -2" rotation="0 45 0" color="#4CC3D9" scale="0.5 0.5 0.5"></a-box>
    
    <!-- Render an image directly in the scene (make sure the path is correct) -->
    <a-assets>
      <img id="leafora" src="/leafora.png" />
    </a-assets>
    <a-image src="#leafora" position="0 1 -3" scale="2 2 2"></a-image>

    <!-- Add a camera to the scene -->
    <a-entity camera></a-entity>
  </a-scene>
</body>