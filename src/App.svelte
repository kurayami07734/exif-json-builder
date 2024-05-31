<script lang="ts">
  import { extractExif } from "./lib/exif";

  let downloadURL: string | null = null;

  function readImage(e: any) {
    if (!e.target) return;
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      extractExif(e.target?.result).then((res) => (downloadURL = res));
    };
  }
  function download() {
    this.download = "exif.json";
  }
</script>

<main>
  <div class="container">
    <h1>Download exif.json for images</h1>
    <input
      type="file"
      name="file"
      id="upload"
      accept="image/jpeg"
      on:change={readImage}
    />

    {#if downloadURL}
      <a href={downloadURL} on:click={download}> download exif.json </a>
    {/if}
  </div>
</main>
