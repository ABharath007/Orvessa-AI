export async function shareImage(
  imageUrl: string,
  title = "Orvessa AI Design"
) {
  try {
    // Native Share API
    if (navigator.share) {
      await navigator.share({
        title,
        text: "Check out this AI-generated interior design!",
        url: imageUrl,
      });

      return;
    }

    // Fallback
    await navigator.clipboard.writeText(imageUrl);

    alert("✅ Image link copied to clipboard!");
  } catch (error) {
    console.error(error);
  }
}