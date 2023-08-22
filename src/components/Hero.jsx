function HeroSection() {
    return (
        <main className="container">
            <section className="left">
                <h1 className="content__heading">
                    YOUR FEET
                    DESERVE
                    THE BEST
                </h1>
                <p className="content__paragraph">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero__btn">
                    <button className="btn">Shop Now</button>
                    <button className="secondary__btn">Category</button>
                </div>

                <div>
                    <p className="info">Also Available On.</p>
                    <div className="brands__icons">
                        <img src="./images/flipkart.png" alt="flipkart" />
                        <img src="./images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </section>
            <section className="right">
                <img src="./images/shoe_image.png" alt="shoe-img" className="main__image" />
            </section>
        </main>
    )
}

export default HeroSection;