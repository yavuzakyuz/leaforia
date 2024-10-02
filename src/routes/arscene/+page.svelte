<body style="margin: 0; overflow: hidden;">
  <!-- AR.js scene with no marker detection -->
  <a-scene embedded arjs="sourceType: webcam;">
    <!-- Render an image directly in the scene -->
    <a-image src="/leafora.png" position="0 1 -3" scale="2 2 2"></a-image>
    
    <!-- Add a camera to the scene -->
    <a-entity camera></a-entity>
  </a-scene>
</body>