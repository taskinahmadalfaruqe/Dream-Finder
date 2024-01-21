import Lottie from "lottie-react";

const SignInAnim = async () => {
  try {
    const res = await fetch("/runningBall.json");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return (
      <div className="anim-div">
        <Lottie animationData={data} loop={true} />;
      </div>
    );
  } catch (error) {
    console.error("Error fetching animation data:", error);
    return <div>Failed to load animation</div>; // Return a fallback
  }
};

export default SignInAnim;
