export default async function LoadEverything() {
  const LoadImages = () => {
    const images = Array.from(document.images);
    const promises = images.map((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.addEventListener("load", resolve(), { once: true });
        img.addEventListener("error", resolve(), { once: true });
      });
    });

    return Promise.all(promises);
  };
  const LoadVideos = () => {
    const videos = Array.from(document.querySelectorAll("video"));
    const promises = videos.map((video) => {
      if (video.readyState >= 3) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        video.addEventListener("loadeddata", () => resolve(), { once: true });
        video.addEventListener("error", () => resolve(), { once: true });
      });
    });

    return Promise.all(promises);
  };

  await Promise.all([document.fonts.ready, LoadImages(), LoadVideos()]);
}
