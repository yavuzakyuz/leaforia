<script>
    import { goto } from '$app/navigation';
    let isLoading = false; // State to control the spinner display
  
    // Function to handle the button click
    function startDemo() {
      isLoading = true;
      
      // Simulate a loading process, you can replace this with actual logic
      setTimeout(() => {
        isLoading = false;
        goto('/arscene');
      }, 3000);
    }
  </script>
  
<body class="bg-customBackground2 ">
    
     <div class="flex flex-col items-center justify-center pt-20"> 
      <div class="h-64 w-64 overflow-hidden">
        <img src="/leafora.png" alt="leaforapng" class="h-full w-full object-cover">
      </div>
      <h1 class="text-3xl text-leaforaMainText">Leafora Studios</h1>
  

    <!-- Start Demo Button or Spinner -->
    <div class="mt-20">
        {#if isLoading}
          <!-- Loading spinner in place of the button -->
          <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-leaforaMainText"></div>
        {:else}
          <!-- Start Demo Button -->
          <button 
            class="px-6 py-3 bg-leaforaMainBtn text-leaforaTextBright text-xl rounded-lg"
            on:click={startDemo}>
            Start Demo
          </button>
        {/if}
      </div>
    </div>
</body>




  