<body style="margin: 0; overflow: hidden;">
  <!-- AR.js scene without marker detection -->
  <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: true;">
    <!-- Simple object (a box) for debugging -->
    <a-box position="0 0 -2" rotation="0 45 0" color="#4CC3D9" scale="0.5 0.5 0.5"></a-box>

    <!-- Camera entity -->
    <a-entity camera></a-entity>
  </a-scene>
</body>