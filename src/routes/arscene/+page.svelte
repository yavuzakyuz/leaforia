<body style="margin: 0; overflow: hidden;">
  <a-scene embedded arjs="sourceType: webcam;">
    <!-- Marker definition -->
    <a-marker preset="hiro">
      <!-- Fern image plane -->
      <a-image src="/leafora.png" scale="1 1 1" position="0 0 0"></a-image>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</body>