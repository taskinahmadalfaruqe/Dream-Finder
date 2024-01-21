import Lottie from "lottie-react";

const SignUpAnim = async () => {
  try {
    const res = await fetch("/map.json");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return <Lottie animationData={data} loop={true} />;
  } catch (error) {
    console.error("Error fetching animation data:", error);
    return <div>Failed to load animation</div>; // Return a fallback
  }
};

export default SignUpAnim;
