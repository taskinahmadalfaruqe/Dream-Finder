const postPage = async () => {

    const res = await fetch("");
    const posts = await res.json();

    return (
        <div>
            <h1>Total Categories: </h1>
        </div>
    );
};

export default postPage;