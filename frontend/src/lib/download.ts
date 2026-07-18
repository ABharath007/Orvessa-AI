export async function downloadImage(
  imageUrl: string,
  filename = "orvessa-ai-design.jpg"
) {
  try {
    const response = await fetch(imageUrl);

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
    alert("Unable to download image.");
  }
}
